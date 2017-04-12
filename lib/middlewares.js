'use strict'

const fs = require('fs')
const path = require('path')
const middlewares = {}
const env = require('config').get('environment')

function getMiddlewares (namespace) {
  const ns = namespace || ''
  const dirContents = fs
    .readdirSync(path.join(__dirname, '../middlewares', ns))
  const dirs = dirContents
    .filter(file => fs.lstatSync(path.join(__dirname, '../middlewares', ns, file)).isDirectory())
  const files = dirContents
    .filter(file => !fs.lstatSync(path.join(__dirname, '../middlewares', ns, file)).isDirectory())
    .filter(file => file.indexOf('.') !== 0 && (file.slice(-3)) === '.js')
  dirs.forEach(dir => getMiddlewares(`${ns}/${dir}`))
  files.forEach(file => {
    let mountObj = middlewares
    for (const child of ns.split('/')) {
      if (child !== '') {
        if (!mountObj[child]) {
          mountObj[child] = {}
        }
        mountObj = mountObj[child]
      }
    }

    const middleware = require(path.join(__dirname, '../middlewares', ns, file))
    const middlewareName = file.replace('.js', '')
    if (middleware.length < 4) {
      mountObj[middlewareName] = function (req, res, next) {
        middleware(req, res, next).catch(err => next(err))
      }
    } else {
      mountObj[middlewareName] = function (err, req, res, next) {
        middleware(err, req, res, next).catch(err => {
          if (env === 'development') {
            res.send(err.stack)
          } else {
            console.log(err.message)
            console.log(err.stack)
            res.sendStatus(500)
          }
        })
      }
    }
  })
}

getMiddlewares()

module.exports = middlewares
