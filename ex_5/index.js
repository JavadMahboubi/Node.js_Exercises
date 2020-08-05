const Logger = require('logplease');
const number = require('./numbers');
const marks = [2, 3, 101, 201, 202, 100];
var x;
for (x of marks) {
    let type = 'odd'
    if(number(x)) {
    type ='even'
}
console.log(x+" is "+type); 
};

