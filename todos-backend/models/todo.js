const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/todos-backend");
mongoose.set("debug", true); //log mongo quiries for debugging
mongoose.Promise = Promise; //use ES2015 promises

const todoSchema = new mongoose.Schema({
  task: String
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
