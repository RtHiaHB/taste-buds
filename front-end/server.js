const express = require('express')
require('dotenv').config()

const app = express()

// MIDDLEWARE
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.set('views', __dirname + '/src')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`listening on port ${PORT}`))