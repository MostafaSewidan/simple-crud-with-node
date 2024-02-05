const {Sequelize,DataTypes} = require("sequelize");
const sequelize = new Sequelize(
 'node',
 'root',
 'mostafa123mostafa',
  {
    host: '127.0.0.1',
    dialect: 'mysql'
  }
);


module.exports = {sequelize,DataTypes};