const express = require('express');
const router = express.Router();
const rideController = require('../controllers/rideController');

// Define routes for ride request API endpoints
router.post('/rides', rideController.createRide);
router.get('/rides/:id', rideController.getRideById);
router.put('/rides/:id', rideController.updateRide);
router.delete('/rides/:id', rideController.deleteRide);

module.exports = router;
