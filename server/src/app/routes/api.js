const express = require('express');
const router = express.Router();

// models
const User = require('../models/user');
const Event = require('../models/event');

// function generic
function createUserApi(params = {}) {
    return new User(params);
}

// rotas (routes)
router.get('/', (req, res) => {
    res.send('Seja Bem-Vindo...');
});

router.post('/register', (req, res) => {
    const user = createUserApi(req.body);

    user.save((err, results) => {
        err ? res.status(400).send(err) : res.status(200).send(user);
    })
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;

    const user = createUserApi(req.body);
    console.log(user);

    User.findOne({ email }, (err, user) => {
        if (err) {
            // problema
            res.status(400).send(err);
        } else if (user) {
            // email cadastrado. A senha está correta?
            password === user.password ? res.status(200).send(user) : res.status(400).send('Erro: Senha inválida!');
        } else {
            res.send('Erro: Usuário não cadastrado.');
        }
    });
});

router.get('/events', (req, res) => {
    Event.find((err, results) => {
        err ? res.status(400).json(err) : res.status(200).json(results)
    });
});

router.post('/events', (req, res) => {
    event = new Event(req.body);

    event.save((err, results) => {
        err ? res.status(400).send(err) : res.status(200).send(results);
    })
});

module.exports = router;