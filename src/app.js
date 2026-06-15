const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("This is the Test Route");
});
app.use("/name", (req, res) => {
  res.send("This is the Name Route");
});

app.listen(3000, () => {
  console.log("server is successfully running on port 3000...");
});
