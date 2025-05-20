const express = require("express");

const router = express.Router();

const users = [];

router.get("/", (req, res, next) => {
  console.log("Home Route");

  res.render("home", {
    pageTitle: "Home",
    path: "/",
  });
});

router.post("/users", (req, res) => {
  users.push({ name: req.body.name });

  res.redirect("/users");
});

exports.route = router;
exports.users = users;
