#! /usr/bin/env node
const program = require('commander')

program
  .version('0.0.1')
  .usage('例子')
  .description('this is a lizi of commander')

program
  .command('print [st]')
  .action(function (st, value) {
    print(st, value)
  })

function print(val, o) {
  console.log(val)
  console.log(1)
  console.log(o)
}

program
  .option('-s --save [value]', '保存')

program.parse(process.argv)

if (program.save) {
  console.log(program.save)
}