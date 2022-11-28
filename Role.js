const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database')

class Role extends Model { }

Role.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {
    sequelize,
    modelName: 'role'
});

module.exports = Role;