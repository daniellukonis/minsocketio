/*
**  io = websocket server instance
**  (13555) = starts server and listens on port 13555
**  .on = estabishes connection with client
**  socket.on = listens for new message with "data" keyword
**  io.emit = broadcast data with keyword "newData" to all connected clients
*/

const io = require("socket.io")(13555)
  .on("connection", (socket) => {
    socket.on("data", data => io.emit("newData", data))
  })