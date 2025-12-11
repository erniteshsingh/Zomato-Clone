const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected DB");
  } catch (error) {
    console.log("Error while connecting to the database", error);
  }
}

module.exports = connectDB;
