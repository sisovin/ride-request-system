const WebSocket = require('ws');

class SocketService {
  constructor(server) {
    this.wss = new WebSocket.Server({ server });
    this.wss.on('connection', this.handleConnection.bind(this));
  }

  handleConnection(ws) {
    ws.on('message', this.handleMessage.bind(this, ws));
    ws.on('close', this.handleClose.bind(this, ws));
  }

  handleMessage(ws, message) {
    console.log('Received message:', message);
    // Handle incoming message
  }

  handleClose(ws) {
    console.log('Connection closed');
    // Handle connection close
  }

  broadcast(data) {
    this.wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  }
}

module.exports = SocketService;
