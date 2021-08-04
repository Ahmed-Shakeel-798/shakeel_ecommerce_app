const sequelize = require("./util/database");
const express = require("express");


const customerController = require("./controllers/customer");
const OrderController = require("./controllers/order");

const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(customerController);
app.use(OrderController);

app.listen(port, ()=>{
    console.log(`[+] Server running on port: ${port}`);
})




