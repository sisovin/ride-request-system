const WebSocket = require('ws');
const http = require('http');
const redisClient = require('./config/redis');
const RideHandler = require('./handlers/rideHandler');

const server = http.createServer();
const wss = new WebSocket.Server({ server });

const rideHandler = new RideHandler();

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    const rideUpdate = JSON.parse(message);
    rideHandler.handleRideUpdate(rideUpdate);
  });

  ws.on('close', () => {
    console.log('WebSocket connection closed');
  });
});

const PORT = process.env.WEBSOCKET_PORT || 8080;
server.listen(PORT, () => {
  console.log(`WebSocket server is running on port ${PORT}`);
});
