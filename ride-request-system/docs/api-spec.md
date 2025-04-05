# API Specifications

## Gateway Service

### Ride Requests

#### Create Ride Request
- **Endpoint:** `POST /api/rides`
- **Request Body:**
  ```json
  {
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
- **Response:**
  ```json
  {
    "rideId": "string",
    "status": "string",
    "driverId": "string",
    "estimatedArrivalTime": "string"
  }
  ```

#### Get Ride Details
- **Endpoint:** `GET /api/rides/:id`
- **Response:**
  ```json
  {
    "rideId": "string",
    "status": "string",
    "driverId": "string",
    "pickupLocation": {
      "latitude": "number",
      "longitude": "number"
    },
    "dropoffLocation": {
      "latitude": "number",
      "longitude": "number"
    },
    "estimatedArrivalTime": "string"
  }
  ```

#### Update Ride Details
- **Endpoint:** `PUT /api/rides/:id`
- **Request Body:**
  ```json
  {
    "status": "string",
    "driverId": "string",
    "estimatedArrivalTime": "string"
  }
  ```
- **Response:**
  ```json
  {
    "rideId": "string",
    "status": "string",
    "driverId": "string",
    "pickupLocation": {
      "latitude": "number",
      "longitude": "number"
    },
    "dropoffLocation": {
      "latitude": "number",
      "longitude": "number"
    },
    "estimatedArrivalTime": "string"
  }
  ```

#### Delete Ride
- **Endpoint:** `DELETE /api/rides/:id`
- **Response:**
  ```json
  {
    "message": "string"
  }
  ```

### Authentication

#### Signup
- **Endpoint:** `POST /api/auth/signup`
- **Request Body:**
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Response:**
  ```json
  {
    "message": "string"
  }
  ```

#### Login
- **Endpoint:** `POST /api/auth/login`
- **Request Body:**
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Response:**
  ```json
  {
    "token": "string"
  }
  ```

## WebSocket Service

### Real-time Ride Updates

#### Connect to WebSocket
- **Endpoint:** `ws://<websocket-server>/rides`
- **Messages:**
  - **Ride Update:**
    ```json
    {
      "rideId": "string",
      "status": "string",
      "driverId": "string",
      "estimatedArrivalTime": "string"
    }
    ```

## Kafka Service

### Ride Events

#### Ride Request Event
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

#### Ride Assignment Event
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

## Ride Service

### Ride Management

#### Create Ride
- **Function:** `createRide(data)`
- **Parameters:**
  ```json
  {
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
- **Returns:**
  ```json
  {
    "rideId": "string",
    "status": "string",
    "driverId": "string",
    "estimatedArrivalTime": "string"
  }
  ```

#### Get Ride By ID
- **Function:** `getRideById(id)`
- **Parameters:**
  ```json
  {
    "id": "string"
  }
  ```
- **Returns:**
  ```json
  {
    "rideId": "string",
    "status": "string",
    "driverId": "string",
    "pickupLocation": {
      "latitude": "number",
      "longitude": "number"
    },
    "dropoffLocation": {
      "latitude": "number",
      "longitude": "number"
    },
    "estimatedArrivalTime": "string"
  }
  ```

#### Update Ride
- **Function:** `updateRide(id, data)`
- **Parameters:**
  ```json
  {
    "id": "string",
    "data": {
      "status": "string",
      "driverId": "string",
      "estimatedArrivalTime": "string"
    }
  }
  ```
- **Returns:**
  ```json
  {
    "rideId": "string",
    "status": "string",
    "driverId": "string",
    "pickupLocation": {
      "latitude": "number",
      "longitude": "number"
    },
    "dropoffLocation": {
      "latitude": "number",
      "longitude": "number"
    },
    "estimatedArrivalTime": "string"
  }
  ```

#### Delete Ride
- **Function:** `deleteRide(id)`
- **Parameters:**
  ```json
  {
    "id": "string"
  }
  ```
- **Returns:**
  ```json
  {
    "message": "string"
  }
  ```

## Driver Assignment Service

### Driver Assignment

#### Assign Driver
- **Function:** `assignDriver(rideId, location)`
- **Parameters:**
  ```json
  {
    "rideId": "string",
    "location": {
      "latitude": "number",
      "longitude": "number"
    }
  }
  ```
- **Returns:**
  ```json
  {
    "driverId": "string",
    "status": "string",
    "estimatedArrivalTime": "string"
  }
  ```

## Notification Service

### Notifications

#### Send Push Notification
- **Function:** `sendPushNotification(data)`
- **Parameters:**
  ```json
  {
    "title": "string",
    "message": "string",
    "recipientId": "string"
  }
  ```
- **Returns:**
  ```json
  {
    "message": "string"
  }
  ```

#### Send SMS
- **Function:** `sendSMS(data)`
- **Parameters:**
  ```json
  {
    "message": "string",
    "recipientPhoneNumber": "string"
  }
  ```
- **Returns:**
  ```json
  {
    "message": "string"
  }
  ```

## Analytics Service

### Ride Analytics

#### Log Ride Event
- **Function:** `logRideEvent(data)`
- **Parameters:**
  ```json
  {
    "rideId": "string",
    "eventType": "string",
    "timestamp": "string"
  }
  ```
- **Returns:**
  ```json
  {
    "message": "string"
  }
  ```

## Shared Utilities

### Logger

#### Log Message
- **Function:** `logMessage(level, message)`
- **Parameters:**
  ```json
  {
    "level": "string",
    "message": "string"
  }
  ```
- **Returns:**
  ```json
  {
    "message": "string"
  }
  ```

### Error Handler

#### Handle Error
- **Function:** `handleError(error, req, res, next)`
- **Parameters:**
  ```json
  {
    "error": "object",
    "req": "object",
    "res": "object",
    "next": "function"
  }
  ```
- **Returns:**
  ```json
  {
    "message": "string"
  }
  ```
