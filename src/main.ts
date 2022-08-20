import { html, css, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';

const openProp = 'open';

// https://gist.github.com/jbmoelker/226594f195b97bf61436
/**
 * HTMLDialogELement
 * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement
 */
interface HTMLDialogElement extends HTMLElement {
  /**
   * Reflects the open HTML attribute,
   * indicating that the dialog is available for interaction.
   */
  open: boolean;
  /**
   * Gets/sets the return value for the dialog.
   */
  returnValue: string;
  /**
   * Closes the dialog. An optional DOMString may be passed as an argument,
   * updating the returnValue of the the dialog.
   */
  close(): void;
  /**
   * Displays the dialog modelessly, i.e. still allowing interaction with
   * content outside of the dialog.
   * An optional Element or MouseEvent may be passed as an argument,
   * to specify an anchor point to which the dialog is fixed.
   */
  show(): void;
  /**
   * Displays the dialog for exclusive interaction, over the top of any
   * other dialogs that might be present.
   * An optional Element or MouseEvent may be passed as an argument,
   * to specify an anchor point to which the dialog is fixed.
   */
  showModal(): void;
}

@customElement('qing-overlay')
export class QingOverlay extends LitElement {
  static override get styles() {
    return css`
      :host {
        display: block;
      }

      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }

      dialog {
        max-height: 100vh;
        max-width: 100vw;
        border: 0;
        padding: 1rem;
        display: flex;
        flex-direction: column;
      }

      dialog:not([open]) {
        pointer-events: none;
        opacity: 0;
      }

      dialog::backdrop {
        background: var(--overlay-backdrop-background, rgba(0, 0, 0, 0.3));
        animation: fade-in var(--overlay-animation-duration, 0.5s);
      }

      dialog.qing-spinner::backdrop {
        background: var(--overlay-backdrop-background, rgba(0, 0, 0, 0.9));
        animation: fade-in var(--overlay-animation-duration, 0.1s);
      }

      @keyframes fade-in {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    `;
  }

  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: Boolean, reflect: true }) closeOnEsc = false;

  // Remove this when https://github.com/whatwg/fullscreen/issues/124 is resolved.
  // Used in qing since ::backdrop is not fully customizable.
  @property({ type: Number }) qingMode = 0;

  override render() {
    return html`
      <dialog
        part="dialog"
        class=${this.qingMode ? 'qing-spinner' : ''}
        @cancel=${this.handleCancel}>
        <slot></slot>
      </dialog>
    `;
  }

  override updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has(openProp)) {
      if (!!changedProperties.get(openProp) !== this.open) {
        const dialogEl = this.shadowRoot?.querySelector('dialog') as HTMLDialogElement | null;
        if (this.open) {
          dialogEl?.showModal();
        } else {
          dialogEl?.close();
        }

        const eventName = this.open ? 'overlay-open' : 'overlay-close';
        // `setTimeout` ensures `updated` is finished first.
        setTimeout(() => this.dispatchEvent(new CustomEvent(eventName)), 0);
      }
    }
  }

  // eslint-disable-next-line class-methods-use-this
  private handleCancel(e: Event) {
    e.preventDefault();
    if (this.closeOnEsc) {
      this.open = false;
    } else {
      this.dispatchEvent(new CustomEvent('overlay-esc-down'));
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'qing-overlay': QingOverlay;
  }
}
