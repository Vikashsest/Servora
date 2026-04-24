import express from 'express';
import mongoose from 'mongoose';
import User from '../model/usermodel.js';
import jwt from 'jsonwebtoken';
import cookies from 'cookie-parser';
import { generateToken } from '../utils/jwt.js';

const app = express.Router();

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
    if (!email || !password) {
    return res.status(400).json({
         message: 'Email and password are required' });
  };
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
         message: 'User not found' });
    };
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(400).json({
         message: 'Invalid credentials' });
    };
    const token = generateToken(user._id);
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
    });
    res.status(200).json({
      message: 'Login successful',
      token
    });
    } catch (error) {
    res.status(500).json({
         message: 'Server error' });
  }
});

export default app;