'use strict'

const app = require('express')()
const config = require('config')
const models = require('./models')
const middlewares = require('./middlewares')

app.use(function (req, res, next) {
  req.models = models
  next()
})

require('../routes')(app, middlewares)

app.listen(config.get('port'), () => {
  console.log('Server listening on port', config.get('port'))
})
