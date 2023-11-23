import express from "express";
const router = express.Router();
import {
    scrapeWeb
} from "../controllers/scrapeController.js";

router.route("/").get(scrapeWeb)

export default router;
