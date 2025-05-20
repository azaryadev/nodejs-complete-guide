const express = require("express");

const router = express.Router();

const usersData = require("./home");

router.get("/users", (req, res) => {
  console.log("users route");
  const users = usersData.users;

  res.render("users", { users: users, pageTitle: "users", path: "/users" });
});

module.exports = router;
