// * REQUIRES
// Packages
require("dotenv").config();
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");

// Files
const connectDb = require("./server/config/db");

// * VARIABLES
const app = express();
const port = process.env.PORT || 8000;

// * MIDDLEWARES

//  For Data Handling
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//  For Static files
app.use(express.static(path.join(__dirname, "public")));

// Templating engine
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// DB config
connectDb();

// *  SERVER ROUTES
app.use("/", require("./server/routes/main"));

app.listen(port, () => {
  console.log(`Server running at ${port} `);
});
