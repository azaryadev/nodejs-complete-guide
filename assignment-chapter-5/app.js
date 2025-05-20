const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  console.log("this always run");
  next();
});

app.use("/users", (req, res, next) => {
  console.log("'/users' path request");
  res.send("<h1>Users page</h1>");
});

app.use("/", (req, res, next) => {
  console.log("'/' path request 2");
  res.send("<h1>Hello from express!</h1>");
});

app.listen(3050);
