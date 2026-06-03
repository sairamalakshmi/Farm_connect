const express = require("express");
const bcrypt = require("bcrypt");
const pool = require("../config/db");

const router = express.Router();

// Register User
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, phone, role } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.query(
      `INSERT INTO users(name,email,password,phone,role)
       VALUES($1,$2,$3,$4,$5)`,
      [name, email, hashedPassword, phone, role]
    );

    res.json({ message: "User Registered" });

  } catch (err) {
    console.log(err);
  }
});

// Login User
const jwt = require("jsonwebtoken");

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (result.rows.length === 0) {
      return res.status(400).json({
        message: "User not found"
      });
    }

    const user = result.rows[0];

    const validPassword = await bcrypt.compare(
      password,
      user.password
    );

    if (!validPassword) {
      return res.status(400).json({
        message: "Invalid Password"
      });
    }

    res.json({
      message: "Login Successful",
      user: {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role
  }
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err.message
    });
  }
});

// Update User Profile
router.put("/update/:id", async (req, res) => {
  console.log("BODY:", req.body);
  try {
    const { id } = req.params;

    const {
      name,
      email,
      phone
    } = req.body || {};

    const result = await pool.query(
      `UPDATE users
       SET name = $1,
           email = $2,
           phone = $3
       WHERE id = $4
       RETURNING *`,
      [name, email, phone, id]
    );

    res.json({
      message: "Profile Updated Successfully",
      user: result.rows[0]
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      error: err.message
    });
  }
});



module.exports = router;