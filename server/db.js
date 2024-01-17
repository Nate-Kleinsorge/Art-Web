const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://0.0.0.0/Art-Web';

mongoose.connect(MONGO_URI, {})
    .then(() => {
        console.log('Connected to mongoDB');
    })
    .catch((error) => {
        console.error('error connecting to mongoDB:', error);
    });