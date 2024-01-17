const mongoose = require('mongoose');
const artSchema = new mongoose.Schema({
    name: { type: String, requried: true },
    description: { type: String, required: true },
});

module.exports = mongoose.model('Art', artSchema);
