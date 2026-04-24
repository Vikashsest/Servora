import express from 'express';
import mongoose from 'mongoose';
import User from '../model/usermodel.js';
import jwt from 'jsonwebtoken';
import { generateToken } from '../utils/jwt.js';

const app = express.Router();

app.post('/logout', async (req, res) => {
    try {
        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
        });
        res.status(200).json({
            message: 'Logout successful'
        });
    } catch (error) {
        res.status(500).json({
             message: 'Server error' });
    }
});

export default app;