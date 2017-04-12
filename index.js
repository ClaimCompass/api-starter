'use strict'

const env = require('config').get('environment')

if (env === 'development') {
  const nodemon = require('nodemon')
  nodemon('lib')
  nodemon.on('restart', () => console.log('app restarting...'))
} else {
  require('./lib')
}
