const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database')

class Post extends Model { }

Post.init({
    title: {
        type: DataTypes.STRING
    },
    category: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'post'
});

module.exports = Post;