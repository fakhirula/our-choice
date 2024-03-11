const express = require('express');
const router = express.Router();
const { getAll, store } = require('../controllers/organizationController');

// Organizations
router.get('/organizations', getAll)
router.post('/organizations', store)
router.get('/organizations/filter', (req,res) => {
    res.send('Filter Data')
})


module.exports = router