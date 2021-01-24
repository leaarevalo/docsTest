const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./routes');
const app = express();

const { PORT = 3000 } = process.env;

const ART = `
    AutoDocumentation HENRY
`;

const INFO = `Funcionando en puerto ${PORT}`;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/', routes);

app.listen(PORT, () => {
    console.log(ART);
    console.log(INFO);
});
