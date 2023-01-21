/*
**  io = websocket client instance
**  socket = connects client to server
**  socket.on = when new data is recived, log to console
**  socket.emit = send data to server
*/

import { io } from "socket.io-client"
const socket = io("ws://localhost:13555")
socket.on("newData", newData => console.log(newData))

setInterval(data, 1000)
function data() {
  const d = Math.random()
  socket.emit("data", d)
}
