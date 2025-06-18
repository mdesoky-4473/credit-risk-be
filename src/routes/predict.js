// src/routes/predict.js
const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/', async (req, res) => {
  try {
    console.log('Incoming data:', req.body);  

    const response = await axios.post('http://localhost:5000/predict', req.body);
    res.json(response.data);
  } catch (error) {
    console.error('Prediction error:', error.message);
    res.status(500).json({ error: 'Prediction failed' });
  }
});

module.exports = router;
