import asyncHandler from "express-async-handler";
import { scrapeAmazon, scrapeFlipkart, scrapeShopclues, scrapeSnapdeal } from "../utils/scrapper.js";

export const scrapeWeb = asyncHandler(async (req, res) => {
    let product = "jeans"
    let n = 8;

    const flipkartRes = await scrapeSnapdeal(product, n);

    // console.log(awazonRes.length);
    res.json({res: flipkartRes})

});


