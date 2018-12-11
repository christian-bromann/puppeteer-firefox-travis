/* eslint-env node, es6 */
const puppeteer = require('puppeteer-firefox')

// puppeteer options
const opts = {
  headless: true,
  timeout: 10000,
  args: ['--allow-file-access-from-files', '--no-sandbox']
};

(async function () {
  try {
    const browser = await puppeteer.launch(opts);
    const page = await browser.newPage();
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

