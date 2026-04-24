import express from "express";
import mongoose from "mongoose";
import User from "./model/usermodel.js";
import router from "./routes/register.js";
import loginRoute from "./routes/login.js";
import currentUserRoute from "./routes/current-user.js";
import logoutRoute from "./routes/logout.js";
import forgotpasswordRoute from "./routes/forgot-password.js";
import { generateToken } from "./utils/jwt.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.js";

const app = express();

app.use(express.json());

app.use("/api", router);
app.use("/api", loginRoute);
app.use("/api",currentUserRoute);
app.use("/api", logoutRoute);
app.use("/api", forgotpasswordRoute);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;
