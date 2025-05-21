const products = [];

exports.getAddProduct = (req, res, next) => {
  console.log("add product path middleware");
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
  console.log(req.body);
  products.push({ title: req.body.title });

  res.redirect("/");
};

exports.getProducts = (req, res, next) => {

  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
  });
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
};
