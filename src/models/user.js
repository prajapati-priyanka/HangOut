const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    "firstName": String,  // String is Shorthand for {type: String}. This is used if it has only type property
    "lastName": String,
    "email": String,
    "password": String,
    "gender": String,
});

const User = mongoose.model('User', userSchema);

module.exports = {
    User
}