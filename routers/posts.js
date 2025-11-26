const express = require('express')
const router = express.Router()

// List of posts
const blog = require('../data/postsArr')

// index
router.get('/', (req, res) => {
    res.json(blog)
})

module.exports = router