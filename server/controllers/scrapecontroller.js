import asyncHandler from "express-async-handler";
import { scrapeAmazon, scrapeFlipkart, scrapeNykaa, scrapeShopclues, scrapeSnapdeal } from "../utils/scrapper.js";

export const scrapeWeb = asyncHandler(async (req, res) => {
    let product = "jeans"
    let n = 8;

    const flipkartRes = await scrapeNykaa(product, n);

    // console.log(awazonRes.length);
    res.json({res: flipkartRes})

});


