#!/usr/bin/env node

const spawn = require('cross-spawn')

let command = ['./node_modules/react-scripts/bin/react-scripts.js', 'test', '--env=jsdom']
let coverage = false
process.argv.slice(2, 4).forEach(arg => {
  if (arg === '+c') {
    coverage = true
  } else {
    command.push(arg.replace('/', '.*'))
  }
})

if (coverage) {
  command = command.concat([
    '--coverage',
    '--collectCoverageFrom=src/**/*js',
    '--collectCoverageFrom=!{src/*.js,**/{__stories__,__tests__,_assets_}/**}'
  ])
}

spawn('clear')
spawn.sync('node', command, { stdio: 'inherit' })
if (coverage) {
  spawn('start', ['coverage/lcov-report/index.html'], { stdio: 'inherit' })
}

