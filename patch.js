const fs = require('fs')

// monkey patch
let content = fs.readFileSync('VerboseLauncher.js', 'utf-8')
fs.writeFileSync('node_modules/puppeteer-firefox/lib/firefox/Launcher.js', content, 'utf-8')
