# System Design Overview

## Architecture Diagram

![Architecture Diagram](architecture-diagram.png)

## Components

### Backend

#### Gateway Service
- Handles API requests & authentication
- Components:
  - Controllers: `rideController.js`, `authController.js`
  - Routes: `rideRoutes.js`, `authRoutes.js`
  - Middleware: `authMiddleware.js`
  - Services: `webSocketService.js`
  - Config: `kafka.js`, `redis.js`
  - App Initialization: `app.js`, `server.js`

#### WebSocket Service
- WebSocket server for real-time updates
- Components:
  - Handlers: `rideHandler.js`
  - Services: `socketService.js`
  - Config: `redis.js`
  - Server: `server.js`

#### Kafka Service
- Kafka-based event processing
- Components:
  - Producers: `rideProducer.js`
  - Consumers: `rideConsumer.js`
  - Config: `kafkaConfig.js`

#### Ride Service
- Core ride management logic
- Components:
  - Controllers: `rideController.js`
  - Services: `rideService.js`, `mappingService.js`
  - Models: `Ride.js`
  - Database: `db.js`
  - Config: `mappingAPI.js`

#### Driver Assignment Service
- Assigns drivers to rides
- Components:
  - Controllers: `driverController.js`
  - Services: `assignmentService.js`, `lockService.js`
  - Config: `redis.js`, `kafka.js`

#### Notification Service
- Sends alerts to drivers and riders
- Components:
  - Services: `pushNotification.js`, `smsService.js`
  - Config: `firebase.js`
  - Workers: `notificationWorker.js`

#### Analytics Service
- Logs and monitors ride metrics
- Components:
  - Consumers: `rideAnalyticsConsumer.js`
  - Database: `analyticsDB.js`

#### Shared
- Shared utilities and configs
- Components:
  - Utils: `logger.js`, `errorHandler.js`
  - Config: `dbConfig.js`, `env.js`

### Frontend

#### Rider App
- Rider mobile app
- Components:
  - Source: `src/`
    - Components: `rideService.js`, `webSocket.js`
    - Entry Point: `App.js`
  - Dependencies: `package.json`

#### Driver App
- Driver mobile app
- Components:
  - Source: `src/`
    - Components: `assignmentService.js`, `webSocket.js`
    - Entry Point: `App.js`
  - Dependencies: `package.json`

### Infrastructure

#### Docker
- Docker configuration
- Components:
  - Dockerfiles: `Dockerfile.gateway`, `Dockerfile.ride`
  - Service Composition: `docker-compose.yml`

#### Kubernetes
- Kubernetes deployment
- Components:
  - Deployment: `deployment.yaml`

#### Terraform
- Terraform infrastructure setup
- Components:
  - Main Configuration: `main.tf`

### Documentation

#### Project Documentation
- Components:
  - System Design Overview: `architecture.md`
  - API Specifications: `api-spec.md`
  - Kafka Event Schema: `kafka-events.md`

### Tests

#### Automated Tests
- Components:
  - Integration Tests: `integration/`
  - Unit Tests: `unit/`

## Environment Variables
- Defined in `.env` file
- Includes variables for database, Redis, Kafka, and Firebase

## Git Ignore
- Defined in `.gitignore` file
- Includes `node_modules`, `dist`, and `.env`

## Project Overview
- Defined in `README.md` file
- Includes instructions for setup and usage
