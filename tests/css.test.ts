/* eslint-disable import/no-duplicates */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { html, fixture, expect } from 'qing-t';
import '../dist/main.js';
import { QingOverlay } from '../dist/main.js';
import { aTimeout } from './lib.js';

it('<dialog> styles', async () => {
  const el = await fixture<QingOverlay>(html` <qing-overlay open><p>test</p></qing-overlay> `);
  await aTimeout();

  const styles = window.getComputedStyle(el.shadowRoot!.querySelector('dialog')!);
  expect(styles.display).to.eq('flex');
  expect(styles.flexDirection).to.eq('column');
  expect(styles.padding).to.eq('16px');
  expect(styles.overflow).to.eq('auto');
});

it('height = auto, width = full', async () => {
  const el = await fixture<QingOverlay>(html` <qing-overlay open><p>test</p></qing-overlay> `);
  await aTimeout();

  const rect = el.shadowRoot!.querySelector('dialog')!.getBoundingClientRect();
  expect(rect.x).to.greaterThan(0);
  expect(rect.y).to.greaterThan(0);
  expect(rect.width).to.greaterThan(0);
  expect(rect.height).to.greaterThan(0);
});
