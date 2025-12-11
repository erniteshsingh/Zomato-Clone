const express = require("express");
const router = express.Router();

const adminMiddlware = require("../../admins/middlewares/admin.middleware");

const {
  createProduct,
  deleteProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
} = require("../controllers/products.controller");

const upload = require("../upload");

// create prodcut
router.post(
  "/createProduct",
  adminMiddlware,
  upload.single("image"),
  createProduct
);

// delete product
router.delete("/deleteProduct/:id", adminMiddlware, deleteProduct);

//get single product
router.get("/singleproduct/:id", adminMiddlware, getSingleProduct);

// get all products
router.get("/getAllProducts", adminMiddlware, getAllProducts);

// update product

router.put(
  "/updateproduct/:id",
  upload.single("image"),
  adminMiddlware,
  updateProduct
);

module.exports = router;
