const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Importing routes
const authRoutes = require('./routes/auth');
const predictRoutes = require('./routes/predict');

app.use('/api/auth', authRoutes);
app.use('/api/predict', predictRoutes);

app.get('/', (req, res) => {
  res.send('Credit Risk API is live!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
