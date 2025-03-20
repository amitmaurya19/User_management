const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB Atlas with 'profile' database
mongoose
  .connect(
    process.env.MONGO_URI ||
      'mongodb+srv://amit:akmkrishna@cluster0.numq5.mongodb.net/profile?retryWrites=true&w=majority&appName=Cluster0',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('✅ MongoDB Connected Successfully to profile database'))
  .catch((err) => console.log('❌ MongoDB Connection Error:', err));

// Routes
app.use('/api/auth', require('./routes/auth'));

// Basic route for testing
app.get('/', (req, res) => {
  res.send('🚀 API is Running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`⚡ Server running on port ${PORT}`));
