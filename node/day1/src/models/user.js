const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, "please add email"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please use a valid email address",
    ],
  },
  password: { type: String, required: [true, "please add email"] },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
