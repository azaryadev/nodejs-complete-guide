const express = require("express");
const path = require("path");
const homeRoute = require("./routes/home");
const usersRoute = require("./routes/users");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(homeRoute);
app.use(usersRoute);

app.listen(3060);
