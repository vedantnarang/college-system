require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db.js');

const app = express();

app.use(express.json());

connectDB();

app.use('/api/auth', require('./src/routes/authRoutes'));

app.get('/', (req, res) => {
  res.send('API is running...');
});


app.listen(3000, () => {
  console.log(`server running on port 3000`);
});