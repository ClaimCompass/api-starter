'use strict'

// HACK
// this file is needed by the sequelize CLI

const config = require('config')
process.env.DB_URL = config.get('db_url')

module.exports = {
  use_env_variable: 'DB_URL'
}
