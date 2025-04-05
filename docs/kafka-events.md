# Kafka Event Schema

## Ride Events

### Ride Request Event
- **Topic:** `ride-requests`
- **Message:**
  ```json
  {
    "rideId": "string",
    "pickupLocation": {
      "latitude": "number",
      "longitude": "number"
    },
    "dropoffLocation": {
      "latitude": "number",
      "longitude": "number"
    },
    "riderId": "string"
  }
  ```

### Ride Assignment Event
- **Topic:** `ride-assignments`
- **Message:**
  ```json
  {
    "rideId": "string",
    "driverId": "string",
    "status": "string",
    "estimatedArrivalTime": "string"
  }
  ```

### Ride Analytics Event
- **Topic:** `ride-analytics`
- **Message:**
  ```json
  {
    "rideId": "string",
    "eventType": "string",
    "timestamp": "string"
  }
  ```
