/**
 * Parses command line arguments.
 *
 * @returns {Object} Object containing command line arguments and their boolean values.
 */
function getArgs () {
  const args = process.argv.slice(2)
  const flags = {}
  if (args.includes('-d')) {
    flags['-d'] = true
  }
  return flags
}

exports.getArgs = getArgs
