import React from "react";

const ProductCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 text-center transform transition duration-300 hover:-translate-y-1">
      {/* Product Image */}
      <div className="overflow-hidden rounded-xl">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Product"
          className="w-full transition-transform duration-500 ease-in-out hover:scale-110"
        />
      </div>

      {/* Product Name */}
      <h3 className="mt-4 text-lg font-semibold text-green-900 transition-colors duration-300 hover:text-green-500">
        Naija Green Sneakers
      </h3>

      {/* Price */}
      <p className="text-gray-600 font-medium mt-1 mb-4">₦12,000</p>

      {/* Add to Cart Button */}
      <button
        className="bg-green-500 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 hover:bg-green-600 active:scale-95"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;