function getUser() {
    const user = {
      name: 'Maria',
      age: 26
    };
    
    return user;
  }
  
  const getUserArrowFunction = () => ({
    name: 'Maria',
    age: 26
  });
  
  const user = getUser();
  console.log(user.name, user.age);