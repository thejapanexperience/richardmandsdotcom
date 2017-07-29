const express = require('express');
const router = express.Router();

router.use('/newuser', require('./newuser'))
router.use('/heroku', require('./heroku'))

module.exports = router;
