import e from 'express';
import jwt from 'jsonwebtoken';

export const generateToken = (id) => {
  return jwt.sign({ id }, "servora", {
   expiresIn: '1h'
    });
};
export const verifyToken = (token) => {
  try {
    return jwt.verify(token, "servora");
    } catch (error) {
      throw new Error('Invalid token');
    }
};