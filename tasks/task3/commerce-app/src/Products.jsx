import React from "react";

const products = [
  { name: "Wireless Headphones", price: "₦15,000", img:"images/prod1.jpg" },
  { name: "Naija Sneakers", price: "₦20,000", img: "/images/prod2.jpg" },
  { name: "Smart Watch", price: "₦12,500", img: "/images/prod3.jpg" },
  { name: "Designer Bag", price: "₦18,000", img: "/images/prod4.jpg" },
  { name: "Men’s T-Shirt", price: "₦5,500", img: "/images/prod5.jpg" },
  { name: "Phone Stand", price: "₦3,000", img: "/images/prod6.jpg" },
];

export default function Products() {
  return (
    <section className="py-16 text-center px-6">
      <h2 className="text-3xl font-bold mb-10">Featured Products</h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition transform hover:-translate-y-2"
          >
            <img src={p.img} alt={p.name} className="h-56 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{p.name}</h3>
              <p className="text-gray-700 mb-3">{p.price}</p>
              <button className="bg-primary text-white px-4 py-2 w-full rounded hover:bg-green-700 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
