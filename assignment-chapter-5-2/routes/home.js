const express = require("express");

const path = require("path");

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("ini home");
  res.sendFile(path.join(__dirname, "../", "views", "home.html"));
});

module.exports = router;
