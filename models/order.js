const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Order = sequelize.define("orders", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    total:{
        type: Sequelize.STRING,
        allowNull: false,
    },
});

// sequelize.sync({force: true})
//     .then((result) => {console.log(result)})
//     .catch((err)=>{console.log(err)});


module.exports = Order;