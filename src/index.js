// server.js
const WebSocket = require("ws");

// Create a WebSocket server
const server = new WebSocket.Server({ port: 8080 });
const clients = new Set();

const broadcast = (message) => {
  for (const client of clients) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  }
};

// Listen for new connections
server.on("connection", (socket) => {
  console.log("Client connected");
  clients.add(socket);
  console.log("Connected clients:", clients.size);
  // Listen for messages from clients
  socket.on("message", (message) => {
    console.log(`Received message: ${message}`);

    // Send a message back to the client
    // socket.send(`You said: ${message}`);
    broadcast(message);
  });

  // Listen for the socket to close
  socket.on("close", () => {
    console.log("Client disconnected");
    clients.delete(socket);
    console.log("Connected clients:", clients.size);
  });
});

console.log("WebSocket server is running on ws://localhost:8080");
