import express from 'express';
import mongoose from 'mongoose';
import User from '../model/usermodel.js';
import jwt from 'jsonwebtoken';
import { generateToken } from '../utils/jwt.js';

const app = express.Router();

app.post('/register', async (req, res) => {
  
  const { name, email, password } = req.body;
//   console.log(req.body);
  if (!name || !email || !password) {
    return res.status(400).json({
         message: 'All fields are required' });
  };
  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
         message: 'User already exists' });
    };
    const user = await User.create({
      name,
      email,
      password
    });
    const token = generateToken(user._id);
    res.status(201).json({
      message: 'User registered successfully',
      token
    });
  } catch (error) {
    console.log(error.message);
    
    res.status(500).json({
         message: 'Server error' });
  }
});

export default app;