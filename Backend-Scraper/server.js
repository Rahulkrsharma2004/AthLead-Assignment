const express = require("express");
const cors = require("cors");
const { scrapeAmazonProduct } = require("./scrape");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/scrape", async (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: "Product URL is required" });

  try {
    const productData = await scrapeAmazonProduct(url);
    res.json(productData);
  } catch (error) {
    res.status(500).json({ error: "Failed to scrape data" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
