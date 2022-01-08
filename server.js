const express = require('express');
const request = require('request');
const async = require('async');

const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + `/public/html/index.html`);
});

app.listen(3000, () => {
    console.log('Listening on localhost:3000');
});