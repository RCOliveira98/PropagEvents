const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// models
const User = require('../models/user');
const Event = require('../models/event');

// function generic
function createUserApi(params = {}) {
    return new User(params);
}

function generateToken(params = {}) {
    // const payload = {subject: user.id}
    return jwt.sign(params, "secretKey");
}

// rotas (routes)
router.get('/', (req, res) => {
    res.send('Seja Bem-Vindo...');
});

router.post('/register', (req, res) => {
    const user = createUserApi(req.body);

    console.log(user);
    user.save((err, results) => {
        if (err) {
            res.status(400).send(err);
        } else {
            const token = generateToken({ subject: user.id });
            res.status(200).send({ token });
        }
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
            if (password === user.password) {
                token = generateToken({ subject: user.id });
                res.status(200).send({ token });
            } else {
                res.status(400).send('Erro: Senha inválida!');
            }
        } else {
            res.send('Erro: Usuário não cadastrado.');
        }
    });
});
// events
router.get('/events', (req, res) => {
    Event.find({ special: false }, (err, results) => {
        err ? res.status(400).json(err) : res.status(200).json(results)
    });
});

router.get('/events/special', (req, res) => {
    Event.find({ special: true }, (err, results) => {
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