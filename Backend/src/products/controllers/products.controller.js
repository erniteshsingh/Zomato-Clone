const Product = require("../models/products.model");

//Create Product
const createProduct = async (req, res) => {
  try {
    const { name, price, description, category, brand, rating } = req.body;

    const imageUrl = req.file
      ? `http://localhost:5000/uploads/${req.file.filename}`
      : null;

    const product = await Product.create({
      name,
      price,
      description,
      category,
      brand,
      rating,
      image: imageUrl,
    });

    res.status(201).json({
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Product

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.json({
      message: "Product deleted successfully",
      deletedProduct,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// get All Products

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// get single product
const getSingleProduct = async (req, res) => {
  try {
    const productId = req.params.id; // URL se ID nikaali
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Invalid Product ID",
    });
  }
};

// To update the product
const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const { name, price, description, category, brand, rating } = req.body;

    // If new image upload hua hai toh URL generate karo
    const imageUrl = req.file
      ? `http://localhost:5000/uploads/${req.file.filename}`
      : null;

    // Prepare updated data
    const updatedData = {
      name,
      price,
      description,
      category,
      brand,
      rating,
    };

    // If new image hai toh hi update karo
    if (imageUrl) {
      updatedData.image = imageUrl;
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      updatedData,
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createProduct,
  deleteProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
};
