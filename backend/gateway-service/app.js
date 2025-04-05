const express = require('express');
const bodyParser = require('body-parser');
const rideRoutes = require('./routes/rideRoutes');
const authRoutes = require('./routes/authRoutes');
const { connectProducer } = require('./config/kafka');
const redisClient = require('./config/redis');

const app = express();

app.use(bodyParser.json());

app.use('/api', rideRoutes);
app.use('/auth', authRoutes);

connectProducer().catch(err => console.error('Failed to connect Kafka producer', err));

redisClient.on('connect', () => {
  console.log('Connected to Redis');
});

redisClient.on('error', (err) => {
  console.error('Redis error', err);
});

module.exports = app;
