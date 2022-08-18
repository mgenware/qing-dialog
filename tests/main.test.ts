/* eslint-disable import/no-duplicates */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { html, fixture, expect, oneEvent, tDOM } from 'qing-t';
import '../dist/main.js';
import { QingOverlay } from '../dist/main.js';
import { aTimeout } from './lib.js';

const openEvent = 'overlay-open';
const closeEvent = 'overlay-close';
const escEvent = 'overlay-esc-down';
const enterEvent = 'overlay-enter-down';

it('Default state', async () => {
  const el = await fixture<QingOverlay>(html` <qing-overlay><p>test</p></qing-overlay> `);

  tDOM.isBlockElement(el);
  expect(el.innerHTML).to.eq('<p>test</p>');
  expect(el.getAttribute('open')).to.eq(null);
});

it('overlay-open', async () => {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
  const el = (await fixture(html`
    <qing-overlay>
      <div>Hello World</div>
      <form>
        <input type="text" value="name" id="textInput" />
      </form>
    </qing-overlay>
  `)) as QingOverlay;

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

  const enterDown = oneEvent(el, enterEvent);
  document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
  await enterDown;
});
