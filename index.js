const parseArgs = require('./lib/parseArgs')
const args = parseArgs.getArgs()
let appMode
if (args['-d']) {
  appMode = 'developement'
} else {
  appMode = 'production'
}
console.log(appMode)
