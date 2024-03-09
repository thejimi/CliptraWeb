const express = require('express')
const router = express.Router()
const d = require('../defaults')

router.use((req, res, next) => {
  next()
})

router.get('/', (req, res) => {
    return res.send(`<button style="font-size:100px" onclick="window.open('https://www.cloudflare.com/learning/cdn/what-is-a-cdn/')">What is this... where am i?</button>`)
})

router.get('/:file', (req, res) => {
    return res.sendFile(__dirname + `/cdn/${req.params.file}`)
})

module.exports = router