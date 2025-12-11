const jwt = require("jsonwebtoken");
const adminModel = require("../models/admin.model");

const adminAuth = async (req, res, next) => {
  try {
    const token = req.cookies?.adminToken;

    if (!token) {
      return res
        .status(401)
        .json({ message: "No token, access denied please login" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await adminModel.findById(decoded.id);

    if (!admin) {
      return res.status(401).json({ message: "Admin not found" });
    }

    if (admin.role !== "admin") {
      return res.status(403).json({ message: "Access denied, not an admin" });
    }

    req.admin = admin;

    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Invalid or expired token" });
  }
};

module.exports = adminAuth;
