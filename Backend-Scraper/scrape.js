const puppeteer = require("puppeteer");

async function scrapeAmazonProduct(url) {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || puppeteer.executablePath(),
  });

  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 0 });

  // Wait for bank offers section to appear
  await page.waitForSelector("#promotionDetails_feature_div", { timeout: 5000 }).catch(() => {});

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
      bankOffers: getAllText("#promotionDetails_feature_div"), // ✅ FIXED!
      aboutThisItem: getText("#feature-bullets"),
      productInfo: getText("#productDetails_techSpec_section_1"),
      productImages: getImages("#altImages img"),
      fromManufacturerImages: getImages("#aplus img"),
      aiGeneratedReviewSummary:
        getText("#cr-summarization-content") ||
        getText(".review-summarization") ||
        getText(".a-section.review-summarization"), // ✅ CHECK MULTIPLE SELECTORS!
    };
  });

  await browser.close();
  return productData;
}

module.exports = { scrapeAmazonProduct };
