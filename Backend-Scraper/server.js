require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { scrapeAmazonProduct } = require("./scrape");
const { configDotenv } = require("dotenv");

const app = express();

// app.use(cors({
//   origin:[
//     "http://localhost:5173",
//     "https://amazon-web-scraper-psi.vercel.app",
//     // "https://web-scrape-backend.vercel.app"
//     "https://athlead-assignment.onrender.com"
//   ]
// }));

app.use(cors({
  origin: "*"
}));

app.use(express.json());

app.post("/scrape", async (req, res) => {
  const { url } = req.body;
  console.log("product url",url);
  if (!url) return res.status(400).json({ error: "Product URL is required" });

  try {
    console.log("product url",url);
    const productData = await scrapeAmazonProduct(url);
    res.json(productData);
  } catch (error) {
    res.status(500).json({ error: "Failed to scrape data" });
  }
});


app.use('/',(req,res)=>{
  res.status(200).json({
    message: "Welcome to the Backend-Scraper API running.",
  });
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

