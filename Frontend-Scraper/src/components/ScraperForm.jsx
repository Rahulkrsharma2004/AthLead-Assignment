import React, { useState } from "react";
import axios from "axios";

function ScraperForm({ setData }) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleScrape = async () => {
    if (!url) return alert("Please enter a product URL");

    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/scrape", { url });
      setData(res.data);
    } catch (error) {
      alert("Failed to scrape product");
    }
    setLoading(false);
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <input
        type="text"
        className="border p-2 w-80 rounded-md"
        placeholder="Enter Amazon Smart TV URL..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 ml-2 rounded-md"
        onClick={handleScrape}
      >
        {loading ? "Scraping..." : "Scrape"}
      </button>
    </div>
  );
}

export default ScraperForm;
