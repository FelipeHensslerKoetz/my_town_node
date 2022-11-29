const express = require('express');
const cors = require('cors');


const Post = require('./post/Post');
const Comment = require('./comment/Comment');
const Reaction = require('./reaction/Reaction');
const Project = require('./project/Project');

const UserRouter = require('./user/UserRouter');
const RoleRouter = require('./role/RoleRouter');
const ErrorHandler = require('./error/ErrorHandler');
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