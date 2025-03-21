const puppeteer = require("puppeteer");

async function scrapeAmazonProduct(url) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "load", timeout: 0 });

  const productData = await page.evaluate(() => {
    const getText = (selector) => document.querySelector(selector)?.innerText.trim() || "N/A";
    const getImages = (selector) =>
      [...document.querySelectorAll(selector)].map((img) => img.src);

    return {
      productName: getText("#productTitle"),
      rating: getText(".a-icon-alt"),
      numRatings: getText("#acrCustomerReviewText"),
      sellingPrice: getText(".a-price-whole") + getText(".a-price-fraction"),
      totalDiscount: getText(".savingsPercentage"),
      bankOffers: getText("#promotionDetails_feature_div"),
      aboutThisItem: getText("#feature-bullets"),
      productInfo: getText("#productDetails_techSpec_section_1"),
      productImages: getImages("#imgTagWrapperId img"),
      fromManufacturerImages: getImages("#aplus img"),
      aiGeneratedReviewSummary: getText("#cr-summarization-content"),
    };
  });

  await browser.close();
  return productData;
}

module.exports = { scrapeAmazonProduct };
