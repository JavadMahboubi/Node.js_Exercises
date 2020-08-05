const greeting = (firstname, lastname, callback) => 
{
        let salute = 'Hi '+firstname+' '+lastname;
            console.log(salute+'.');
           callback(firstname); 

        }

    const message = (name)=> {
               console.log('Nice to meet you '+name+'!') 
    } 
    
    greeting("Jhon", "Snow", message); 
    

    
    /* another way: */ 
    /* const greeting = (firstname, lastname, callback) => 
{
        let salute = 'Hi '+firstname+' '+lastname;
            console.log(salute+'. '+callback(firstname));
            
        }

        const message = (name)=> {
            return 'Nice to meet you '+name+'!'
            
        }         
        greeting("Jhon", "Snow", message); */
        