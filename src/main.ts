import { html, css, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';

export const overlayClass = 'overlay';
export const overlayBackClass = 'overlay-background';

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

      .overlay-background {
        height: 100vh;
        width: 100vw;
        position: fixed;
        z-index: var(--overlay-bg-z-index, 1000);
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.3);
        align-items: center;
        justify-content: center;
        animation: fadeIn var(--overlay-animation-duration, 0.5s);
      }

      .overlay {
        max-height: 100vh;
        max-width: 100vw;
        width: 100vw;
        border: 0;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        overflow: auto;
      }

      @keyframes fadeIn {
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

  override render() {
    const { open } = this;
    return html`
      <div
        style=${styleMap({
          display: open ? 'flex' : 'none',
        })}
        class=${overlayBackClass}
        part=${overlayBackClass}>
        <dialog
          class=${classMap({ [overlayClass]: true })}
          part=${overlayClass}
          @cancel=${this.handleCancel}>
          <slot></slot>
        </dialog>
      </div>
    `;
  }

  override updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has(openProp)) {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
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
