const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://127.0.0.1:27017/SERP");
    console.log("DB Connection Established " + conn.connection.host);
  } catch (error) {
    console.log("DB Connection Error ");
    console.log(error.message);
  }
};

module.exports = connectDB;
