const app = require("./app");
const port = process.env.PORT||3000;
const sequelize = require('./src/config/database');

(async () => {
    await sequelize.sync();
  }) ();

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); 