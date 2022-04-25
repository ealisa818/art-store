const { connect, connection } = require('mongoose');
// const session = require("express-session");
// const passport = require("passport");
// const passportLocalMongoose = require("passport-local-mongoose");
// const GoogleStrategy = require("passport-google-oauth20").Strategy;
// const findOrCreate = require("mongoose-findorcreate");


//add new db
connect(
  process.env.MONGODB_URI || 'mongodb+srv://localhost/Suzanne-Keenan',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,

  },
);

https://downloads.mongodb.com/compass/mongosh-1.3.1-win32-x64.zip



module.exports = connection;