const express = require('express')
const router = express.Router()

// List of posts
const blog = require('../data/postsArr')

// index
router.get('/', (req, res) => {
    // Now filtered blog is equal to the original blog
    let filteredBlog = blog

    // Verify if there is a filter
    if(req.query.tag) {
        filteredBlog = blog.filter((thisPost) => {
            return thisPost.tags.includes(req.query.tag)
        })
        console.log(filteredBlog)
    } 

    // Response with the filterd menu
    res.json(filteredBlog)
})

// show
router.get('/:id', (req, res) => {
    // Transform to number the id of URL
    const id = Number(req.params.id)

    // Find the post with the id that be search
    const specificPost = blog.find((thisPost) => {
        return thisPost.id === id
    })

    // Controll if the post exist
    if(!specificPost) {
        return res.json({
            error: 'Not found',
            message: 'Post not find'
        })
    }

    // Response whit the specific post
    res.json(specificPost)
})

module.exports = router