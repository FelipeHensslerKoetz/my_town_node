const express = require('express');
const cors = require('cors');
const sequelize = require('./src/config/database');
const port = process.env.PORT||3000;
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

if(process.env.NODE_ENV === 'production') {
    sequelize.sync(); 
} else {
    sequelize.sync({ force: true });    
}

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

app.listen(port, () => {
    console.log(`Server is running on port ${port}, in mode: `,process.env.NODE_ENV);
}); 