import express from "express";
import jwt from "jsonwebtoken";
import User from "../model/usermodel.js";

const app = express.Router();

app.post("/forgot-password", async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const resetToken = jwt.sign(
      { id: user._id },
      "servora",
      { expiresIn: "10m" }
    );

    res.status(200).json({
      message: "Reset token generated",
      resetToken
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
});

export default app;