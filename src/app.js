const express = require("express");
const connectDB = require("./config/database.js")

const app = express();

connectDB().then(()=>{
    console.log("DataBase connection is successfully established");
    app.listen(3000, () => {
  console.log("server is successfully running on port 3000...");
});

}
).catch(err => console.error(err))


