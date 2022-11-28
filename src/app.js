const express = require('express');
const app = express();

const Role = require('./role/Role');
const User = require('./user/User');
const Post = require('./post/Post');
const Comment = require('./comment/Comment');
const Reaction = require('./reaction/Reaction');
const Project = require('./project/Project');

const UserRouter = require('./user/UserRouter');
const RoleRouter = require('./role/RoleRouter');
const ErrorHandler = require('./error/ErrorHandler');

app.use(express.json());
app.use(UserRouter);
app.use(RoleRouter);
app.use(ErrorHandler);

module.exports = app;