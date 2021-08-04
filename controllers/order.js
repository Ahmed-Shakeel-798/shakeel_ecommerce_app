const express = require("express");

const orderFunctions = require("../functions/order");
const customerFunctions = require("../functions/customer");

const router =  new express.Router();

router.post('/order', async (req, res) => {
    try {
        let {customerId, total} = req.body;
        customer = await customerFunctions.searchCustomerById(parseInt(customerId));
        order = await orderFunctions.createOrder(customer, total)
        res.send({result: "success", body: order})
    } catch (error) {
        res.status(400).send({error: error.message})
    }
});

// ? customerId= , orderId=
router.get('/order', async (req,res)=>{
    try {
        console.log(`[+] searching for customerId: ${req.query.customerId}`)
        orders = await orderFunctions.searchOrderByCustomerId(parseInt(req.query.customerId));
        res.send({result: "success", body: orders});
    } catch (error) {
        res.status(400).send({error: error.message})
    }
});

module.exports = router;

