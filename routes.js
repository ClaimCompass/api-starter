'use strict'

const express = require('express')
const bodyParser = require('body-parser')

module.exports = function (app, middlewares) {
  app.use(bodyParser.json())

  // user
  const user = express.Router()
  app.use('/users', user)
  user.use(middlewares.auth)
  user.get('/', middlewares.user.find)

  // error handling
  app.use(middlewares.error)
}
