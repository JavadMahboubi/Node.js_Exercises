  
const express = require('express')

const app = express()
const port = 3000


 var options = {
    extensions: ['htm', 'html']
} 

app.use(express.static('.', options))  

app.listen(port)