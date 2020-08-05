const http = require('http')  
const port = 3001

const requestHandler = (req, res) => {  
  
  res.end('Hello Node.js Server!')
}

const servers = http.createServer(requestHandler)

servers.listen(port, (err) => {  
  if (err) {
    return console.log(`Unable to start the server on port ${port}`)
  }

  console.log(`This HTTP server is running on port ${port}`)
})