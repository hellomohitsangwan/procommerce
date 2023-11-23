import path from "path";
import express from "express";
import scrapeRoutes from "./routes/scrapeRoutes.js";


const app = express();
app.use(express.json());

app.use("/api/scrape", scrapeRoutes)


const PORT = 8000;
app.listen(PORT, () => {
  console.log(`server started in production mode on port 8000`);
});
