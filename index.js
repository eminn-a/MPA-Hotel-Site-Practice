const express = require("express");
const hbs = require("express-handlebars").create({
  extname: ".hbs",
});
const homeController = require("./controllers/homeController");

const app = express();

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

app.use(express.urlencoded({ extended: true }));
app.use("/", express.static("static"));

app.use(homeController);

app.listen(3000, () => console.log("Server is working on port 3000"));
