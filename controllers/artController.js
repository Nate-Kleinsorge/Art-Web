const express = require('express');
const router = express.Router();
const Art = require('../models/Art');

//get all art
router.get('/art', async (req, res) => {
    try {
        const art = await Art.find();
        res.json(art);
    } catch (error) {
        res.status(500).json({ error: 'internal server error'});
    }
});

//get a single painting
router.get('/art/:id', async (req, res) => {
    try {
        const painting = await Art.findById(req.params.id);
        if(!product) {
            return res.status(404).json({ error: 'product nor found' });
        }
        res.json(painting)
    } catch (error) {
        res.status(500).json({ error: 'internal server error' });
    }
});

//insert a single painting
router.get('/art/')
module.exports = router;