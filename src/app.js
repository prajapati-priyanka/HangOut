const express = require("express");
const connectDB = require("./config/database.js");
const { User } = require("./models/user.js");
const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
  const newUser = req?.body;

  // console.log("req", req?.body);

  try {
    const user = new User(newUser);

    await user.save();

    res.status(201).send("User Added Successfully");
  } catch (error) {
    res.status(404).send("Something went wrong" + error.message);
  }
});

// Database connection
connectDB()
  .then(() => {
    console.log("DataBase connection is successfully established");
    app.listen(3000, () => {
      console.log("server is successfully running on port 3000...");
    });
  })
  .catch((err) => console.error(err));
