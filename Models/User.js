
const { sequelize,DataTypes } = require("../database/server");

const User = sequelize.define("users", {
       name: {
         type: DataTypes.STRING,
         allowNull: false
       },
       email: {
         type: DataTypes.STRING,
         allowNull: false
       },
       password: {
         type: DataTypes.STRING,
         allowNull: false
       },
});

sequelize.sync();

module.exports = User;