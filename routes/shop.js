const express = require("express");
const path = require("path");

const rootDir = require("../utils/path");
const router = express.Router();

const adminData = require("./admin");

router.get("/", (req, res, next) => {
  console.log(adminData.products);
  const products = adminData.products;

  res.render("shop", { prods: products, pageTitle: "Shop", path: "/" });
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
