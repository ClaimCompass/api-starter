'use strict'

module.exports = async function (req, res, next) {
  const User = req.models.User
  const users = await User.findAll()
  res.send(users)
}
