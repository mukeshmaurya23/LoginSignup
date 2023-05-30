const User = require("../Models/user");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const userSignup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(401).json({ message: "Email already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashPassword,
    });

    const createdUser = await User.create(newUser);
    //or const createdUser = await newUser.save();
    //res.json(createdUser);

    console.log(createdUser);
    res
      .status(201)
      .json({ createdUser, message: "User Register Successfully" });
  } catch (err) {
    //
    console.error("Error during signup:", err);
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(401).json({ message: "Invalid Email" });
    }
    const validatePassowrd = await bcrypt.compare(password, user.password);
    if (!validatePassowrd) {
      res.status(401).json({ message: "Invalid Password" });
    }
    const token = jwt.sign(
      {
        userId: user._id,
        token: crypto.randomBytes(32).toString("hex"),
      },
      process.env.SECRET_KEY
    );

    // Send the token as a response
    res.status(200).json({ token, user });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Error during login" });
  }
};

const userDetails = async (req, res) => {
  try {
    const data = await User.find();
    if (data) {
      res.status(200).json({ data });
    }
  } catch (err) {
    res.json({ message: "Failed to get data" });
  }
};
module.exports = {
  userSignup,
  userLogin,
  userDetails,
};
