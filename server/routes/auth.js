const express = require("express");
const router = express.Router();

const authLayout = "../views/layouts/authPages";

router.get("/register", async (req, res) => {
  try {
    res.render("authPages/register", {
      layout: authLayout,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
