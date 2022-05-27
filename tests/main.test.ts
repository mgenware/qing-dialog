/* eslint-disable import/no-duplicates */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { html, fixture, expect, oneEvent, tDOM } from 'qing-t';
import '../dist/main.js';
import { QingOverlay } from '../dist/main.js';
import { aTimeout } from './lib.js';

const openChanged = 'openChanged';
const escKeyDown = 'escKeyDown';
const enterKeyDown = 'enterKeyDown';

it('Default state', async () => {
  const el = await fixture<QingOverlay>(html` <qing-overlay><p>test</p></qing-overlay> `);

  tDOM.isBlockElement(el);
  expect(el.innerHTML).to.eq('<p>test</p>');
  expect(el.getAttribute('open')).to.eq(null);
});

it('openChanged', async () => {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
  const el = (await fixture(html`
    <qing-overlay>
      <div>Hello World</div>
      <form>
        <input type="text" value="name" id="textInput" />
      </form>
    </qing-overlay>
  `)) as QingOverlay;

  const shown = oneEvent(el, openChanged);
  el.open = true;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  let e = await shown;
  expect(e.detail).to.eq(true);
  expect(el.getAttribute('open')).to.eq('');

  const closed = oneEvent(el, openChanged);
  el.open = false;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  e = await closed;
  expect(e.detail).to.eq(false);
  expect(el.getAttribute('open')).to.eq(null);

  const reopen = oneEvent(el, openChanged);
  el.open = true;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  e = await reopen;
  expect(e.detail).to.eq(true);
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

  const escDown = oneEvent(el, escKeyDown);
  document.dispatchEvent(new KeyboardEvent('keyup', { key: 'Escape' }));
  await escDown;

  const enterDown = oneEvent(el, enterKeyDown);
  document.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter' }));
  await enterDown;
});

it('Restore focus', async () => {
  await fixture(html`
    <button>Btn</button>
    <qing-overlay>
      <div>Hello World</div>
      <form>
        <input autofocus type="text" value="name" id="textInput" />
      </form>
    </qing-overlay>
  `);

  await aTimeout();

  // Focus the button.
  document.querySelector('button')?.focus();
  expect(document.activeElement?.textContent).to.eq('Btn');

  // Open the overlay.
  const overlay = document.querySelector('qing-overlay') as QingOverlay;
  const shown = oneEvent(overlay, openChanged);
  overlay.open = true;
  await shown;
  // Focus should be the input inside the dialog.
  expect(document.activeElement?.tagName).to.eq('INPUT');

  // Close the overlay.
  const closed = oneEvent(overlay, openChanged);
  overlay.open = false;
  await closed;

  // Focus should be restored.
  expect(document.activeElement?.textContent).to.eq('Btn');
});
