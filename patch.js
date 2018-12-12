const fs = require('fs')

// monkey patch
let content = fs.readFileSync('node_modules/puppeteer-firefox/lib/firefox/Launcher.js', 'utf-8')
content = content.replace(/('Failed to launch Firefox!' \+ \(error \? ' ' \+ )(error\.message)( : )('')\)/g, '$1error$3\'no-error\')')
content = content.replace(/(function onClose\(error\) {\n\s+cleanup\(\);)(\n\s+)(reject)/g, '$1$2console.log("error", error);$2$3')
fs.writeFileSync('node_modules/puppeteer-firefox/lib/firefox/Launcher.js', content, 'utf-8')

console.log(content)
