const express = require('express');
const router = express.Router();

router.use('/newuser', require('./newuser'))

module.exports = router;
