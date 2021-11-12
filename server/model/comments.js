const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  message: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },

  date: Date,
});

const commentModel = mongoose.model("Comments", commentSchema);

module.exports = commentModel;
