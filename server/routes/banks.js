const express = require('express');
const router = express.Router();
const bankHelper = require('../helper/bank');

//SUBMIT A BANKINFO
router.post('/', bankHelper.createBanks);

module.exports = router;