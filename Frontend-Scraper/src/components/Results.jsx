import React from "react";
import { FaStar, FaTag, FaMoneyBillWave, FaCheckCircle } from "react-icons/fa";

function Results({ data }) {
  return (
    <div className="bg-white p-6 shadow-lg rounded-md mt-6 w-full max-w-3xl mx-auto border border-gray-200">
      {/* 🛍️ Product Title */}
      <h2 className="text-2xl font-bold text-gray-900">{data.productName}</h2>

      {/* ⭐ Rating */}
      <ul className="mt-2">
        <li className="flex items-center text-gray-700">
          <FaStar className="text-yellow-500 mr-2" />
          <span>
            {data.rating} ({data.numRatings} ratings)
          </span>
        </li>
      </ul>

      {/* 💰 Price & Discount */}
      <ul className="mt-2">
        <li className="flex items-center text-green-600 font-bold">
          <FaMoneyBillWave className="mr-2" /> Price: ₹{data.sellingPrice}
        </li>
        <li className="flex items-center text-red-500 font-semibold">
          <FaTag className="mr-2" /> Discount: {data.totalDiscount}
        </li>
      </ul>

      {/* 🏦 Bank Offers */}
      {data.bankOffers && (
        <div className="mt-4 p-3 bg-blue-50 border border-blue-300 rounded-md">
          <h3 className="font-bold text-blue-700">🏦 Bank Offers:</h3>
          <ul>
            <li className="flex items-center text-gray-700">
              <FaCheckCircle className="text-blue-500 mr-2" />
              {data.bankOffers}
            </li>
          </ul>
        </div>
      )}

      {/* 📜 About This Item */}
      <div className="mt-4">
        <h3 className="font-bold text-lg text-black">📜 About This Item:</h3>
        <ul className="space-y-1 mt-1">
          {data.aboutThisItem.split(". ").map((point, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <FaCheckCircle className="text-green-500 mr-2" /> {point}
            </li>
          ))}
        </ul>
      </div>

      {/* 🤖 AI-Generated Review Summary */}
      {data.aiGeneratedReviewSummary && (
        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-300 rounded-md">
          <h3 className="font-bold text-black">🤖 AI-Generated Review Summary:</h3>
          <ul className="space-y-1 mt-1">
            {data.aiGeneratedReviewSummary.split(". ").map((point, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <FaCheckCircle className="text-yellow-500 mr-2" /> {point}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 📋 Product Information */}
      <div className="mt-4">
        <h3 className="font-bold text-lg text-black">📋 Product Information:</h3>
        <ul className="space-y-1 mt-1">
          {data.productInfo.split(". ").map((info, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <FaCheckCircle className="text-gray-500 mr-2" /> {info}
            </li>
          ))}
        </ul>
      </div>

      {/* 🖼️ Product Images */}
      {data.productImages.length > 0 && (
        <div className="mt-4">
          <h3 className="font-bold text-lg text-black">🖼️ Product Images:</h3>
          <div className="flex space-x-3 overflow-x-auto p-2 border border-gray-200 rounded-md">
            {data.productImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Product"
                className="w-32 h-32 object-cover rounded-md hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </div>
      )}

      {/* 🏭 Manufacturer Images */}
      {data.fromManufacturerImages.length > 0 && (
        <div className="mt-4">
          <h3 className="font-bold text-lg text-black">🏭 From Manufacturer:</h3>
          <div className="flex space-x-3 overflow-x-auto p-2 border border-gray-200 rounded-md">
            {data.fromManufacturerImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Manufacturer"
                className="w-32 h-32 object-cover rounded-md hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Results;
