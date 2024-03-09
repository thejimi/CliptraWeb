const express = require('express')
const app = express()
const port = 3000

var cookieParser = require('cookie-parser')
app.use(cookieParser())

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  if(req.cookies.__token){
    res.send("you are logged in")
  } else {
    res.render('auth/login')
  }
})

const apiRouter = require('./routers/api.js')
app.use('/api', apiRouter)

const cdnRouter = require('./routers/cdn.js')
app.use('/cdn', cdnRouter)

app.listen(port, () => {
  console.log(`> Server is listening, on port ${port}`)
})