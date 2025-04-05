const express = require('express');
const router = express.Router();
const rideService = require('../../../ride-service/services/rideService');

// Create a new ride request
router.post('/rides', async (req, res) => {
  try {
    const ride = await rideService.createRide(req.body);
    res.status(201).json(ride);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get ride details by ID
router.get('/rides/:id', async (req, res) => {
  try {
    const ride = await rideService.getRideById(req.params.id);
    if (!ride) {
      return res.status(404).json({ message: 'Ride not found' });
    }
    res.json(ride);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update ride details by ID
router.put('/rides/:id', async (req, res) => {
  try {
    const updatedRide = await rideService.updateRide(req.params.id, req.body);
    if (!updatedRide) {
      return res.status(404).json({ message: 'Ride not found' });
    }
    res.json(updatedRide);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete ride by ID
router.delete('/rides/:id', async (req, res) => {
  try {
    const deletedRide = await rideService.deleteRide(req.params.id);
    if (!deletedRide) {
      return res.status(404).json({ message: 'Ride not found' });
    }
    res.json({ message: 'Ride deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
