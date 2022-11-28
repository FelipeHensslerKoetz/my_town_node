const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database')

class User extends Model {}

User.init({
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    birthdate: {
        type: DataTypes.DATE
    },
    phone: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    },
}, {
    sequelize,
    modelName: 'user'
});

module.exports = User;