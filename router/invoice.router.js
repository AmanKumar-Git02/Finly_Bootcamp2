const express = require('express');
const router = express.Router();

const {createInvoice} = require('../lib/controller/invoice.controller');

router.get('/create', createInvoice);

module.exports = router;