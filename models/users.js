const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: String,
  lasteName: String,
  email: String,
  inscriptionDate: Date,
});

const User = mongoose.model("users", userSchema);

module.exports = User;
