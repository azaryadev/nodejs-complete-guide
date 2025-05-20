const express = require("express");
const homeRoute = require("./routes/home");
const usersRoute = require("./routes/users");
const bodyParser = require("body-parser");

const path = require("path");
const app = express();

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(homeRoute.route);
app.use(usersRoute);

app.use((req, res) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(3080);
