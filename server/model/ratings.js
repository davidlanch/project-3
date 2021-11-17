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
    type: Number,
    enum:[1,2,3,4,5]
  }
});

const ratingModel = mongoose.model("Rating", ratingSchema);

module.exports = ratingModel;
