module.exports = function(io) {
  console.log("-- SOCKET.IO STARTED");

  io.sockets.on('connection', function (socket) {
    console.log("NUEVA CONEXION")
    socket.on('captain', function(data) {
      console.log(data);
      socket.emit('Hello');
    });
  });
};