const express = require('express');
const artController = require('./controllers/artController');
require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api', artController);

app.get('/', (req, res) => {
    res.send('hello wurld');
});

app.listen(PORT, () => {
    console.log(`app is running on http://localhost:${PORT}`);
});