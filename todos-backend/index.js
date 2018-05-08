const express = require("express");
const app = express();
const cors = require("cors");//cross origin resource sharing - allows make req. to localhost:3001 from localhost:3000
const morgan = require("morgan");//for serverside logging
const bodyParser = require("body-parser");//to have access to req.body
const todoRoutes = require("./routes/todos");

app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use("/api/todos", todoRoutes);

app.use(function(req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: err
  });
});

app.listen(3001, function() {
  console.log("Server starting on port 3001");
});
