const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3000 });
wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
  });
});
console.log('WebSocket server is running on ws://localhost:3000');