const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Author = require('../models/Author');

router.get('/', (req, res) => 
    Author.findAll()
    .then(authors => {
        console.log(authors);
        res.sendStatus(200);
    })    
    .catch(err => console.log(err))
);

module.exports = router;