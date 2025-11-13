import React from "react";

const categories = ["Electronics","Fashion","Home","Beauty","Groceries","Accessories"];

export default function Categories() {
  return (
    <section className="py-16 text-center px-6">
      <h2 className="text-3xl font-bold mb-10">Shop by Category</h2>
      <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
        {categories.map((cat) => (
          <div
            key={cat}
            className="bg-gray-100 py-6 rounded-xl hover:bg-primary hover:text-white cursor-pointer transition transform hover:-translate-y-2"
          >
            {cat}
          </div>
        ))}
      </div>
    </section>
  );
}
