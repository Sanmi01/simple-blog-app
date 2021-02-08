const path = require('path');

const express = require('express');
const bodyParser= require('body-parser');

const app = express();


const db = require('./config/database');

db.authenticate()
    .then(() => console.log('Database connected'))
    .catch(err => console.log('error: ' + err))



app.get('/', (req, res) => res.send('INDEX'));

// Author routes
app.use('/author', require('./routes/author'));
const PORT = process.env.PORT || 3000;

db
  .sync()
  .then(result => {
    console.log(result);
    app.listen(PORT, console.log(`Server started on port ${PORT}`));
  })
  .catch(err => {
    console.log(err);
  });

