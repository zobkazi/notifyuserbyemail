const express = require("express");

const db = require("./config/mongoDBCoenact");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use(express.static("public"));

app.use("/api/v1", require("./routes"));


const PORT = process.env.PORT || 5000;
db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
db.on("error", console.error.bind(console, "MongoDB connection error:"));








module.exports = app;
