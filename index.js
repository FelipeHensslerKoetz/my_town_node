const sequelize = require('./src/config/database');
const app = require('./src/app');

if(process.env.NODE_ENV === 'production') {
    sequelize.sync(); 
} else {
    sequelize.sync({ force: true });    
}


app.listen(3000, () => {
    console.log('Server is running on port 3000, in mode: ',process.env.NODE_ENV);
}); 