const mongoose = require('mongoose');
const dbConfig = require('../../shared/config/dbConfig');

const connectDB = async () => {
  try {
    await mongoose.connect(dbConfig.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

const rideAnalyticsSchema = new mongoose.Schema({
  rideId: { type: String, required: true },
  driverId: { type: String, required: true },
  riderId: { type: String, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  distance: { type: Number, required: true },
  duration: { type: Number, required: true },
  fare: { type: Number, required: true }
});

const RideAnalytics = mongoose.model('RideAnalytics', rideAnalyticsSchema);

const saveRideAnalytics = async (rideEvent) => {
  try {
    const rideAnalytics = new RideAnalytics(rideEvent);
    await rideAnalytics.save();
    console.log('Ride analytics saved...');
  } catch (err) {
    console.error('Error saving ride analytics:', err.message);
  }
};

module.exports = {
  connectDB,
  saveRideAnalytics
};
