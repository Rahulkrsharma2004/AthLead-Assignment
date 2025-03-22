import React from "react";

function Results({ data }) {
  return (
    <div className="bg-white p-6 shadow-lg rounded-md mt-6 w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800">{data.productName}</h2>

      <p className="text-gray-600 mt-2">
        <span className="font-semibold">Rating:</span> {data.rating} ({data.numRatings})
      </p>

      <p className="text-green-500 text-lg font-bold mt-2">
        Price: ₹{data.sellingPrice}
      </p>
      <p className="text-red-500 font-semibold">Discount: {data.totalDiscount}</p>

      {data.bankOffers && (
        <div className="mt-4 p-3 bg-blue-100 border border-blue-300 rounded-md">
          <h3 className="font-bold text-blue-700">Bank Offers:</h3>
          <p className="text-gray-700">{data.bankOffers}</p>
        </div>
      )}

      <div className="mt-4">
        <h3 className="font-bold text-lg">About This Item:</h3>
        <p className="text-gray-700">{data.aboutThisItem}</p>
      </div>

      {data.aiGeneratedReviewSummary && (
        <div className="mt-4 p-3 bg-yellow-100 border border-yellow-300 rounded-md">
          <h3 className="font-bold text-yellow-700">AI-Generated Review Summary:</h3>
          <p className="text-gray-700">{data.aiGeneratedReviewSummary}</p>
        </div>
      )}

      <div className="mt-4">
        <h3 className="font-bold text-lg">Product Information:</h3>
        <p className="text-gray-700 whitespace-pre-line">{data.productInfo}</p>
      </div>

      {data.productImages.length > 0 && (
        <div className="mt-4">
          <h3 className="font-bold text-lg">Product Images:</h3>
          <div className="flex space-x-3 overflow-x-auto p-2 border border-gray-200 rounded-md">
            {data.productImages.map((img, index) => (
              <img key={index} src={img} alt="Product" className="w-24 h-24 object-cover rounded-md" />
            ))}
          </div>
        </div>
      )}

      {data.fromManufacturerImages.length > 0 && (
        <div className="mt-4">
          <h3 className="font-bold text-lg">From Manufacturer:</h3>
          <div className="flex space-x-3 overflow-x-auto p-2 border border-gray-200 rounded-md">
            {data.fromManufacturerImages.map((img, index) => (
              <img key={index} src={img} alt="Manufacturer" className="w-24 h-24 object-cover rounded-md" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Results;
