const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database')

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