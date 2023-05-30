const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const url = process.env.MONGO_URI;
    const con = await mongoose.connect(url);
    console.log(`MongoDB connected:${con.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
module.exports = connectDB;
