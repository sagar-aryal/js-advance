const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  title: {
    type: String,
    required: [true, "please add todo title"],
    maxlength: [100, "title cannot be more than 100 characters"],
  },
  // completed: { type: Boolean, default: false }, // Don't do this because default false value doesn't get store to momgodb
  completed: Boolean,
});

const Todo = mongoose.model("Todo", TodoSchema);
module.exports = Todo;
