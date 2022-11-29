const sequelize = require('./src/config/database');
const app = require('./src/app');
const port = process.env.PORT||3000;

if(process.env.NODE_ENV === 'production') {
    sequelize.sync(); 
} else {
    sequelize.sync({ force: true });    
}


app.listen(port, () => {
    console.log(`Server is running on port ${port}, in mode: `,process.env.NODE_ENV);
}); 