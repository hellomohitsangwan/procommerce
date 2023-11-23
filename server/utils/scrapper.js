import * as cheerio from "cheerio"

export const scrapeAmazon = async (website, product, no_of_products) => {
    const headers = {
        "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.71 Safari/537.36",
    };

    const resp = await fetch(`https://www.${website}.in/s?k=${product}`, {
        headers,
    });
    const text = await resp.text();
    console.log(text);

    const $ = cheerio.load(text);
    const divsWithClassX = $(".s-widget-spacing-small");

    const resultArray = [];
    divsWithClassX.each((index, element) => {
        if (resultArray.length >= no_of_products) return resultArray;
        const ele = $(element).html();
        const $element = cheerio.load(ele);

        // Extract name
        const name = $element("h2 a span").text().trim();

        // Extract prices
        const priceContainer = $element(".a-price");
        const discountedPrice = priceContainer.find(".a-offscreen").text().trim();
        const originalPrice =
            priceContainer.find(".a-price-symbol + .a-price-whole").text().trim() ||
            discountedPrice;

        // Extract rating
        const rating = $element(".a-icon-star-small .a-icon-alt").text().trim();

        // Extract URL
        const url = $element("h2 a").attr("href");
        const productUrl = `https://www.amazon.in${url}`;

        // Extract total review count
        const totalReviewsContainer = $element(
            ".a-section .a-row.a-size-small span.a-size-base"
        );
        const totalReviews = totalReviewsContainer.text().trim();


        resultArray.push({
            name,
            discountedPrice,
            originalPrice,
            rating,
            productUrl,
            totalReviews,
        });
    });

    return resultArray
};

export const scrapeFlipkart = async (product, no_of_products) => {
    const headers = {
        "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.71 Safari/537.36",
    };

    const resp = await fetch(`https://www.flipkart.com/search?q=${product}.com`, {
        headers,
    });
    const text = await resp.text();
    console.log(text);

    const $ = cheerio.load(text);
    const divsWithClassX = $(".s-widget-spacing-small");

    const resultArray = [];
    divsWithClassX.each((index, element) => {
        if (resultArray.length >= no_of_products) return resultArray;
        const ele = $(element).html();
        const $element = cheerio.load(ele);

        // Extract name
        const name = $element("h2 a span").text().trim();

        // Extract prices
        const priceContainer = $element(".a-price");
        const discountedPrice = priceContainer.find(".a-offscreen").text().trim();
        const originalPrice =
            priceContainer.find(".a-price-symbol + .a-price-whole").text().trim() ||
            discountedPrice;

        // Extract rating
        const rating = $element(".a-icon-star-small .a-icon-alt").text().trim();

        // Extract URL
        const url = $element("h2 a").attr("href");
        const productUrl = `https://www.amazon.in${url}`;

        // Extract total review count
        const totalReviewsContainer = $element(
            ".a-section .a-row.a-size-small span.a-size-base"
        );
        const totalReviews = totalReviewsContainer.text().trim();


        resultArray.push({
            name,
            discountedPrice,
            originalPrice,
            rating,
            productUrl,
            totalReviews,
        });
    });

    return resultArray
};

