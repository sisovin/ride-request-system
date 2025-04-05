# Ride Request System

## Project Overview

This project is a ride request system that includes various services for handling ride requests, driver assignments, notifications, analytics, and more. The system is designed to be scalable and maintainable, using modern technologies and best practices.

## Project Structure

```
ride-request-system/
│
├── backend/
│   ├── gateway-service/           # Handles API requests & authentication
│   │   ├── controllers/
│   │   │   ├── rideController.js  # API endpoints for ride requests
│   │   │   ├── authController.js  # JWT authentication logic
│   │   ├── routes/
│   │   │   ├── rideRoutes.js      # Ride request API routes
│   │   │   ├── authRoutes.js      # Auth routes (login, signup)
│   │   ├── middleware/
│   │   │   ├── authMiddleware.js  # Middleware for authentication
│   │   ├── services/
│   │   │   ├── webSocketService.js # Handles WebSocket communication
│   │   ├── config/
│   │   │   ├── kafka.js           # Kafka producer setup
│   │   │   ├── redis.js           # Redis connection for caching
│   │   ├── app.js                 # Express app initialization
│   │   ├── server.js              # Server entry point
│
│   ├── websocket-service/         # WebSocket server for real-time updates
│   │   ├── handlers/
│   │   │   ├── rideHandler.js      # Handles real-time ride updates
│   │   ├── services/
│   │   │   ├── socketService.js    # Manages WebSocket connections
│   │   ├── config/
│   │   │   ├── redis.js            # Stores active WebSocket connections
│   │   ├── server.js               # WebSocket server
│
│   ├── kafka-service/              # Kafka-based event processing
│   │   ├── producers/
│   │   │   ├── rideProducer.js      # Publishes ride requests to Kafka
│   │   ├── consumers/
│   │   │   ├── rideConsumer.js      # Consumes ride request events
│   │   ├── config/
│   │   │   ├── kafkaConfig.js       # Kafka connection setup
│
│   ├── ride-service/               # Core ride management logic
│   │   ├── controllers/
│   │   │   ├── rideController.js    # Processes ride requests
│   │   ├── services/
│   │   │   ├── rideService.js       # Business logic for ride handling
│   │   │   ├── mappingService.js    # Calls third-party mapping APIs
│   │   ├── models/
│   │   │   ├── Ride.js              # Ride schema/model
│   │   ├── database/
│   │   │   ├── db.js                # Database connection setup
│   │   ├── config/
│   │   │   ├── mappingAPI.js        # External mapping service integration
│
│   ├── driver-assignment-service/   # Assigns drivers to rides
│   │   ├── controllers/
│   │   │   ├── driverController.js  # Assigns driver based on location
│   │   ├── services/
│   │   │   ├── assignmentService.js # Finds nearest driver
│   │   │   ├── lockService.js       # Implements distributed lock
│   │   ├── config/
│   │   │   ├── redis.js             # Caches driver locations
│   │   │   ├── kafka.js             # Handles assignment queue
│
│   ├── notification-service/        # Sends alerts to drivers and riders
│   │   ├── services/
│   │   │   ├── pushNotification.js  # Sends mobile push notifications
│   │   │   ├── smsService.js        # Sends SMS alerts
│   │   ├── config/
│   │   │   ├── firebase.js          # Firebase setup for push notifications
│   │   ├── workers/
│   │   │   ├── notificationWorker.js # Background job for notifications
│
│   ├── analytics-service/           # Logs and monitors ride metrics
│   │   ├── consumers/
│   │   │   ├── rideAnalyticsConsumer.js # Listens for ride events
│   │   ├── database/
│   │   │   ├── analyticsDB.js        # Stores ride analytics
│
│   ├── shared/                      # Shared utilities and configs
│   │   ├── utils/
│   │   │   ├── logger.js             # Logging utility
│   │   │   ├── errorHandler.js       # Global error handling
│   │   ├── config/
│   │   │   ├── dbConfig.js           # Database configurations
│   │   │   ├── env.js                # Environment variables
│
├── frontend/                         # Mobile/Web apps for riders and drivers
│   ├── rider-app/                    # Rider mobile app
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── screens/
│   │   │   ├── services/
│   │   │   │   ├── rideService.js    # Calls ride request API
│   │   │   │   ├── webSocket.js      # WebSocket client
│   │   │   ├── App.js                # Entry point
│   │   ├── package.json              # Dependencies
│
│   ├── driver-app/                   # Driver mobile app
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── screens/
│   │   │   ├── services/
│   │   │   │   ├── assignmentService.js # Fetch ride assignments
│   │   │   │   ├── webSocket.js      # WebSocket client
│   │   │   ├── App.js                # Entry point
│   │   ├── package.json              # Dependencies
│
├── infra/                             # Infrastructure & DevOps
│   ├── docker/
│   │   ├── Dockerfile.gateway         # Docker config for Gateway
│   │   ├── Dockerfile.ride            # Docker config for Ride Service
│   │   ├── docker-compose.yml         # Service composition
│   ├── k8s/
│   │   ├── deployment.yaml            # Kubernetes deployment
│   ├── terraform/
│   │   ├── main.tf                    # Terraform infrastructure setup
│
├── docs/                              # Project documentation
│   ├── architecture.md                # System design overview
│   ├── api-spec.md                    # API specifications
│   ├── kafka-events.md                # Kafka event schema
│
├── tests/                             # Automated tests
│   ├── integration/
│   ├── unit/
│
├── .env                               # Environment variables
├── .gitignore                         # Git ignore file
├── README.md                          # Project overview
```

## Setup Instructions

1. Clone the repository:
   ```sh
   git clone https://github.com/githubnext/workspace-blank.git
   cd ride-request-system
   ```

2. Install dependencies for each service:
   ```sh
   cd backend/gateway-service
   npm install
   cd ../websocket-service
   npm install
   cd ../kafka-service
   npm install
   cd ../ride-service
   npm install
   cd ../driver-assignment-service
   npm install
   cd ../notification-service
   npm install
   cd ../analytics-service
   npm install
   cd ../../frontend/rider-app
   npm install
   cd ../driver-app
   npm install
   ```

3. Set up environment variables:
   - Copy the `.env.example` file to `.env` and update the values as needed.

4. Start the services:
   ```sh
   cd backend/gateway-service
   npm start
   cd ../websocket-service
   npm start
   cd ../kafka-service
   npm start
   cd ../ride-service
   npm start
   cd ../driver-assignment-service
   npm start
   cd ../notification-service
   npm start
   cd ../analytics-service
   npm start
   cd ../../frontend/rider-app
   npm start
   cd ../driver-app
   npm start
   ```

5. Run tests:
   ```sh
   cd tests
   npm test
   ```

## Usage Instructions

- The Gateway Service handles API requests and authentication.
- The WebSocket Service provides real-time updates for ride requests.
- The Kafka Service processes ride request events.
- The Ride Service manages core ride logic.
- The Driver Assignment Service assigns drivers to rides.
- The Notification Service sends alerts to drivers and riders.
- The Analytics Service logs and monitors ride metrics.
- The Rider App and Driver App are mobile applications for riders and drivers, respectively.

## Documentation

- [Architecture](docs/architecture.md)
- [API Specifications](docs/api-spec.md)
- [Kafka Events](docs/kafka-events.md)
