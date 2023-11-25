import asyncHandler from "express-async-handler";
import {
  scrapeAmazon,
  scrapeFlipkart,
  scrapeNykaa,
  scrapeShopclues,
  scrapeSnapdeal,
} from "../utils/scrapper.js";
import ScrapedProduct from "../models/scrapedProductModel.js";

// export const scrapeWeb = asyncHandler(async (req, res) => {

//   try {
//     const { searchTerm, filter, topN, comparisonWebsites } = req.body;

//     const websiteScrapingFunctions = {
//         amazon: scrapeAmazon,
//         flipkart: scrapeFlipkart,
//         shopclues: scrapeShopclues,
//         snapdeal: scrapeSnapdeal,
//         nykaa: scrapeNykaa,
//     };

//     // Fetch data from scraping functions for selected websites
//     const websitePromises = comparisonWebsites.map(async (website) => {
//         if (websiteScrapingFunctions[website]) {
//             const websiteData = await websiteScrapingFunctions[website](searchTerm, topN);
//             // Add a 'website' field to each item in the data
//             return websiteData.map(item => ({ ...item, website }));
//         }
//         return [];
//     });

//     // Wait for all promises to resolve
//     const websiteDataArrays = await Promise.all(websitePromises);

//     // Combine data from selected websites
//     const allData = websiteDataArrays.flat();

//     // Apply filtering if specified
//     let filteredData = allData;
//     if (filter === 'highestPrice') {
//         filteredData = allData.sort((a, b) => b.discountedPrice - a.discountedPrice);
//     } else if (filter === 'lowestPrice') {
//         filteredData = allData.sort((a, b) => a.discountedPrice - b.discountedPrice);
//     } else if (filter === 'highestRating') {
//         filteredData = allData.sort((a, b) => b.rating - a.rating);
//     }

//     // Take the top N results
//     const topResults = filteredData.slice(0, topN);

//     // Prepare response array
//     const responseArray = topResults.map((item) => ({
//         url: item.productUrl,
//         title: item.name,
//         reviewCount: item.totalReviews,
//         rating: item.rating,
//         currentPrice: item.discountedPrice,
//         website: item.website, // Add the 'website' field
//         // Add more fields as needed
//     }));

//     res.json(responseArray);
// } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
// }
// });



// export const scrapeWeb = asyncHandler(async (req, res) => {
//   try {
//       const { searchTerm, filter, topN, comparisonWebsites } = req.body;

//       const websiteScrapingFunctions = {
//           amazon: scrapeAmazon,
//           flipkart: scrapeFlipkart,
//           shopclues: scrapeShopclues,
//           snapdeal: scrapeSnapdeal,
//           nykaa: scrapeNykaa,
//       };

//       const websitePromises = comparisonWebsites.map(async (website) => {
//           if (websiteScrapingFunctions[website]) {
//               const websiteData = await websiteScrapingFunctions[website](searchTerm, topN);

//               // Filter out items without a name
//               const filteredData = websiteData.filter(item => item.name);

//               return filteredData.map(item => ({ ...item, website }));
//           }
//           return [];
//       });

//       // Wait for all promises to resolve
//       const websiteDataArrays = await Promise.all(websitePromises);

//       const allData = websiteDataArrays.flat();

//       // Apply filtering if specified
//       let filteredData = allData;
//       if (filter === 'highestPrice') {
//           filteredData = allData.sort((a, b) => b.discountedPrice - a.discountedPrice);
//       } else if (filter === 'lowestPrice') {
//           filteredData = allData.sort((a, b) => a.discountedPrice - b.discountedPrice);
//       } else if (filter === 'highestRating') {
//           filteredData = allData.sort((a, b) => b.rating - a.rating);
//       }

//       // Take the top N results
//       const topResults = filteredData.slice(0, topN);

     
//       const responseArray = topResults.map((item) => ({
//           url: item.productUrl,
//           title: item.name,
//           reviewCount: item.totalReviews,
//           rating: item.rating,
//           currentPrice: item.discountedPrice,
//           website: item.website, 
          
//       }));

//       res.json(responseArray);
//   } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal Server Error' });
//   }
// });









export const scrapeWeb = asyncHandler(async (req, res) => {
  try {
      const { searchTerm, filter, topN, comparisonWebsites } = req.body;

      const websiteScrapingFunctions = {
          amazon: scrapeAmazon,
          flipkart: scrapeFlipkart,
          shopclues: scrapeShopclues,
          snapdeal: scrapeSnapdeal,
          nykaa: scrapeNykaa,
      };

      // Fetch data from scraping functions for selected websites
      const websitePromises = comparisonWebsites.map(async (website) => {
          if (websiteScrapingFunctions[website]) {
              const websiteData = await websiteScrapingFunctions[website](searchTerm, topN);

              // Filter out items without a name
              const filteredData = websiteData.filter(item => item.name);

              // Save data to MongoDB
              await ScrapedProduct.insertMany(filteredData);

              // Add a 'website' field to each item in the data
              return filteredData.map(item => ({ ...item, website }));
          }
          return [];
      });

      // Wait for all promises to resolve
      const websiteDataArrays = await Promise.all(websitePromises);

      // Combine data from selected websites
      const allData = websiteDataArrays.flat();

      // Apply filtering if specified
      let filteredData = allData;
      if (filter === 'highestPrice') {
          filteredData = allData.sort((a, b) => b.discountedPrice - a.discountedPrice);
      } else if (filter === 'lowestPrice') {
          filteredData = allData.sort((a, b) => a.discountedPrice - b.discountedPrice);
      } else if (filter === 'highestRating') {
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
          website: item.website, // Add the 'website' field
          // Add more fields as needed
      }));

      res.json(responseArray);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});