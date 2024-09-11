// src/server.js

const app = require("./app");




app.listen(3000, () => {
    console.log("server is running on port 3000");
});

app.get("/", (req, res) => {
    res.send("Hello World!");
})

module.exports = app