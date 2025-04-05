const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
  riderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  driverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  startLocation: {
    type: {
      lat: Number,
      lng: Number
    },
    required: true
  },
  endLocation: {
    type: {
      lat: Number,
      lng: Number
    },
    required: true
  },
  status: {
    type: String,
    enum: ['requested', 'accepted', 'in_progress', 'completed', 'cancelled'],
    default: 'requested'
  },
  fare: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

rideSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Ride = mongoose.model('Ride', rideSchema);

module.exports = Ride;
