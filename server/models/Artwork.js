const mongoose = require("mongoose");
const findOrCreate = require("mongoose-findorcreate");

// schema for creating a new user

const artSchema = new mongoose.Schema({
    artworkName: {type: String, requred: true},
    Price: {type: Int, required: true},
    Description: {type: String, required: true},
    Available: {type: Boolean, required: true},
});


const Artwork = mongoose.model('Artwork', artSchema);

module.exports = Artwork;