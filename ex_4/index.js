var oneLinerJoke = require('one-liner-joke');

/*
The variable getRandomJoke will contain a random joke with a format:
{"body":"Artificial intelligence is no match for natural stupidity.","tags":["intelligence","stupid"]}
*/
var getRandomJoke = oneLinerJoke.getRandomJoke();

/*
The variable getRandomJoke will contain a random joke with a tag and with a format:
{"body":"Artificial intelligence is no match for natural stupidity.","tags":["intelligence","stupid"]}
*/
var getRandomJokeWithTag = oneLinerJoke.getRandomJokeWithTag('stupid');



console.log(`Joke body is: ${getRandomJoke.body}` );

console.log(`Joke tage is: ${getRandomJoke.tags}`); 

