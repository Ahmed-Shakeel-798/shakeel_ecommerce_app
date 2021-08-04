const Sequelize = require("sequelize");
const sequelize = require("../util/database");
const Order = require("./order");

const Customer = sequelize.define("Customer", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    email:{
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    password: {
       type: Sequelize.STRING,
       allowNull: false 
    },
});

Customer.hasMany(Order);

module.exports = Customer;