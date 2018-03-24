require('newrelic')
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = 3000;

app.use(morgan('dev'));
app.use('/listings/:id', express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log(`server running at: http://localhost:${port}`));
