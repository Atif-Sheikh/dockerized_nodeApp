const express = require('express');
const app = express();

const port = process.env.PORT || 2000;

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
});

app.get('/about', (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
});


app.listen(port, () => {
    console.log('yahoooo server is running on port 2000 with nodemon');
});