const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate");

// schema for creating a new user

const userSchema = new mongoose.Schema({
    username: {type: String, requred: true},
    firstNname: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = mongoose.model('User', userSchema);

module.exports = User;