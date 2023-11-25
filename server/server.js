import path from "path";
import express from "express";
import scrapeRoutes from "./routes/scrapeRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import productRoutes from "./routes/productRoutes.js";

import cloudinary from "cloudinary";
import morgan from "morgan";
import fileUpload from "express-fileupload";
import connectDB from "./config/db.js";




const app = express();
app.use(corsMiddleware);
app.use(express.json());
app.use(morgan('dev'))
app.use(fileUpload());
cloudinary.config({
  cloud_name: "djfh8ecu4",
  api_key: "329259279517943",
  api_secret: "SZ9Bp_Tln70t0lCJGv54PrX-lP0",
});
connectDB();

const __dirname = path.resolve();

connectDB();
app.use("/api/scrape", scrapeRoutes)
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`server started in production mode on port 8000`);
});

