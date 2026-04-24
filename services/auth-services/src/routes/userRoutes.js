const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: User Login
 *     description: Login with email & password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login success
 */
router.post("/login", (req, res) => {
  res.json({ message: "Login successful" });
});

module.exports = router;