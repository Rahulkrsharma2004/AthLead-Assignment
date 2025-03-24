import React, { useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";

function ScraperForm({ setData }) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleScrape = async () => {
    if (!url) return alert("⚠️ Please enter a valid product URL!");

    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/scrape", { url });
      // const res = await axios.post("https://athlead-assignment.onrender.com/scrape", { url });
      setData(res.data);
    } catch (error) {
      alert("❌ Failed to scrape product");
    }
    setLoading(false);
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg flex flex-col items-center w-full max-w-lg">
      <input
        type="text"
        className="border text-black p-3 w-full rounded-md focus:ring-2 focus:ring-blue-400"
        placeholder="🔗 Enter Amazon Product URL..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-6 py-3 mt-4 rounded-md flex items-center space-x-2 hover:bg-blue-700 transition duration-300"
        onClick={handleScrape}
      >
        {loading ? "⏳ Scraping..." : "🔍 Scrape"}
      </button>
    </div>
  );
}

export default ScraperForm;
