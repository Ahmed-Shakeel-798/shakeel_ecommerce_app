const express = require("express");
const customerFunctions = require("../functions/customer.js");

const router =  new express.Router();

router.post('/customer', async (req, res) => {
    try {
        let {name, email, password} = req.body;
        customer = await customerFunctions.createCustomer(name, email, password);
        res.send({result: "success", body: customer});
    } catch (error) {
        res.status(400).send({error: error.message})
    }
});

router.get('/customer', async (req,res)=>{
    try {
        console.log(`[+] searching for customerId: ${req.query.id}`)
        customer = await customerFunctions.searchCustomerById(parseInt(req.query.id));
        res.send({result: "success", body: customer});
    } catch (error) {
        res.status(400).send({error: error.message})
    }
});

module.exports = router;






