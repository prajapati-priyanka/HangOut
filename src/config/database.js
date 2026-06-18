const mongoose = require("mongoose");

const connectDB = async ()=>{
    await mongoose.connect("mongodb+srv://hangout:hangout_123@hangout.qczpx50.mongodb.net/hangOut")
}

module.exports = connectDB;