const express = require('express');
const router = express.Router();

const {createUser} = require('../lib/controller/user.controller');

router.get('/create', createUser);

module.exports = router;