const rideService = require('../../backend/ride-service/services/rideService');
const Ride = require('../../backend/ride-service/models/Ride');
const mongoose = require('mongoose');
const dbConfig = require('../../backend/shared/config/dbConfig');

describe('rideService', () => {
  beforeAll(async () => {
    await mongoose.connect(dbConfig.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  describe('createRide', () => {
    it('should create a new ride', async () => {
      const rideData = {
        riderId: new mongoose.Types.ObjectId(),
        driverId: new mongoose.Types.ObjectId(),
        startLocation: { lat: 40.7128, lng: -74.0060 },
        endLocation: { lat: 34.0522, lng: -118.2437 },
        fare: 50
      };

      const ride = await rideService.createRide(rideData);

      expect(ride).toHaveProperty('_id');
      expect(ride).toHaveProperty('riderId', rideData.riderId);
      expect(ride).toHaveProperty('driverId', rideData.driverId);
      expect(ride).toHaveProperty('startLocation', rideData.startLocation);
      expect(ride).toHaveProperty('endLocation', rideData.endLocation);
      expect(ride).toHaveProperty('fare', rideData.fare);
      expect(ride).toHaveProperty('status', 'requested');
    });
  });

  describe('getRide', () => {
    it('should fetch a ride by ID', async () => {
      const rideData = {
        riderId: new mongoose.Types.ObjectId(),
        driverId: new mongoose.Types.ObjectId(),
        startLocation: { lat: 40.7128, lng: -74.0060 },
        endLocation: { lat: 34.0522, lng: -118.2437 },
        fare: 50
      };

      const createdRide = await rideService.createRide(rideData);
      const fetchedRide = await rideService.getRide(createdRide._id);

      expect(fetchedRide).toHaveProperty('_id', createdRide._id);
      expect(fetchedRide).toHaveProperty('riderId', rideData.riderId);
      expect(fetchedRide).toHaveProperty('driverId', rideData.driverId);
      expect(fetchedRide).toHaveProperty('startLocation', rideData.startLocation);
      expect(fetchedRide).toHaveProperty('endLocation', rideData.endLocation);
      expect(fetchedRide).toHaveProperty('fare', rideData.fare);
      expect(fetchedRide).toHaveProperty('status', 'requested');
    });
  });

  describe('updateRide', () => {
    it('should update a ride by ID', async () => {
      const rideData = {
        riderId: new mongoose.Types.ObjectId(),
        driverId: new mongoose.Types.ObjectId(),
        startLocation: { lat: 40.7128, lng: -74.0060 },
        endLocation: { lat: 34.0522, lng: -118.2437 },
        fare: 50
      };

      const createdRide = await rideService.createRide(rideData);
      const updatedData = { status: 'completed' };
      const updatedRide = await rideService.updateRide(createdRide._id, updatedData);

      expect(updatedRide).toHaveProperty('_id', createdRide._id);
      expect(updatedRide).toHaveProperty('status', 'completed');
    });
  });

  describe('deleteRide', () => {
    it('should delete a ride by ID', async () => {
      const rideData = {
        riderId: new mongoose.Types.ObjectId(),
        driverId: new mongoose.Types.ObjectId(),
        startLocation: { lat: 40.7128, lng: -74.0060 },
        endLocation: { lat: 34.0522, lng: -118.2437 },
        fare: 50
      };

      const createdRide = await rideService.createRide(rideData);
      await rideService.deleteRide(createdRide._id);
      const deletedRide = await Ride.findById(createdRide._id);

      expect(deletedRide).toBeNull();
    });
  });
});
