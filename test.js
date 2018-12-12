/* eslint-env node, es6 */
const puppeteer = require('puppeteer-firefox');
const fs = require('fs')

// monkey patch
let content = fs.readFileSync('node_modules/puppeteer-firefox/lib/firefox/Launcher.js', 'utf-8')
content = content.replace(/('Failed to launch Firefox!' \+ \(error \? ' ' \+ )(error\.message)( : )('')\)/g, '$1error$3\'no-error\')')
fs.writeFileSync('node_modules/puppeteer-firefox/lib/firefox/Launcher.js', content, 'utf-8')

;(async function () {
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

