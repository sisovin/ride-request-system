import WebSocket from 'ws';

const WEBSOCKET_URL = 'ws://localhost:8080';

class WebSocketClient {
  constructor() {
    this.ws = new WebSocket(WEBSOCKET_URL);
    this.ws.on('open', this.onOpen.bind(this));
    this.ws.on('message', this.onMessage.bind(this));
    this.ws.on('close', this.onClose.bind(this));
    this.ws.on('error', this.onError.bind(this));
  }

  onOpen() {
    console.log('WebSocket connection opened');
  }

  onMessage(message) {
    console.log('Received message:', message);
    // Handle incoming message
  }

  onClose() {
    console.log('WebSocket connection closed');
  }

  onError(error) {
    console.error('WebSocket error:', error);
  }

  sendMessage(data) {
    if (this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(data));
    } else {
      console.error('WebSocket is not open. Ready state:', this.ws.readyState);
    }
  }
}

export default WebSocketClient;
