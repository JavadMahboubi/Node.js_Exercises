const greeting = (firstname, lastname) => {
const callback = () => 'This code gets executed after the greet function call'
let name = `Hi ${firstname} ${lastname}`;    
/* Or: let name ='Hi '+firstname+' '+lastname*/
return name 
}
let name = greeting("Jhon", "Snow");
console.log(name);