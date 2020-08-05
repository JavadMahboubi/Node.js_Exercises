const express = require('express')

const app = express()
const port = 3000


const requestTime = (req, res, next) => {
  const message = `Request: ${req.hostname} ${Date.now()}`;
  console.log(message);
  
  next();
};

app.use(requestTime)

app.get('/', function(request, response) {
  response.json({"status": 200, "message": "Este request/response está OK"})
}
);
app.get('/hello', (req, res) => {
  res.json({
      "status": 250,
      "message": "Este request/response está OK"
  })
})
  app.listen(port)