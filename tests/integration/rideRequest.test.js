const request = require('supertest');
const app = require('../../backend/gateway-service/app');
const Ride = require('../../backend/ride-service/models/Ride');
const mongoose = require('mongoose');

describe('Ride Request API', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  beforeEach(async () => {
    await Ride.deleteMany({});
  });

  it('should create a new ride request', async () => {
    const rideData = {
      riderId: new mongoose.Types.ObjectId(),
      driverId: new mongoose.Types.ObjectId(),
      startLocation: { lat: 40.7128, lng: -74.0060 },
      endLocation: { lat: 40.7306, lng: -73.9352 },
      fare: 25.0,
    };

    const response = await request(app)
      .post('/rides')
      .send(rideData)
      .expect(201);

    expect(response.body).toHaveProperty('_id');
    expect(response.body).toMatchObject(rideData);
  });

  it('should get ride details by ID', async () => {
    const ride = new Ride({
      riderId: new mongoose.Types.ObjectId(),
      driverId: new mongoose.Types.ObjectId(),
      startLocation: { lat: 40.7128, lng: -74.0060 },
      endLocation: { lat: 40.7306, lng: -73.9352 },
      fare: 25.0,
    });
    await ride.save();

    const response = await request(app)
      .get(`/rides/${ride._id}`)
      .expect(200);

    expect(response.body).toHaveProperty('_id', ride._id.toString());
  });

  it('should update ride details by ID', async () => {
    const ride = new Ride({
      riderId: new mongoose.Types.ObjectId(),
      driverId: new mongoose.Types.ObjectId(),
      startLocation: { lat: 40.7128, lng: -74.0060 },
      endLocation: { lat: 40.7306, lng: -73.9352 },
      fare: 25.0,
    });
    await ride.save();

    const updatedData = { fare: 30.0 };

    const response = await request(app)
      .put(`/rides/${ride._id}`)
      .send(updatedData)
      .expect(200);

    expect(response.body).toHaveProperty('fare', updatedData.fare);
  });

  it('should delete ride by ID', async () => {
    const ride = new Ride({
      riderId: new mongoose.Types.ObjectId(),
      driverId: new mongoose.Types.ObjectId(),
      startLocation: { lat: 40.7128, lng: -74.0060 },
      endLocation: { lat: 40.7306, lng: -73.9352 },
      fare: 25.0,
    });
    await ride.save();

    await request(app)
      .delete(`/rides/${ride._id}`)
      .expect(200);

    const deletedRide = await Ride.findById(ride._id);
    expect(deletedRide).toBeNull();
  });
});
