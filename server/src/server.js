const express = require('express');
const bodyParser = require('body-parser');
const consign = require('consign');

const app = express();
// config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// carregando módulos (files)
// consign().include('./app/routes/api.js').into(app);
// details server
const PORT = 3000;
const api = require('./app/routes/api');

app.use('/api', api);

app.listen(PORT, () => { console.log('Servidor online na porta: ' + PORT) });