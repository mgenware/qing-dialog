# qing-dialog-component (WIP)

[![Build Status](https://img.shields.io/travis/mgenware/qing-dialog-component.svg?style=flat-square&label=Build+Status)](https://travis-ci.org/mgenware/qing-dialog-component)
[![npm version](https://img.shields.io/npm/v/qing-dialog-component.svg?style=flat-square)](https://npmjs.com/package/qing-dialog-component)
[![Node.js Version](http://img.shields.io/node/v/qing-dialog-component.svg?style=flat-square)](https://nodejs.org/en/)

Dialog component for [qing](https://github.com/mgenware/qing), built with lit-element, mobile friendly.

**Work in progress, not released yet, stay tuned!**

## Installation

```sh
yarn add qing-dialog-component
```

## Usage

### Properties

```typescript
// A group of builtin button types.
export type PresetButtonType = 'ok' | 'yes' | 'no' | 'cancel';

// A group of builtin dialog icons.
export type DialogIconType = 'error' | 'success' | 'warning';

// The dialog component accepts an array of buttons, each can be a
// preset `PresetButtonType` or a more customized `DialogButton`
// (see type definition below).
export type DialogButtonType = PresetButtonType | DialogButton;

// Contains information on how `isOpenChanged` event is triggered.
export interface IsOpenChangedArgs {
  isOpen?: boolean;
  button?: DialogButton;
}

// Dialog component: <qing-dialog>
class QingDialog {
  // Indicates whether the dialog is visible.
  isOpen: boolean;
  // The heading of the dialog.
  dialogTitle: string;
  // Bottom buttons of the dialog.
  buttons: DialogButtonType[];
  // Icon of the dialog.
  icon: DialogIconType;
  // Index of default button, defaults to 0 (first button).
  defaultButtonIndex: number;
  // Index of cancel button.
  // A cancel button will be clicked when user presses Esc key.
  cancelButtonIndex: number;

  // ------- Events -------

  // Fires when `isOpen` property changes.
  isOpenChanged: CustomEvent<IsOpenChangedArgs>;
  shown: CustomEvent<IsOpenChangedArgs>;
  closed: CustomEvent<IsOpenChangedArgs>;

  // Fires when dialog button is clicked.
  buttonClick: CustomEvent<DialogButton>;
}

// A more customized button.
export interface DialogButton {
  // One of the preset types of the button, see PresetButtonType.
  type?: PresetButtonType;
  // Used to identify a button if `type` is not set.
  name?: string;
  // Button content.
  text?: string;
  // lit-button style.
  style?: string;
}
```

### CSS variables

- `--dialog-max-width` maximum width of the dialog, defaults to `100%` on small screens, `80%` on large screens.
- `--dialog-padding` padding of the dialog.
- `--dialog-header-padding`, `--dialog-content-padding`, `--dialog-footer-padding` padding of different parts of the dialog.
- `--dialog-buttons-display` CSS `display` value of the dialog buttons container `div`, defaults to `flex`.
- `--dialog-buttons-justify-content` alignment of the dialog buttons:
  - `flex-end` the default value, aligned to the right.
  - `flex-start` aligned to the left.
  - `center` centered.
- `--dialog-icon-margin` margin of the dialog icon.
- Icon colors:
  - `--dialog-icon-error`, `--dialog-icon-warning`, `--dialog-icon-success`.

### Autofocus

Use `isOpenChanged` event to auto focus an element when the dialog shows up, example:

```js
html`
  <qing-dialog
    dialogTitle="Title"
    .buttons=${['ok']}
    @isOpenChanged=${e => {
      if (e.detail) {
        // If dialog is open, set focus on a specified element.
        this.shadowRoot.getElementById('textInput').focus();
      }
    }}
  >
    <form>
      <input type="text" id="textInput" />
    </form>
  </qing-dialog>
`;
```

## Build instructions

- `yarn dev` builds the project in dev mode
- `yarn build` builds and lints the project in production mode
- `yarn demo` runs the demo in browser (you have to build the project first)
- `yarn test` runs UI tests
