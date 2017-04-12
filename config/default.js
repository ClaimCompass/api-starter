'use strict'

const path = require('path')

module.exports = {
  environment: 'development',
  db_url: 'sqlite://' + path.join(__dirname, '../', 'db.sqlite'),
  port: 3000
}
