const express = require('express');
const router = express.Router();

const {createCustomer} = require('../lib/controller/customer.controller');

router.get('/create', createCustomer);

module.exports = router;