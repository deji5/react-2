import React from "react";

const products = [
  {
    name: "Jollof Rice",
    price: "₦1,500",
    img: "https://images.unsplash.com/photo-1598514982846-9987b0664909?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Ankara Fabric",
    price: "₦5,000",
    img: "https://images.unsplash.com/photo-1601121140586-4d6b7c3b32ea?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Suya",
    price: "₦1,000",
    img: "https://images.unsplash.com/photo-1625944019573-091d1cf9c70a?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Aso-Ebi",
    price: "₦15,000",
    img: "https://images.unsplash.com/photo-1616469829936-6e5a7a0b69b3?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Palm Wine",
    price: "₦1,200",
    img: "https://images.unsplash.com/photo-1632975382404-7e9f739d5b17?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Agbada",
    price: "₦25,000",
    img: "https://images.unsplash.com/photo-1603246454468-d3fe9f0b1e5a?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Chin Chin",
    price: "₦500",
    img: "https://images.unsplash.com/photo-1616001666662-5a2e3e4b5b45?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Puff Puff",
    price: "₦300",
    img: "https://images.unsplash.com/photo-1616001460291-1a2f507c19f9?auto=format&fit=crop&w=600&q=80",
  },
];

export default function ProductGrid() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-10 text-green-700">
        🛒 Naija Market Picks
      </h1>

      {/* Responsive grid */}
      <div
        className="
          grid gap-6
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
        "
      >
        {products.map((product) => (
          <div
            key={product.name}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 transition-transform duration-200 hover:shadow-lg hover:-translate-y-1"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col">
              <h2 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h2>
              <p className="text-green-700 font-medium mt-1">
                {product.price}
              </p>
              <button
                className="
                  mt-4 bg-green-600 text-white py-2 rounded-lg font-medium
                  hover:bg-green-700 transition-colors
                "
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
