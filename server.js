const express = require('express')
const app = express()
const PORT = 3000
const postsRouter = require('./routers/posts')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Server del mio blog')
})

app.use('/posts', postsRouter)

app.listen(PORT, () => {
    console.log(`app listening on port: ${PORT}`)
})

