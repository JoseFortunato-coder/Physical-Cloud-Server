const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3000 });
const clientes = new Map(); 

wss.on('connection', (ws) => {
  console.log('Client connected');
  
  ws.on('message', (message) => {
   const dados = JSON.parse(message);
    if (dados.type === "tornar-servidor") {
   let de = 100000;
    let ate = 999999;
      let codigo = Math.floor(Math.random() * (ate - de + 1)) + de;
       clientes.set(codigo, ws);

       ws.send(JSON.stringify({ type: "codigo-gerado", codigo: codigo }));
       
      
    }
    console.log(`Received message: ${message}`);
  });
});
console.log('WebSocket server is running on ws://localhost:3000');