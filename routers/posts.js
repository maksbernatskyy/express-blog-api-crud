const express = require('express')
const router = express.Router()

// index
router.get('/', (req, res) => {
    res.send('Lista dei post')
})

module.exports = router