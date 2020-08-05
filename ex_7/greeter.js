const greeting = (firstname, lastname, callback) => 
{
        let salute = 'Hi '+firstname+' '+lastname;
            console.log(salute+'.');
           callback(firstname); 

        }

  
    module.exports = greeting;
    