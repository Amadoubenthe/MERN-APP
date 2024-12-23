import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/products", productRoutes);

app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.listen(5000, () => {
  connectDB();
  console.log("Server is running on http://localhost:5000");
});
