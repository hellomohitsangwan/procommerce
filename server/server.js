import path from "path";
import express from "express";
import scrapeRoutes from "./routes/scrapeRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import productRoutes from "./routes/productRoutes.js";


import cloudinary from "cloudinary";
import morgan from "morgan";
import fileUpload from "express-fileupload";

const app = express();
app.use(express.json());

const __dirname = path.resolve();

app.use("/api/scrape", scrapeRoutes)
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));


const PORT = 8000;
app.listen(PORT, () => {
  console.log(`server started in production mode on port 8000`);
});

