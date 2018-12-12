/* eslint-env node, es6 */
const puppeteer = require('puppeteer-firefox');

(async function () {
  try {
    console.log('puppeteer.launch')
    const browser = await puppeteer.launch({dumpio: true});
    console.log('puppeteer launched', browser)
    console.log('browser.newPage')
    const page = await browser.newPage();
    console.log('puppeteer page', page)
    browser.on('error', (err) => console.log('err', err));
    page.on('error', (err) => console.log('err', err));
    await page.goto('https://www.google.fr', {});
    await page.close();
    await browser.close();
  } catch (err) {
    console.error('Unable to run tests using Puppeteer', err);
    process.exit(1);
  }
})().catch((err) => {
  console.error('Unable to launch Firefox with Puppeteer', err);
  process.exit(1);
});

