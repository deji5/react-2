import React from "react";

export default function Hero() {
  return (
    <section
      className="bg-[url('/images/hero.jpg')] bg-cover bg-center text-black text-center py-32 px-6"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Shop Smart, Shop Naija 🇳🇬
      </h1>
      <p className="text-lg mb-6">
        Discover quality products from trusted Nigerian brands.
      </p>
      <button className="bg-accent text-black font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400 transition">
        Shop Now
      </button>
    </section>
  );
}

