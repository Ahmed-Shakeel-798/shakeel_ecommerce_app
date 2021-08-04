const Order = require("../models/order");

let createOrder = (customer, total) => {
    let order = customer.createOrder({total: total});
    return order;
}

let searchOrderById = async (orderId) => {
    let order = await Order.findOne({where: {id: orderId}});
    return order;
}

let searchOrderByCustomerId = async (customerId) => {
    let orders = await Order.findAll({where: {customerId: customerId}});
    return orders;
}

module.exports = {
    createOrder,
    searchOrderById,
    searchOrderByCustomerId
}