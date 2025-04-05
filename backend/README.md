# Ride Request System 

## Project Overview

The Ride Request System is a microservice-based platform designed to efficiently connect riders with drivers. Built with a modern event-driven architecture, the system provides real-time ride matching, tracking, and notifications through a distributed and scalable infrastructure.

Key features include:
- Real-time ride tracking and status updates
- Intelligent driver matching based on proximity and availability
- Multi-channel notifications (push, SMS)
- Secure authentication and authorization
- Event-driven communication between services
- Analytics and metrics collection for business intelligence

The platform employs multiple technologies including:
- Node.js microservices for backend processing
- Kafka for reliable event streaming and messaging
- Redis for caching and distributed data sharing
- WebSockets for real-time client-server communication
- JWT for secure authentication
- MongoDB for primary data storage
- RESTful APIs for service communication

## Service Structure

### Gateway Service
Entry point for all API requests with authentication and routing functionality:
- Handles authentication (JWT)
- Routes ride requests
- Manages WebSocket connections
- Interfaces with Kafka for event processing
- Uses Redis for caching

### WebSocket Service
Manages real-time communication:
- Handles persistent connections for live updates
- Manages ride status changes in real-time
- Uses Redis to track active connections

### Kafka Service
Event-driven architecture component:
- Publishes ride events to appropriate topics
- Consumes events from various services
- Provides message queue functionality

### Ride Service
Core business logic for ride management:
- Processes ride requests
- Integrates with mapping services
- Stores ride data
- Handles ride lifecycle

### Driver Assignment Service
Intelligently matches drivers with ride requests:
- Uses location data to find nearest drivers
- Implements distributed locking for concurrent assignment
- Caches driver locations for quick lookups
- Communicates assignments via Kafka

### Notification Service
Alerts users through multiple channels:
- Sends push notifications to mobile devices
- Delivers SMS alerts
- Uses background workers for asynchronous processing

### Analytics Service
Captures and processes ride metrics:
- Consumes ride events from Kafka
- Stores data for analytics purposes
- Enables business intelligence

### Shared Components
Common utilities and configurations used across services:
- Logging infrastructure
- Error handling
- Database configurations
- Environment settings

```

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
├── CONTRIBUTING.md                    # Guidelines for contributing to the project
├── LICENSE                             # License information
└── package.json                       # Project dependencies and scripts
```


