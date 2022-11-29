const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('dev-db','dev-db','dev-password', {
    dialect: 'sqlite',
    host: './dev.sqlite',
    logging: true
})

module.exports = sequelize;