const express = require('express');
const router = express.Router();
const axios = require('axios');

const ML_API_URL = process.env.ML_API_URL;

router.post('/', async (req, res) => {
  try {
    console.log('Incoming data:', req.body);  

    const response = await axios.post(ML_API_URL, req.body);
    res.json(response.data);
  } catch (error) {
    console.error('Prediction error:', error.message);
    res.status(500).json({ error: 'Prediction failed' });
  }
});

module.exports = router;
