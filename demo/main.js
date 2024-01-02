import { html, LitElement, css } from '../node_modules/lit/index.js';
import '../node_modules/qing-button/dist/main.js';
import '../dist/main.js';

const sharedStyles = css`
  button {
    background-color: #e7e7e7;
    color: black;
    border: 0;
    border-radius: 0;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    font-size: 1rem;
    padding: 0.6rem 0.9rem;
    transition: all 0.3s ease 0s;
  }
  button:hover {
    opacity: 0.8;
  }
  button:active,
  button.selected {
    filter: brightness(80%);
  }
  button:disabled {
    pointer-events: none;
    opacity: 0.6;
  }
  button:focus {
    box-shadow: inset 0 0 0 0.2rem var(--button-outline-color, #8dc3eb);
    outline: none;
  }
`;

class DynamicContent extends LitElement {
  render() {
    return html` <h2>Title</h2>
      <div>
        <span id="span">Hello world <button @click=${this.handleClick}>Expand</button></span>
      </div>`;
  }

  handleClick() {
    this.shadowRoot.getElementById(
      'span',
    ).textContent = `The div element has no special meaning at all. It represents its children. It can be
    used with the class, lang, and title attributes to mark up semantics common to a group
    of consecutive elements. The div element has no special meaning at all. It represents
    its children. It can be used with the class, lang, and title attributes to mark up
    semantics common to a group of consecutive elements. The div element has no special
    meaning at all. It represents its children. It can be used with the class, lang, and
    title attributes to mark up semantics common to a group of consecutive elements.`;
  }
}

DynamicContent.styles = [
  sharedStyles,
  css`
    :host {
      display: flex;
      flex-grow: 1;
      flex-direction: column;
    }
  `,
];

customElements.define('dynamic-content', DynamicContent);

export class ExampleApp extends LitElement {
  render() {
    return html`
      <div id="main">
        <h2>Layouts</h2>
        ${this.r('Width: 80%, Height: auto', 'layout-w-80')}
        ${this.r('Width: auto + min value, Height: auto', 'layout-auto-min-width')}
        ${this.r('Fullscreen with margins', 'layout-full-margins')} ${this.rFullscreenEditor()}
        <h2>Events</h2>
        ${this.r('Handle events', 'handle-events', undefined, {
          open: () => alert('overlay-open'),
          close: () => alert('overlay-close'),
          dismiss: () => alert('overlay-dismiss'),
          escDown: () => {
            alert('Esc down');
            this.closeOverlay('handle-events');
          },
        })}
        <h2>Focus</h2>
        ${this.r(
          'Focus',
          'focus',
          html` <h2>Title</h2>
            <p>Hello world</p>
            <p>
              <input autofocus type="text" value="name" id="textInput" />
            </p>`,
        )}
        <h2>Styles</h2>
        ${this.r(
          'Long text',
          'long-text',
          html`<h2>Long text</h2>
            <pre style="overflow-y: auto; margin: 0">
${`${'2020 is coming. '.repeat(20)}\n`.repeat(500)}</pre
            >`,
        )}
        ${this.r('Border styles', 'border-styles')}
        ${this.rElement(
          'Themes',
          'themes',
          html` <qing-overlay closeOnEsc id="themes">
            <h2>Title</h2>
            <p>
              <button @click=${this.handleLightBtnClick}>Light</button>
              <button @click=${this.handleDarkBtnClick}>Dark</button>
              <button @click=${() => this.closeOverlay('themes')}>Close</button>
            </p>
          </qing-overlay>`,
        )}
        <h2>Nesting</h2>
        ${this.rElement(
          'Nesting',
          'nesting',
          html` <qing-overlay id="nesting" closeOnEsc>
            <h2>Title</h2>
            <p>
              <button @click=${() => this.openOverlay('child1')}>Open</button>
              <button @click=${() => this.closeOverlay('nesting')}>Close</button>
            </p>
          </qing-overlay>`,
        )}
        <div class="nested-overlays">
          <qing-overlay id="child1" closeOnEsc>
            <h2>Title</h2>
            <p>
              <button @click=${() => this.openOverlay('child2')}>Open</button>
              <button @click=${() => this.closeOverlay('child1')}>Close</button>
            </p>
          </qing-overlay>
          <qing-overlay id="child2" closeOnEsc>
            <h2>Title</h2>
            <p>
              <button @click=${() => this.closeOverlay('child2')}>Close</button>
            </p>
          </qing-overlay>
        </div>
      </div>
    `;
  }

  r(text, id, content, events) {
    const btnID = `${id}-btn`;
    return html`
      <p>
        <button @click=${() => this.openOverlay(id)}>${text}</button>
      </p>
      <qing-overlay
        id=${id}
        ?closeOnEsc=${!events?.escDown}
        @overlay-open=${() => events?.open()}
        @overlay-close=${() => events?.close()}
        @overlay-dismiss=${() => events?.dismiss()}
        @overlay-esc-down=${() => events?.escDown()}>
        ${content ?? html`<dynamic-content></dynamic-content>`}
        <p style="text-align:center">
          <button id=${btnID} @click=${() => this.closeOverlay(id)}>OK</button>
        </p>
      </qing-overlay>
    `;
  }

  rElement(text, id, content) {
    return html`
      <p>
        <button @click=${() => this.openOverlay(id)}>${text}</button>
      </p>
      ${content}
    `;
  }

  rFullscreenEditor() {
    const id = 'fullscreen-editor';
    return html`
      <p>
        <button @click=${() => this.openOverlay('fullscreen-editor')}>Fullscreen editor</button>
      </p>
      <qing-overlay id=${id}>
        <div class="root">
          <textarea></textarea>
          <p style="text-align:center">
            <button @click=${() => this.closeOverlay(id)}>OK</button>
          </p>
        </div>
      </qing-overlay>
    `;
  }

  get mainElement() {
    return this.shadowRoot.getElementById('main');
  }

  handleLightBtnClick() {
    this.mainElement.classList.remove('theme-dark');
  }

  handleDarkBtnClick() {
    this.mainElement.classList.add('theme-dark');
  }

  openOverlay(id) {
    this.shadowRoot.getElementById(id).setAttribute('open', '');
  }

  closeOverlay(id) {
    this.shadowRoot.getElementById(id).removeAttribute('open');
  }
}

ExampleApp.styles = [
  sharedStyles,
  css`
    :host {
      --default-back-color: white;
      --default-fore-color: black;
      --default-btn-back-color: lightgray;
      --default-success-color: #89ec7c;
    }

    qing-overlay::part(dialog) {
      padding: 0 1.25rem;
    }

    @media (min-width: 768px) {
      qing-overlay::part(dialog) {
        width: 80%;
      }

      qing-overlay#layout-auto-min-width::part(dialog) {
        width: auto;
        min-width: 400px;
        max-width: min(100vw, 1000px);
      }
    }

    qing-overlay#layout-full-margins::part(dialog) {
      width: calc(100vw - 1rem);
      height: calc(100vh - 1rem);
    }
    @media (min-width: 768px) {
      qing-overlay#layout-full-margins::part(dialog) {
        width: calc(100vw - 4rem);
        height: calc(100vh - 4rem);
      }
    }

    qing-overlay#fullscreen-editor::part(dialog) {
      width: calc(100vw - 1rem);
      height: calc(100vh - 1rem);
    }
    @media (min-width: 768px) {
      qing-overlay#fullscreen-editor::part(dialog) {
        width: calc(100vw - 4rem);
        height: calc(100vh - 4rem);
      }
    }
    #fullscreen-editor .root {
      height: 100%;
      display: flex;
      flex-direction: column;
      padding: 1rem;
    }
    #fullscreen-editor .root textarea {
      flex: 1;
    }

    h2 {
      margin-bottom: 0;
    }
    #border-styles::part(dialog) {
      border: 4px dashed green;
      border-radius: 10px;
    }
    .theme-dark {
      --default-back-color: black;
      --default-fore-color: #777777;
      --default-btn-back-color: #1a1a1a;
      --default-success-color: #073f00;
    }
    #themes::part(dialog) {
      color: var(--default-fore-color);
      background-color: var(--default-back-color);
    }
    #themes button {
      border: 1px solid #818181;
      color: var(--default-fore-color);
      background-color: var(--default-btn-back-color);
    }

    qing-overlay#nesting::part(dialog) {
      width: calc(100vw - 1rem);
      height: calc(100vh - 1rem);
    }
    @media (min-width: 768px) {
      qing-overlay#nesting::part(dialog) {
        width: calc(100vw - 4rem);
        height: calc(100vh - 4rem);
      }
    }

    qing-overlay#child1::part(dialog) {
      width: calc(100vw - 2rem);
      height: calc(100vh - 2rem);
    }
    @media (min-width: 768px) {
      qing-overlay#child1::part(dialog) {
        width: calc(100vw - 8rem);
        height: calc(100vh - 8rem);
      }
    }

    qing-overlay#child2::part(dialog) {
      width: calc(100vw - 4rem);
      height: calc(100vh - 4rem);
    }
    @media (min-width: 768px) {
      qing-overlay#child2::part(dialog) {
        width: calc(100vw - 16rem);
        height: calc(100vh - 16rem);
      }
    }
  `,
];

customElements.define('example-app', ExampleApp);
