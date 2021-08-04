const Sequelize = require("sequelize");

const sequelize = new Sequelize("testdb","root",process.env.PASSWORDROOT, {
    dialect: "mysql",
    host: "localhost"
});

// sequelize.sync({force: true})
//     .then((result) => {console.log(result)})
//     .catch((err)=>{console.log(err)});

module.exports = sequelize;