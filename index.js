const express = require('express');
const app = express();

//route handler
app.get('/', (req, res) => {
  res.send({hi: 'there'});
});

//Dynamically binding the port for deployment on heroku
//default port on development environment = localhost:5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
