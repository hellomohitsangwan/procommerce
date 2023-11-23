import asyncHandler from "express-async-handler";
import * as cheerio from "cheerio"

export const scrapeWeb = asyncHandler(async (req, res) => {

    const headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.71 Safari/537.36'
    };

    const resp = await fetch("https://www.amazon.in/s?k=apple", { headers });
    const text = await resp.text();
    console.log(text)
    


    const $ = cheerio.load(text);
    const divsWithClassX = $('.s-widget-spacing-small');

    // Iterate through each selected element
    const resultArray = [];
    divsWithClassX.each((index, element) => {

    const ele = $(element).html();

    const $element = cheerio.load(ele);

    // Extract name
    const name = $element('h2 a span').text().trim();

    // Extract prices
    const priceContainer = $element('.a-price');
    const discountedPrice = priceContainer.find('.a-offscreen').text().trim();
    const originalPrice = priceContainer.find('.a-price-symbol + .a-price-whole').text().trim() || discountedPrice;

    // Extract rating
    const rating = $element('.a-icon-star-small .a-icon-alt').text().trim();

    // Extract URL
    const url = $element('h2 a').attr('href');
    const productUrl = `https://www.amazon.in${url}`;

    // Extract total review count
    const totalReviewsContainer = $element('.a-section .a-row.a-size-small span.a-size-base');
    const totalReviews = totalReviewsContainer.text().trim();

    // Save the extracted data
    resultArray.push({ name, discountedPrice, originalPrice, rating, productUrl, totalReviews });

    });

    console.log(resultArray.length);
    res.json({res: resultArray})

});
