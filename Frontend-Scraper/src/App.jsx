import React, { useState } from "react";
import ScraperForm from "./components/ScraperForm";
import Results from "./components/Results";

function App() {
  const [data, setData] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Amazon Web Scraper</h1>
      <ScraperForm setData={setData} />
      {data && <Results data={data} />}
    </div>
  );
}

export default App;
