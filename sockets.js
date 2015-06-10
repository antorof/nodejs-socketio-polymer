module.exports = function(io) {
  console.log("-- SOCKET.IO STARTED");

  io.sockets.on('connection', function (socket) {
    console.log("[io] NUEVA CONEXION");
    socket.emit("news","Hello visitor");
    socket.on('captain', function(data) {
      console.log(data);
      socket.emit('Hello');
    });
  });
};