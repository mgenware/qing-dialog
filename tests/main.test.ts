/* eslint-disable import/no-duplicates */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { html, fixture, expect, oneEvent, tDOM } from 'qing-t';
import '../dist/main.js';
import { QingOverlay } from '../dist/main.js';
import { aTimeout } from './lib.js';

const openEvent = 'overlay-open';
const closeEvent = 'overlay-close';
const escEvent = 'overlay-esc-down';

it('Default state', async () => {
  const el = await fixture<QingOverlay>(html` <qing-overlay><p>test</p></qing-overlay> `);

  tDOM.isBlockElement(el);
  expect(el.innerHTML).to.eq('<p>test</p>');
  expect(el.getAttribute('open')).to.eq(null);
});

it('Open and close events', async () => {
  const el = await fixture<QingOverlay>(html`
    <qing-overlay>
      <div>Hello World</div>
      <form>
        <input type="text" value="name" id="textInput" />
      </form>
    </qing-overlay>
  `);

  const shown = oneEvent(el, openEvent);
  el.open = true;
  await shown;
  expect(el.getAttribute('open')).to.eq('');

  const closed = oneEvent(el, closeEvent);
  el.open = false;
  await closed;
  expect(el.getAttribute('open')).to.eq(null);

  const reopen = oneEvent(el, openEvent);
  el.open = true;
  await reopen;
  expect(el.getAttribute('open')).to.eq('');
});

it('Keydown events', async () => {
  const el = await fixture(html`
    <qing-overlay open>
      <div>Hello World</div>
      <form>
        <input type="text" value="name" id="textInput" />
      </form>
    </qing-overlay>
  `);
  await aTimeout();

  const escDown = oneEvent(el, escEvent);
  document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
  await escDown;
});

it('The internal <dialog> open attr should be in sync', async () => {
  const el = await fixture<QingOverlay>(html` <qing-overlay><p>test</p></qing-overlay> `);

  const dialogEl = el.shadowRoot?.querySelector('dialog');
  expect(dialogEl?.getAttribute('open')).to.eq(null);

  const shown = oneEvent(el, openEvent);
  el.open = true;
  await shown;
  expect(dialogEl?.getAttribute('open')).to.eq('');

  const closed = oneEvent(el, closeEvent);
  el.open = false;
  await closed;
  expect(el.getAttribute('open')).to.eq(null);
  expect(dialogEl?.getAttribute('open')).to.eq(null);
});

it('Disable the intrinsic <dialog> Esc behavior', async () => {
  const el = await fixture<QingOverlay>(html` <qing-overlay open><p>test</p></qing-overlay> `);
  await aTimeout();

  const dialogEl = el.shadowRoot?.querySelector('dialog');

  const escDown = oneEvent(el, escEvent);
  document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
  await escDown;

  // When a <dialog> is shown, pressing Esc will cause its `open` attr
  // to be unset. qing-overlay disabled this behavior by default.
  expect(dialogEl?.getAttribute('open')).to.eq('');
});

it('`closeOnEsc`', async () => {
  const el = await fixture<QingOverlay>(
    html` <qing-overlay open closeOnEsc><p>test</p></qing-overlay> `,
  );
  await aTimeout();

  const dialogEl = el.shadowRoot?.querySelector('dialog');

  const closed = oneEvent(el, closeEvent);
  document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
  await closed;

  expect(el.getAttribute('open')).to.eq(null);
  expect(dialogEl?.getAttribute('open')).to.eq(null);
});
