import asyncHandler from "express-async-handler";
import {
  scrapeAmazon,
  scrapeFlipkart,
  scrapeNykaa,
  scrapeShopclues,
  scrapeSnapdeal,
} from "../utils/scrapper.js";

export const scrapeWeb = asyncHandler(async (req, res) => {
  //   let product = "iphone";
  //   let n = 8;

  //   const flipkartRes = await scrapeFlipkart(product, n);
  //   const amazonRes = await scrapeAmazon(product, n);
  //   const nykaaRes = await scrapeNykaa(product, n);
  //   const ShopcluestRes = await scrapeShopclues(product, n);
  //   const snapdealRes = await scrapeSnapdeal(product, n);

  //   // console.log(awazonRes.length);
  //   res.json({ res: flipkartRes });

  try {
    const { searchTerm, filter, topN, comparisonWebsites } = req.body;

    // Fetch data from scraping functions for each website
    const amazonData = await scrapeAmazon(searchTerm, topN);
    const flipkartData = await scrapeFlipkart(searchTerm, topN);
    const shopcluesData = await scrapeShopclues(searchTerm, topN);
    const snapdealData = await scrapeSnapdeal(searchTerm, topN);
    const nykaaData = await scrapeNykaa(searchTerm, topN);

    // Combine data from all websites
    const allData = [
      ...amazonData,
      ...flipkartData,
      ...shopcluesData,
      ...snapdealData,
      ...nykaaData,
    ];

    // Apply filtering if specified
    let filteredData = allData;
    if (filter === "highestPrice") {
      filteredData = allData.sort(
        (a, b) => b.discountedPrice - a.discountedPrice
      );
    } else if (filter === "lowestPrice") {
      filteredData = allData.sort(
        (a, b) => a.discountedPrice - b.discountedPrice
      );
    } else if (filter === "highestRating") {
      filteredData = allData.sort((a, b) => b.rating - a.rating);
    }

    // Take the top N results
    const topResults = filteredData.slice(0, topN);

    // Prepare response array
    const responseArray = topResults.map((item) => ({
      url: item.productUrl,
      title: item.name,
      reviewCount: item.totalReviews,
      rating: item.rating,
      currentPrice: item.discountedPrice,
      // Add more fields as needed
    }));

    res.json(responseArray);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// {
//     name,
//     discountedPrice,
//     originalPrice,
//     rating,
//     productUrl,
//     totalReviews,
// }

const Amzon = {
  name: "Apple iPhone 13 (128GB) - Starlight",
  discountedPrice: 52499,
  originalPrice: 52499,
  rating: 4.5,
  productUrl:
    "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo1MTQ0ODg4MTE1MzQwNjkyOjE3MDA4NjE0MTE6c3BfYXRmOjIwMDMwOTI2MTUxMDk4OjowOjo&url=%2FApple-iPhone-13-128GB-Starlight%2Fdp%2FB09G9D8KRQ%2Fref%3Dsr_1_1_sspa%3Fkeywords%3Diphone%26qid%3D1700861411%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
  totalReviews: 20636,
  discount: 0,
};

const flpkt = {
  name: "APPLE iPhone 14 (Blue, 128 GB)",
  discountedPrice: 60999,
  originalPrice: 69900,
  rating: 4.6,
  totalReviews: 2358949062,
  discount: 12,
};

const shopclues = {
  name: "(Refurbished) Apple Iphone 7 2 Gb RAM 32Gb ROM Single S",
  imageSrc:
    "https://cdn.shopclues.com/images1/thumbnails/117328/200/200/153427531-117328593-1691669515.jpg",
  productUrl:
    "//www.shopclues.com/refurbished-apple-iphone-7-2-gb-ram-32gb-rom-single-sim-smartphone-superb-condition-like-newrefur-210-153427531.html",
  discountedPrice: 35000,
  discount: 60,
  refurbishedBadge: "Refurbished",
};

const snapdeal = {
  name: "NBOX - Black Silicon Plain Cases Compatible For Apple iPhone 11 ( Pack of 1 )",
  imageSrc:
    "https://n4.sdlcdn.com/imgs/k/m/n/230X258_sharpened/NBOX-Black-Silicon-Plain-Cases-SDL540321070-1-84875.jpg",
  originalPrice: 1299,
  discountedPrice: 399,
  discount: 69,
  rating: 4,
  numRatings: 6,
};

const nykaa = {
  name: "Maybelline New York Color Sensational Creamy Matte Lipstick",
  productUrl:
    "https://www.nykaa.com/maybelline-new-york-color-sensational-creamy-matte-lipsticks/p/353926?productId=353926&pps=1",
  originalPrice: 329,
  discountedPrice: 224,
  discount: 32,
  totalReviews: 110699,
  rating: 4,
};
