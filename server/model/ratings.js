const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ratingSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },

  recipe: {
    type: Schema.Types.ObjectId,
    ref: "Recipes",
  },

  rate: {
    type: Number
  }
});

const ratingModel = mongoose.model("Rating", ratingSchema);

module.exports = ratingModel;
