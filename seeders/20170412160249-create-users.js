'use strict'

const Chance = require('chance')
const chance = new Chance()

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'test@example.com',
        password: '1234',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: chance.email(),
        password: chance.word(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: chance.email(),
        password: chance.word(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: chance.email(),
        password: chance.word(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: chance.email(),
        password: chance.word(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {})
  }
}
