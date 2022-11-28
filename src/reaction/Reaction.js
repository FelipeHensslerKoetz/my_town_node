const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database')

class Reaction extends Model { }

Reaction.init({
    upvote: {
        type: DataTypes.BOOLEAN
    }
}, {
    sequelize,
    modelName: 'reaction'
});

module.exports = Reaction;