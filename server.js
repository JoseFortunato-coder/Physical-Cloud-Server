const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3000 });
const clientes = new Map(); 
let tornarServidor = false;
function criarDispositivoServidor() {
  tornarServidor = true;
   let de = 100000;
    let ate = 999999;
      let codigo = Math.floor(Math.random() * (ate - de + 1)) + de
      socket.send(JSON.stringify({ type: tornarServidor, codigo }));
}
wss.on('connection', (ws) => {
 
  
  console.log('Client connected');
  console.log(`Código gerado: ${codigo}`);
   clientes.set(codigo, ws);
  ws.on('message', (message) => {
   const dados = JSON.parse(message);
    console.log(`Received message: ${message}`);
  });
});
console.log('WebSocket server is running on ws://localhost:3000');