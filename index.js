const sequelize = require('./src/config/database');
const app = require('./src/app');
const User = require('./src/user/User');

// Drop database
sequelize.sync({ force: true }).then(async () => {
    console.log('Database is ready.')

    for (let i = 0; i <= 30; i++) {
        const user = {
            name: `user${i}`,
            email: 'user${i}@gmail.com',
            password: 'Password'
        }

        await User.create(user);
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})