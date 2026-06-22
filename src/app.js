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
app.get("/users", async(req, res)=>{

  try {
   const users = await User.find({});
  // console.log("users", users);
  res.status(200).send(users);
  } catch (error) {
    res.status(404).send("Something went wrong" + error.message);
    
  }


});

// Delete user
app.delete("/users", async(req, res)=>{

  const emailId = req?.body.email;
  try {
  
    const user = await User.findOneAndDelete({email: emailId});
  
  res.status(200).send("User Deleted Successfully!!");
  } catch (error) {
    res.status(404).send("Something went wrong" + error.message);
    
  }


});

// Find single user by id
app.get("/users/:id", async(req, res)=>{

  const userId = req?.params.id;

  try {
  
    const user = await User.findById(userId);  // shorthand for {_id: userId}
    if(!user){
      res.status(404).send("User cannot be found");
    }else{
     res.status(200).send(user);

    }
  
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
