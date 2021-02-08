const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Author = require('../models/Author');
const models = require('../models');

router.get('/', (req, res) =>
    models.Author.findAll()
    .then(authors => {
        console.log(authors);
        res.sendStatus(200);
    })    
    .catch(err => console.log(err))
);

module.exports = router;