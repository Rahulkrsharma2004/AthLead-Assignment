import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import ScraperForm from "./components/ScraperForm";
import Results from "./components/Results";

function App() {
  const [data, setData] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-4xl font-extrabold text-yellow-400 mb-6 flex items-center gap-2">
        <FaShoppingCart className="text-yellow-300" /> Amazon Web Scraper
      </h1>
      <ScraperForm setData={setData} />
      {data && <Results data={data} />}
    </div>
  );
}

export default App;
