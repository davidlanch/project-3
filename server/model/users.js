const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    default: "anonym",
  },
  favorites: [
    {
      type: Schema.Types.ObjectId,
      ref: "Recipes",
    },
  ],

  avatar: {
    type: String,
    default: "https://cdn.onlinewebfonts.com/svg/img_258083.png",
  },
});

const userModel = mongoose.model("Users", userSchema);

module.exports = userModel;
