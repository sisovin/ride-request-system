const WebSocketService = require('../services/socketService');

class RideHandler {
  constructor() {
    this.webSocketService = new WebSocketService();
  }

  handleRideUpdate(rideUpdate) {
    const data = JSON.stringify(rideUpdate);
    this.webSocketService.broadcast(data);
  }
}

module.exports = RideHandler;
