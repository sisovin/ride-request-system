const Ride = require('../models/Ride');

exports.createRide = async (rideData) => {
  try {
    const ride = new Ride(rideData);
    await ride.save();
    return ride;
  } catch (error) {
    throw new Error('Error creating ride: ' + error.message);
  }
};

exports.getRide = async (rideId) => {
  try {
    const ride = await Ride.findById(rideId);
    return ride;
  } catch (error) {
    throw new Error('Error fetching ride: ' + error.message);
  }
};

exports.updateRide = async (rideId, rideData) => {
  try {
    const ride = await Ride.findByIdAndUpdate(rideId, rideData, { new: true });
    return ride;
  } catch (error) {
    throw new Error('Error updating ride: ' + error.message);
  }
};

exports.deleteRide = async (rideId) => {
  try {
    const ride = await Ride.findByIdAndDelete(rideId);
    return ride;
  } catch (error) {
    throw new Error('Error deleting ride: ' + error.message);
  }
};
