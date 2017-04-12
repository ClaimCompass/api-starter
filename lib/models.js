'use strict'

const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('config')
const db = {}

let sequelize
if (config.get('db_url').indexOf('sqlite://') !== -1) {
  sequelize = new Sequelize(config.get('db_url'), {
    dialect: 'sqlite',
    storage: config.get('db_url').substring('sqlite://'.length)
  })
} else {
  sequelize = new Sequelize(config.get('db_url'))
}

fs
  .readdirSync(path.join(__dirname, '../models'))
  .filter(file => file.indexOf('.') !== 0 && (file.slice(-3)) === '.js')
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, '../models', file))
    db[model.name] = model
  })

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
