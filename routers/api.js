const express = require('express')
const router = express.Router()
const d = require('../defaults')

router.use((req, res, next) => {
  next()
})

router.get('/', (req, res) => {
    return res.redirect(`${d.root}/api/?ref=baseUrl`)
})

function errResponse(req, res, msg, status){
    return res.json({
        "status":status, 
        "response":`${msg}. For help, visit our documentation ${d.docs}`,
        "path":`${req.path}`,
    })
}

function response(req, res, response, value){
    return res.json({
        "status":200, 
        "response":`${response}.`,
        "value":value,
        "path":`${req.path}`,
        "query":req.query
    })
}

module.exports = router