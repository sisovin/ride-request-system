# Ride Request System - Frontend

## Project Overview
The Ride Request System is a microservice-based platform designed to efficiently connect riders with drivers. Built with a modern event-driven architecture, the system provides real-time ride matching, tracking, and notifications through a distributed and scalable infrastructure.

## Project Structure

```
ride-request-system/
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
|   ├── .env                               # Environment variables
|   ├── .gitignore                         # Git ignore file
|   ├── README.md                          # Project overview
|   ├── CONTRIBUTING.md                    # Guidelines for contributing to the project
|   ├── LICENSE                             # License information
|   └── package.json                       # Project dependencies and scripts
```