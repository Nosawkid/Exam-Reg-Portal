const express = require("express");
const router = express.Router();

const mainLayout = "../views/layouts/homePage";

router.get("/", (req, res) => {
  res.locals.title = "KEPT-Home";
  res.locals.desc = "Homepage for registration portal";
  res.render("index", {
    layout: mainLayout,
  });
});
router.get("/about-kswz", (req, res) => {
  res.locals.title = "KEPT-About";
  res.locals.desc = "About Page of KSWZ";
  res.render("about", {
    layout: mainLayout,
  });
});

module.exports = router;
