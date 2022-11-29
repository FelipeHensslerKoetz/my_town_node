const express = require('express');
const cors = require('cors');
const Post = require('./src/post/Post');
const Comment = require('./src/comment/Comment');
const Reaction = require('./src/reaction/Reaction');
const Project = require('./src/project/Project');
const UserRouter = require('./src/user/UserRouter');
const RoleRouter = require('./src/role/RoleRouter');
const ErrorHandler = require('./src/error/ErrorHandler');
const i18next = require('i18next');
const Backend = require('i18next-fs-backend');
const middleware = require('i18next-http-middleware');

i18next.use(Backend).use(middleware.LanguageDetector)
    .init({
        fallbackLng: 'en',
        backend: {
            loadPath: './locales/{{lng}}/translation.json'
        }
    });

const app = express();

app.use(cors());
app.use(middleware.handle(i18next));
app.use(express.json());
app.use(UserRouter);
app.use(RoleRouter);
app.use(ErrorHandler);

module.exports = app;