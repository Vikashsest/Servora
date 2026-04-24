import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import User from '../model/usermodel.js';
import  authMiddleware from '../middleware/auth.middleware.js';

const app = express.Router();

app.get('/current-user', authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select('-password');
        if (!user) {
            return res.status(404).json({
                 message: 'User not found' });
        }
        res.status(200).json({
            message: 'Current user fetched',
            user
        });
    } catch (error) {
        res.status(500).json({
             message: 'Server error' });
    }
});

export default app;