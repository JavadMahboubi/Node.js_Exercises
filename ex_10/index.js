
const express = require('express')
const oneLinerJoke = require('one-liner-joke');

const app = express()
const port = 3000

app.use(express.json())

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
   res.send('Welcome to Joke application.')
})

app.get('/jokes', function (req, res) {
    const jokes = oneLinerJoke.getAllJokesWithTag('men')
    
    let punchlines = []

    for (joke of jokes) {
        punchlines.push(joke.body)
    }

    res.send(punchlines);
})

app.get('/joke', function (req, res) {
   res.send(oneLinerJoke.getRandomJoke().body);
})

app.post('/joke', function (req, res) {
    const jokes = oneLinerJoke.getAllJokesWithTag('tree')
    let punchlines = []

    for (joke of jokes) {
        punchlines.push(joke.body)
    }

    res.send(punchlines);
})

app.put('/joke', function (req, res) {
    const joke = oneLinerJoke.getRandomJokeWithTag(req.body.tag)
    
    res.send(joke.body);
})

app.delete('/joke/:tag', function (req, res) {
    const jokes = oneLinerJoke.getAllJokesWithTag(req.params.tag)
    
    let punchlines = []

    for (joke of jokes) {
        punchlines.push(joke.body)
    }

    res.send(punchlines);
})

app.all('/joke', function (req, res, next) {
      console.log('Accessing the secret section ...')

      next() // pass control to the next handler
})

app.listen(port)