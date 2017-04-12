'use exports'

module.exports = async function (err, req, res, next) {
  console.log(err.stack)
  res.status(500).send({ error: true })
}
