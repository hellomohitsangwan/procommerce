import express from "express";
const router = express.Router();
import {
    scrapeWeb
} from "../controllers/scrapeController.js";

router.route("/").post(scrapeWeb)

export default router;
