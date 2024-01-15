const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('hello wurld');
});

app.listen(PORT, () => {
    console.log(`app is running on http://localhost:${PORT}`);
});