const express = require("express");
const connectDB = require("./config/database.js");
const { User } = require("./models/user.js");
const app = express();

app.use(express.json());  // use to parse the client request for all the routes.

// signup API
app.post("/signup", async (req, res) => {
  const newUser = req?.body;

  try {
    const user = new User(newUser);

    await user.save();

    res.status(201).send("User Added Successfully");
  } catch (error) {
    res.status(404).send("Something went wrong" + error.message);
  }
});

// Feed API => Get All Users
app.get("/user", async(req, res)=>{

  try {
   const users = await User.find({});
  // console.log("users", users);
  res.status(200).send(users);
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
