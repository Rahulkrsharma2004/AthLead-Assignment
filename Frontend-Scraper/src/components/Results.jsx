import React from "react";

function Results({ data }) {
  return (
    <div className="bg-white p-4 shadow-md rounded-md mt-4 w-full max-w-2xl">
      <h2 className="text-xl font-bold">{data.productName}</h2>
      <p className="text-gray-600">Rating: {data.rating} ({data.numRatings})</p>
      <p className="text-green-500 font-bold">Price: {data.sellingPrice}</p>
      <p className="text-red-500">Discount: {data.totalDiscount}</p>
      <h3 className="font-bold mt-4">Bank Offers:</h3>
      <p>{data.bankOffers}</p>
      <h3 className="font-bold mt-4">About This Item:</h3>
      <p>{data.aboutThisItem}</p>
      <h3 className="font-bold mt-4">Product Images:</h3>
      <div className="flex space-x-2 overflow-x-auto">
        {data.productImages.map((img, index) => (
          <img key={index} src={img} alt="Product" className="w-20 h-20 object-cover rounded-md" />
        ))}
      </div>
    </div>
  );
}

export default Results;
