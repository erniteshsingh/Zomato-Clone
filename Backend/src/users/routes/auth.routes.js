const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth.middleware");
const {
  registerControllers,
  loginController,
  logoutController,
  profileController,
} = require("../controllers/auth.controller");

router.post("/register", registerControllers);
router.post("/login", loginController);
router.post("/logout", logoutController);
router.get("/profile", authMiddleware, profileController);

module.exports = router;
