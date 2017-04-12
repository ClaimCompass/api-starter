'use strict'

module.exports = function (program) {
  program
    .command('greet <name>')
    .description('greet person')
    .option('-l, --lowercase', 'print name in lowercase')
    .action(function (name, options) {
      if (options.lowercase) {
        console.log('Greetings,', name.toLowerCase() + '!')
      } else {
        console.log('Greetings,', name + '!')
      }
    })
}
