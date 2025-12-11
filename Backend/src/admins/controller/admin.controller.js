const Admin = require("../models/admin.model");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.registerAdmin = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check existing admin
    const alreadyAdmin = await Admin.findOne({ email });
    if (alreadyAdmin) {
      return res
        .status(400)
        .json({ message: "Admin already exists with this email" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create admin
    const adminUser = await Admin.create({
      username,
      email,
      password: hashedPassword,
      role: "admin",
    });

    res.status(201).json({
      message: "Admin created successfully",
      admin: {
        id: adminUser._id,
        username: adminUser.username,
        email: adminUser.email,
        role: adminUser.role,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log(email, password);

    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ message: "Invalid Email" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Password" });
    }

    const token = jwt.sign(
      {
        id: admin._id,
        role: admin.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("adminToken", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    });

    res.json({
      message: "Admin login successful",
      token,
      admin: {
        id: admin._id,
        username: admin.username,
        email: admin.email,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.adminProfile = async (req, res) => {
  try {
    const admin = req.admin;

    console.log("adminuser inside Controller:", admin);

    res.status(200).json({
      message: "User profile fetched",
      admin,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.logoutAdmin = async (req, res) => {
  try {
    res.clearCookie("adminToken", {
      httpOnly: true,
      secure: false, // production me true
      sameSite: "strict",
    });

    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
