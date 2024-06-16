const http = require("http");
const socketIO = require("socket.io");
const app = require("./app");

//mid
const server = http.createServer(app);
const io = socketIO(server);

app.get("/", (req, res) => {
  res.send("/api/todos");
});

io.on("connection", (socket) => {
  console.log("A user connected");

  // Handle Socket.IO events here

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

const PORT = process.env.PORT || 3311;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
