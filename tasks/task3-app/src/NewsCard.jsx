import React from "react";
import "./App.css"

function NewsCard() {
  return (
    <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg">
      <img
        src="https://source.unsplash.com/600x400/?lagos,news"
        alt="Featured"
        className="w-full h-48 object-cover"
      />

      <div className="p-5">
        <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-3">
          Politics
        </span>

        <h2 className="text-xl font-bold text-gray-800 leading-tight mb-2">
          Nigerian Senate Approves New Economic Reform Plan
        </h2>

        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          The Senate has officially approved the proposed reform package aimed at boosting local manufacturing and strengthening the naira...
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div>
            <span className="font-medium text-gray-700">By Chika Olatunji</span> •{" "}
            <span>Nov 10, 2025</span>
          </div>
          <div>
            <span>⏱️ 5 min read</span>
          </div>
        </div>

        <div className="mt-4">
          <a
            href="#"
            className="text-green-600 font-semibold text-sm hover:underline"
          >
            Read more →
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
