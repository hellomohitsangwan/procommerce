import * as cheerio from "cheerio";

export const scrapeAmazon = async (product, no_of_products) => {
    const headers = {
        "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.71 Safari/537.36",
    };

    const resp = await fetch(`https://www.amazon.in/s?k=${product}`, {
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

    return resultArray;
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

    const $ = cheerio.load(text);
    const divsWithClassX = $("._13oc-S");

    const resultArray = [];
    divsWithClassX.each((index, element) => {
        if (resultArray.length >= no_of_products) return;
        const title = $(element).find("._4rR01T").text().trim();

        const rating = $(element).find("._1lRcqv").text().trim();

        const numRatings = $(element).find("span._2_R_DZ").text().trim();

        const features = [];
        $(element)
            .find("div.fMghEO ul._1xgFaf li")
            .each((_, featureElement) => {
                features.push($(featureElement).text().trim());
            });
        const discountedPrice = $(element).find("div._30jeq3").text().trim();
        const originalPrice = $(element).find("div._3I9_wc").text().trim();
        const discount = $(element).find("div._3Ay6Sb span").text().trim();

        resultArray.push({
            title,
            rating,
            numRatings,
            features,
            discountedPrice,
            originalPrice,
            discount,
        });
    });

    return resultArray;
};

export const scrapeShopclues = async (product, no_of_products) => {
    const headers = {
        "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.71 Safari/537.36",
    };

    const resp = await fetch(`https://www.shopclues.com/search?q=iphone`, {
        headers,
    });
    const text = await resp.text();

    const $ = cheerio.load(text);
    const productBlocks = $(".column.col3.search_blocks");

    const resultArray = [];
    productBlocks.each((index, element) => {
        if (resultArray.length >= no_of_products) return;
        const title = $(element).find("h2").text().trim();
        const imageSrc = $(element).find("div.img_section img").attr("src");
        const productUrl = $(element).find("a").attr("href");
        const price = $(element).find("div.p_price").text().trim();
        const originalPrice = $(element).find("span.old_prices span").text().trim();
        const discount = $(element).find("span.prd_discount").text().trim();
        const refurbishedBadge = $(element).find("div.refurbished_i").text().trim();


        resultArray.push({
            title,
            imageSrc,
            productUrl,
            price,
            originalPrice,
            discount,
            refurbishedBadge
        });
    });

    return resultArray;
};
