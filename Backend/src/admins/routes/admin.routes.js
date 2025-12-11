const express = require("express");
const router = express.Router();
const adminMiddleware = require("../middlewares/admin.middleware");

const {
  registerAdmin,
  loginAdmin,
  adminProfile,
  logoutAdmin,
} = require("../controller/admin.controller");

router.post("/registerAdmin", registerAdmin);
router.post("/loginAdmin", loginAdmin);
router.post("/adminLogout", adminMiddleware, logoutAdmin);
router.get("/adminProfile", adminMiddleware, adminProfile);


module.exports = router;
