import User from "../model/usermodel.js";
import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  try {
    let token;
    if (req.cookies?.token) {
      token = req.cookies.token;
    }
    else if (req.headers.authorization?.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({
        message: "Not authorized, no token",
      });
    }
    const decoded = jwt.verify(token, "servora");
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({
        message: "User not found",
      });
    }

    req.user = user;

    next();

  } catch (error) {
    return res.status(401).json({
      message: "Not authorized, token failed",
    });
  }
};

export default authMiddleware;