const mongoose = require("mongoose");

// defin schema for user sign up
const UserSignUpSchema = mongoose.Schema({
  Name: { type: String, require: true, trim: true },
  Email: { type: String, require: true, trim: true },
  Password: { type: String, require: true, trim: true },
});

const UserSignUpModel = mongoose.model("userSignUp", UserSignUpSchema);

module.exports = UserSignUpModel;
