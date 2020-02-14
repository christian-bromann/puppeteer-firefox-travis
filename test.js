/* eslint-env node, es6 */
const puppeteer = require('puppeteer');

/*
const childProcess = require('child_process');
const executablePath = puppeteer.executablePath()
childProcess.execSync(executablePath + ' -headless')
*/

(async function () {
  try {
    console.log('puppeteer.launch')
    const browser = await puppeteer.launch({
      dumpio: true,
      product: 'firefox'
    });
    console.log('puppeteer launched')
    console.log('browser.newPage')
    const page = await browser.newPage();
    console.log('puppeteer page')
    browser.on('error', (err) => console.log('err', err));
    page.on('error', (err) => console.log('err', err));
    await page.goto('https://www.google.fr', {});
    await page.close();
    await browser.close();
    console.log('Everything ran successfully!');
  } catch (err) {
    console.error('Unable to run tests using Puppeteer', err);
    process.exit(1);
  }
})().catch((err) => {
  console.error('Unable to launch Firefox with Puppeteer', err);
  process.exit(1);
});
