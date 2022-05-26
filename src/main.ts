import { html, css, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';
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
   * Displays the dialog modelessly, i.e. still allowing interaction with content outside of the dialog.
   * An optional Element or MouseEvent may be passed as an argument,
   * to specify an anchor point to which the dialog is fixed.
   */
  show(): void;
  /**
   * Displays the dialog for exclusive interaction, over the top of any other dialogs that might be present.
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
        z-index: var(--overlay-z-index, 1000);
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.3);
        align-items: center;
        justify-content: center;
      }

      .overlay {
        max-height: 100vh;
        max-width: 100vw;
        width: 100vw;
        border: 0;
        display: flex;
        flex-direction: column;
        overflow: auto;
      }
    `;
  }

  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: Boolean, reflect: true }) legacy = false;

  override firstUpdated() {
    document.addEventListener('keyup', this.handleKeyUp.bind(this));
  }

  override render() {
    const { open } = this;
    const dialogEl = this.legacy
      ? html`<div class=${overlayClass} part=${overlayClass}>
          <slot></slot>
        </div>`
      : html`<dialog class=${overlayClass} part=${overlayClass}>
          <slot></slot>
        </dialog>`;
    return html`
      <div
        style=${styleMap({
          display: open ? 'flex' : 'none',
        })}
        class=${overlayBackClass}
        part=${overlayBackClass}>
        ${dialogEl}
      </div>
    `;
  }

  override updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has(openProp)) {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (!!changedProperties.get(openProp) !== this.open) {
        if (!this.legacy) {
          const dialogEl = this.shadowRoot?.querySelector('dialog') as HTMLDialogElement | null;
          if (this.open) {
            dialogEl?.showModal();
          } else {
            dialogEl?.close();
          }
        }
        // `setTimeout` ensures `updated` is finished first.
        setTimeout(() => this.onOpenChanged(), 0);
      }
    }
  }

  private onOpenChanged() {
    this.dispatchEvent(new CustomEvent<boolean>('openChanged', { detail: this.open }));
  }

  private handleKeyUp(e: KeyboardEvent) {
    if (!this.open) {
      return;
    }
    if (e.key === 'Escape' || e.key === 'Esc') {
      this.dispatchEvent(new CustomEvent('escKeyDown'));
    } else if (e.key === 'Enter') {
      this.dispatchEvent(new CustomEvent('enterKeyDown'));
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'qing-overlay': QingOverlay;
  }
}
