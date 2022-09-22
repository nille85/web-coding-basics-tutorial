const express = require('express')
const path = require('path')
const app = express()
const options = {index:false,extensions:['html']}
app.use('/', express.static(path.join(__dirname, '../public'), options))
app.listen(3000)