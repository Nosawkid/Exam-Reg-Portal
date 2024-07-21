const express = require("express");
const router = express.Router();

const mainLayout = "../views/layouts/homePage";

router.get("/", (req, res) => {
  res.locals.title = "KEPT-Home";
  res.locals.desc = "Homepage for registration portal";
  res.render("mainPages/index", {
    layout: mainLayout,
  });
});

router.get("/about-kswz", (req, res) => {
  res.locals.title = "KEPT-About";
  res.locals.desc = "About Page of KSWZ";
  res.render("mainPages/about", {
    layout: mainLayout,
  });
});

router.get("/key-dates", (req, res) => {
  res.locals.title = "KEPT-Key Dates";
  res.locals.desc = "Important Dated for KEPT Examination";
  res.render("mainPages/key-dates", {
    layout: mainLayout,
  });
});

router.get("/test-structure", (req, res) => {
  res.locals.title = "KEPT-Test Structure";
  res.locals.desc = "Detailed test structure for KEPT exam";
  res.render("mainPages/test-structure", {
    layout: mainLayout,
  });
});

router.get("/eligibility", (req, res) => {
  res.locals.title = "KEPT-Eligibility Criteria";
  res.locals.desc = "Eligibility criteria for KEPT exam";
  res.render("mainPages/eligibility", {
    layout: mainLayout,
  });
});
router.get("/contact", (req, res) => {
  res.locals.title = "KEPT-Contact";
  res.locals.desc = "Contact Authorities";
  res.render("mainPages/contact", {
    layout: mainLayout,
  });
});

module.exports = router;
