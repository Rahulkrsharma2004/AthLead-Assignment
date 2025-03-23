const puppeteer = require("puppeteer");

async function scrapeAmazonProduct(url) {
  const browser = await puppeteer.launch({
    headless: "new",  // Ensures better performance in cloud environments
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });

  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 0 });

  const productData = await page.evaluate(() => {
    const getText = (selector) =>
      document.querySelector(selector)?.innerText.trim() || "N/A";

    const getAllText = (selector) =>
      [...document.querySelectorAll(selector)]
        .map((el) => el.innerText.trim())
        .join("\n\n") || "N/A";

    const getImages = (selector) =>
      [...document.querySelectorAll(selector)].map((img) =>
        img.src.replace(/_SS[0-9]+_/, "")
      );

    return {
      productName: getText("#productTitle"),
      rating: getText(".a-icon-alt"),
      numRatings: getText("#acrCustomerReviewText"),
      sellingPrice: getText(".a-price-whole") + getText(".a-price-fraction"),
      totalDiscount: getText(".savingsPercentage"),
      bankOffers: getAllText("#promotionDetails_feature_div *"),
      aboutThisItem: getText("#feature-bullets"),
      productInfo: getText("#productDetails_techSpec_section_1"),
      productImages: getImages("#altImages img"),
      fromManufacturerImages: getImages("#aplus img"),
      aiGeneratedReviewSummary:
        getText("#cr-summarization-content") ||
        getText(".a-section.review-summarization"),
    };
  });

  await browser.close();
  return productData;
}

module.exports = { scrapeAmazonProduct };
