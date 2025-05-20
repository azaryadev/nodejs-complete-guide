const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const { engine } = require("express-handlebars");
const app = express();

app.engine("handlebars", engine());
// app.set("view engine", "pug");
app.set("view engine", "handlebars");
app.set("views", "views");

// app.use("/", (req, res, next) => {
//   console.log("This always runs!");
//   next(); // allows the rwuest to continue to the next middleware in line
// });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.route);
app.use(shopRoutes);

// error page
app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(8000);
