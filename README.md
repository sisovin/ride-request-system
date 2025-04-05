# Ride Request System

## Project Overview

This project is a ride request system that includes various services for handling ride requests, driver assignments, notifications, analytics, and more. The system is designed to be scalable and maintainable, using modern technologies and best practices.

## Project Structure

This is a comprehensive file/folder structure for your ride request system that includes payment services, admin functionality, authentication with multiple providers, and shared components between apps.

Here's the file/folder structure:

```
ride-request-system/
├── backend/
│   ├── gateway-service/                   # API Gateway
│   │   ├── src/
│   │   │   ├── controllers/
│   │   │   ├── middlewares/
│   │   │   │   ├── auth/                  # Authentication middleware
│   │   │   │   ├── rateLimit.js
│   │   │   ├── routes/
│   │   │   ├── index.js
│   │   ├── package.json
│   │   ├── Dockerfile
│   │
│   ├── ride-service/                      # Handles ride requests
│   │   ├── src/
│   │   │   ├── controllers/
│   │   │   ├── models/
│   │   │   ├── services/
│   │   │   ├── events/                    # Event publishers/subscribers
│   │   │   ├── index.js
│   │   ├── package.json
│   │   ├── Dockerfile
│   │
│   ├── driver-assignment-service/         # Matches riders with drivers
│   │   ├── src/
│   │   │   ├── controllers/
│   │   │   ├── models/
│   │   │   ├── services/
│   │   │   │   ├── matching-algorithm.js
│   │   │   ├── events/
│   │   │   ├── index.js
│   │   ├── package.json
│   │   ├── Dockerfile
│   │
│   ├── websocket-service/                 # Real-time communication
│   │   ├── src/
│   │   │   ├── handlers/
│   │   │   ├── events/
│   │   │   ├── index.js
│   │   ├── package.json
│   │   ├── Dockerfile
│   │
│   ├── auth-service/                      # Authentication service
│   │   ├── src/
│   │   │   ├── controllers/
│   │   │   ├── models/
│   │   │   ├── services/
│   │   │   │   ├── jwt.js
│   │   │   │   ├── oauth.js               # OAuth providers
│   │   │   ├── index.js
│   │   ├── package.json
│   │   ├── Dockerfile
│   │
│   ├── payment-service/                   # Payment processing
│   │   ├── src/
│   │   │   ├── controllers/
│   │   │   ├── models/
│   │   │   ├── services/
│   │   │   │   ├── aba.js                 # ABA payment integration
│   │   │   │   ├── bakong.js              # Bakong payment integration
│   │   │   ├── events/
│   │   │   ├── index.js
│   │   ├── package.json
│   │   ├── Dockerfile
│   │
│   ├── notification-service/              # Push notifications
│   │   ├── src/
│   │   │   ├── controllers/
│   │   │   ├── services/
│   │   │   ├── events/
│   │   │   ├── index.js
│   │   ├── package.json
│   │   ├── Dockerfile
│   │
│   ├── shared/                            # Shared backend code
│   │   ├── models/
│   │   ├── middlewares/
│   │   ├── utils/
│   │   ├── constants/
│   │   ├── package.json
│
├── frontend/
│   ├── rider-app/                         # Rider mobile app (React Native)
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── screens/
│   │   │   │   ├── auth/
│   │   │   │   ├── home/
│   │   │   │   ├── ride/
│   │   │   │   ├── payment/
│   │   │   │   ├── profile/
│   │   │   ├── services/
│   │   │   │   ├── rideService.js
│   │   │   │   ├── webSocket.js
│   │   │   │   ├── paymentService.js
│   │   │   │   ├── authService.js
│   │   │   ├── navigation/
│   │   │   ├── utils/
│   │   │   ├── App.js
│   │   ├── package.json
│   │   ├── app.json
│   │
│   ├── driver-app/                        # Driver mobile app (React Native)
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── screens/
│   │   │   │   ├── auth/
│   │   │   │   ├── home/
│   │   │   │   ├── assignments/
│   │   │   │   ├── earnings/
│   │   │   │   ├── profile/
│   │   │   ├── services/
│   │   │   │   ├── assignmentService.js
│   │   │   │   ├── webSocket.js
│   │   │   │   ├── earningsService.js
│   │   │   │   ├── authService.js
│   │   │   ├── navigation/
│   │   │   ├── utils/
│   │   │   ├── App.js
│   │   ├── package.json
│   │   ├── app.json
│   │
│   ├── admin-dashboard/                   # Admin web application
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   │   ├── auth/
│   │   │   │   ├── dashboard/
│   │   │   │   ├── rides/
│   │   │   │   ├── drivers/
│   │   │   │   ├── riders/
│   │   │   │   ├── payments/
│   │   │   │   ├── reports/
│   │   │   ├── services/
│   │   │   ├── utils/
│   │   │   ├── App.js
│   │   ├── package.json
│   │
│   ├── shared/                            # Shared frontend code
│   │   ├── components/                    # Reusable UI components
│   │   ├── hooks/                         # Custom React hooks
│   │   ├── utils/                         # Utility functions
│   │   ├── constants/                     # Shared constants
│   │   ├── services/                      # Common service logic
│   │   ├── package.json
│
├── infrastructure/                        # Infrastructure as code
│   ├── docker-compose.yml                 # Local development setup
│   ├── k8s/                               # Kubernetes manifests
│   │   ├── deployments/
│   │   ├── services/
│   │   ├── ingress/
│   │   ├── config-maps/
│   │   ├── secrets/
│
├── ci-cd/                                 # CI/CD configuration
│   ├── .github/
│   │   ├── workflows/
│   │   │   ├── build-test.yml
│   │   │   ├── deploy-dev.yml
│   │   │   ├── deploy-prod.yml
│
├── docs/                                  # Documentation
│   ├── api/                               # API documentation
│   ├── architecture/                      # Architecture diagrams
│   ├── development/                       # Development guides
│
├── .env.example                           # Example environment variables
├── .gitignore                             # Git ignore file
├── README.md                              # Project overview
├── CONTRIBUTING.md                        # Guidelines for contributing
├── LICENSE                                # License information
```

This structure includes:

1. **Backend microservices** with dedicated services for core functionalities
2. **Payment service** with integrations for ABA and Bakong
3. **Frontend apps** for riders, drivers, and admin dashboard
4. **Shared libraries** for both frontend and backend
5. **Infrastructure** configuration for Docker and Kubernetes
6. **CI/CD pipeline** setup using GitHub Actions
7. **Documentation** for API, architecture, and development guides

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
