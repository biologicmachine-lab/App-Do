const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const postRoutes = require('./routes/posts');
const badgeRoutes = require('./routes/badges');

const app = express();
app.use(cors());
app.use(express.json());

// routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/badges', badgeRoutes);

const PORT = process.env.PORT || 4000;
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser:true, useUnifiedTopology:true})
  .then(()=> {
    console.log('MongoDB connected');
    app.listen(PORT, ()=> console.log('Server on', PORT));
  })
  .catch(err => console.error(err));