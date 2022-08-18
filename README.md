# qing-overlay (WIP)

[![Build Status](https://github.com/mgenware/qing-overlay/workflows/Build/badge.svg)](https://github.com/mgenware/qing-overlay/actions)
[![Pages Status](https://github.com/mgenware/qing-overlay/workflows/Pages/badge.svg)](https://github.com/mgenware/qing-overlay/actions)
[![npm version](https://img.shields.io/npm/v/qing-overlay.svg?style=flat-square)](https://npmjs.com/package/qing-overlay)
[![Node.js Version](http://img.shields.io/node/v/qing-overlay.svg?style=flat-square)](https://nodejs.org/en/)

An overlay component based on the `<dialog>` element ([MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)).

## Demo

[Demo](https://mgenware.github.io/qing-overlay/)

## Installation

> qing-overlay is based on lit.

```sh
npm i qing-overlay lit
```

## Usage

### A minimal example

```html
<qing-overlay>
  <h2>Title</h2>
  <p>Hello world</p>
</qing-overlay>
```

### Overlay size

Overlay size is fully customizable. By default, height defaults to auto (fits content size), and width defaults to `100vw`. You can add custom CSS to fit your use case. Some examples:

```css
/** Example 1 **/
/** 80% of screen width on medium or large screens */
@media (min-width: 768px) {
  qing-overlay::part(overlay) {
    width: 80%;
  }
}

/** Example 2 **/
/** Auto width with min and max values on medium or large screens */
@media (min-width: 768px) {
  qing-overlay::part(overlay) {
    width: auto;
    max-width: min(100vw, 1000px);
    min-width: 400px;
  }
}

/** Example 3 **/
/** Fullscreen dialog with margins **/
qing-overlay::part(overlay) {
  width: calc(100vw - 1rem);
  height: calc(100vh - 1rem);
}
@media (min-width: 768px) {
  qing-overlay::part(overlay) {
    width: calc(100vw - 4rem);
    height: calc(100vh - 4rem);
  }
}
```

### Attributes

- `open`: `boolean` indicates whether the overlay is visible.

### Events

`overlay-open`: fires when an overlay is opened.
`overlay-close`: fires when an overlay is closed.
`overlay-esc-down`: fires when ESC key is pressed.
`overlay-enter-down`: fires when Enter key is pressed.

### CSS Shadow Parts

- `overlay-background` the background view of the overlay.
- `overlay` the overlay itself.

### CSS Variables

- `--overlay-bg-z-index` z-index of the overlay, defaults to `1000`. Note that this is the `z-index` of overlay background, not overlay content. Overlay content is rendered in `<dialog>` element, which is added to the top layer ([spec](https://fullscreen.spec.whatwg.org/#new-stacking-layer)).
