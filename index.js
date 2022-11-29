const sequelize = require('./src/config/database');
const app = require('./src/app');

// Drop database on start
sequelize.sync({ force: true });

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});