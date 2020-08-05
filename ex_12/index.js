const express = require('express')

const app = express()
const port = 3000

app.get('/api/products', function(request, response) {
    response.json({
        description: 'Products',
        items: [
          { name: 'Star Wars jacket' , price: 100},
          { name: 'FIFA 22 PS4' , price: 79},
          { name: 'Superheore t-shirt' , price: 10},
          { name: 'Riders game shirt' , price: 200},
          { name: 'Large Meat lovers pizza' , price: 12},
          { name: 'Canada Dry  bottle' , price: 2}
        ]
      });
  });

  app.listen(port)