import asyncHandler from "express-async-handler";
import {
  scrapeAmazon,
  scrapeFlipkart,
  scrapeNykaa,
  scrapeShopclues,
  scrapeSnapdeal,
} from "../utils/scrapper.js";

export const scrapeWeb = asyncHandler(async (req, res) => {
  let product = "iphone";
  let n = 8;

  const flipkartRes = await scrapeSnapdeal(product, n);

  // console.log(awazonRes.length);
  res.json({ res: flipkartRes });
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
  name: "Men Blue Regular Fit Midrise Jeans",
  discountedPrice: "₹2,599₹5,199",
  originalPrice: "2,599",
  rating: "3.5 out of 5 stars",
  productUrl:
    "https://www.amazon.in/sspa/click?ie=UTF8&spc=MTo3MDUyOTE4OTE1OTgyNjkyOjE3MDA4NTY5NjU6c3BfYXRmOjIwMTMyMjU1ODMxODk4OjowOjo&url=%2FEVERBLUE-Blue-Regular-Jeans-Size%2Fdp%2FB0BMM8L2GS%2Fref%3Dsr_1_3_sspa%3Fkeywords%3Djeans%26qid%3D1700856965%26sr%3D8-3-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
  totalReviews: "2",
};

const flpkt = {
  name: "APPLE iPhone 14 Plus (Purple, 128 GB)",
  discountedPrice: "₹69,999",
  originalPrice: "₹79,900",
  rating: "4.6",
  totalReviews: "52,021 Ratings & 3,062 Reviews",
  discount: "12% off",
};

const shopclues = {
  name: "(Refurbished) Apple Iphone 7 2 Gb RAM 32Gb ROM Single S",
  imageSrc:
    "https://cdn.shopclues.com/images1/thumbnails/117328/200/200/153427531-117328593-1691669515.jpg",
  productUrl:
    "//www.shopclues.com/refurbished-apple-iphone-7-2-gb-ram-32gb-rom-single-sim-smartphone-superb-condition-like-newrefur-210-153427531.html",
  discountedPrice: "₹35,000",
  discount: "60% Off",
  refurbishedBadge: "Refurbished",
};

const snapdeal = {
    "name": "NBOX Extendable Bluetooth Selfie Stick with Tripod Stand,Compatible for iPhone Samsung Mi Realme Oneplus Vivo Oppo Compatible for Gopro",
    "imageSrc": "https://n1.sdlcdn.com/imgs/k/p/a/230X258_sharpened/NBOX-Bluetooth-Tripod-Black-SDL883578888-1-a7c42.png",
    "originalPrice": "Rs. 1,999",
    "discountedPrice": "Rs.  549",
    "discount": "73% Off",
    "rating": "4.5",
    "numRatings": "(58)"
}

const nykaa = {
  name: "Maybelline New York Color Sensational Creamy Matte Lipstick",
  productUrl:
    "https://www.nykaa.com/maybelline-new-york-color-sensational-creamy-matte-lipsticks/p/353926?productId=353926&pps=1",
  originalPrice: "₹329",
  discountedPrice: "₹224",
  discount: "32% Off",
  totalReviews: "110699",
  rating: 4,
};
