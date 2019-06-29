const express = require('express');
const router = express.Router();

// models
const User = require('../models/user');

// rotas (routes)
router.get('/', (req, res) => {
    res.send('Seja Bem-Vindo...');
});

router.post('/register', (req, res) => {
    const user = new User(req.body);

    user.save((err, results) => {
        err ? res.status(400).send(err) : res.status(200).send(user);
    })
});

module.exports = router;