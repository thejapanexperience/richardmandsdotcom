const express = require('express');
const router = express.Router();
const axios = require('axios');

// const Waymark = require('../models/Waymark')

router.route('/entable')
.get((req, res) => {
  axios.get('www.entable.org')
  .then(response => {
    console.log('response: ', response.data)
    res.send(response.data)
  })
  .catch(err => {
    res.status(400).send(err)
  })
})
router.route('/theFastLife')
.get((req, res) => {
  axios.get('www.thefastlife.website')
  .then(response => {
    console.log('response: ', response.data)
    res.send(response.data)
  })
  .catch(err => {
    res.status(400).send(err)
  })
})
module.exports = router;
