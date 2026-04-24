import swaggerJsdoc from "swagger-jsdoc";
import path from "path";
import { fileURLToPath } from "url";

// 👇 __dirname fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Auth API",
      version: "1.0.0",
      description: "Authentication APIs",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: [path.join(__dirname, "../routes/*.js")], // ✅ now works
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;