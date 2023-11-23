import asyncHandler from "express-async-handler";
import * as cheerio from "cheerio"
import { scrapeAmazon, scrapeFlipkart } from "../utils/scrapper.js";

export const scrapeWeb = asyncHandler(async (req, res) => {
    let product = "apple"
    let n = 8;

    const flipkartRes = await scrapeFlipkart(product, n);

    // console.log(awazonRes.length);
    res.json({res: flipkartRes})

});


