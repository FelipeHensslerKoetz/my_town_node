const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database')

class Comment extends Model { }

Comment.init({
    description: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'comment'
});

module.exports = Comment;