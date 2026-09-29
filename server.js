const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3000 });
const clientes = new Map(); 
let tornarServidor = false;

wss.on('connection', (ws) => {
 function criarDispositivoServidor() {
  tornarServidor = true;
   let de = 100000;
    let ate = 999999;
      let codigo = Math.floor(Math.random() * (ate - de + 1)) + de
      ws.send(JSON.stringify({ type: tornarServidor, codigo }));
}
  
  console.log('Client connected');
  if (tornarServidor === true) {
      console.log(`Código gerado: ${codigo}`);
  }

   clientes.set(codigo, ws);
  ws.on('message', (message) => {
   const dados = JSON.parse(message);
    console.log(`Received message: ${message}`);
  });
});
console.log('WebSocket server is running on ws://localhost:3000');