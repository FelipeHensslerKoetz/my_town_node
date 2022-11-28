const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database')

class Project extends Model { }

Project.init({
    status: {
        type: DataTypes.STRING
    },
    events: {
        type: DataTypes.JSON
    }
}, {
    sequelize,
    modelName: 'project'
});

module.exports = Project;