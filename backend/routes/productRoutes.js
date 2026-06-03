const express = require("express");
const pool = require("../config/db");

const router = express.Router();

// Add Product
router.post("/add", async (req, res) => {
  try {
    const {
      product_name,
      category,
      price,
      quantity,
      farmer_id
    } = req.body;

    await pool.query(
      `INSERT INTO products
      (product_name, category, price, quantity, farmer_id)
      VALUES($1,$2,$3,$4,$5)`,
      [product_name, category, price, quantity, farmer_id]
    );

    res.json({
      message: "Product Added Successfully"
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err.message
    });
  }
});

// Get All Products
router.get("/", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
      p.*,
      u.name AS farmer_name
      FROM products p
      JOIN users u
      ON p.farmer_id = u.id
    `);

    res.json(result.rows);

  } catch (err) {
    console.log(err);
  }
});

//
router.get("/farmer/:farmerId", async (req, res) => {
  try {
    const { farmerId } = req.params;

    const result = await pool.query(
      "SELECT * FROM products WHERE farmer_id = $1",
      [farmerId]
    );

    res.json(result.rows);
  } catch (err) {
    console.log(err);
  }
});

// Get Product by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "SELECT * FROM products WHERE id = $1",
      [id]
    );

    res.json(result.rows[0]);

  } catch (err) {
    console.log(err);
  }
});

//searchh
router.get("/search/:name", async (req, res) => {
  try {
    const { name } = req.params;

    const result = await pool.query(
      `SELECT * FROM products
       WHERE product_name ILIKE $1`,
      [`%${name}%`]
    );

    res.json(result.rows);

  } catch (err) {
    console.log(err);
  }
});

//Update Product
router.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { product_name, category, price, quantity } = req.body;

    await pool.query(
      `UPDATE products
       SET product_name=$1,
           category=$2,
           price=$3,
           quantity=$4
       WHERE id=$5`,
      [product_name, category, price, quantity, id]
    );

    res.json({
      message: "Product Updated Successfully"
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err.message
    });
  }
});

// Delete Product
router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query(
      "DELETE FROM products WHERE id = $1",
      [id]
    );

    res.json({
      message: "Product Deleted Successfully"
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err.message
    });
  }
});

module.exports = router;