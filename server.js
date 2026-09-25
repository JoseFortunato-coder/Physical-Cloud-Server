const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3000 });
const clientes = new Map(); 
let de = 100000;
    let ate = 999999;
      let codigo = Math.floor(Math.random() * (ate - de + 1)) + de
wss.on('connection', (ws) => {
  console.log('Client connected');
  console.log(`Código gerado: ${codigo}`);
  ws.on('message', (message) => {
    JSON.parse(message);
    console.log(`Received message: ${message}`);
  });
});
console.log('WebSocket server is running on ws://localhost:3000');