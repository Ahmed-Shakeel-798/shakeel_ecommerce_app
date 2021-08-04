const Customer = require("../models/customer");


let createCustomer = async (name, email, password) => {
    customer = await Customer.create({name, email, password});
    return customer;
}

let searchCustomerById = async (id) => {
    customer = await Customer.findOne({where: {id: id}});
    return customer;
}

module.exports = {
    createCustomer,
    searchCustomerById
};