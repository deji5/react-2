import React, { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-700 text-white shadow-md fixed w-full z-20 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex-shrink-0 font-bold text-xl tracking-wide">
            NaijaMarket
          </div>

          {/* Center: Navigation links (hidden on mobile) */}
          <div className="hidden md:flex space-x-8 font-medium">
            <a href="#" className="hover:text-green-200 transition-colors">Home</a>
            <a href="#" className="hover:text-green-200 transition-colors">Shop</a>
            <a href="#" className="hover:text-green-200 transition-colors">Deals</a>
            <a href="#" className="hover:text-green-200 transition-colors">Contact</a>
          </div>

          {/* Right: Cart + Login button */}
          <div className="flex items-center space-x-4">
            <button className="relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-white text-green-700 text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </button>
            <button className="bg-white text-green-700 px-4 py-1.5 rounded-lg font-semibold hover:bg-green-100 transition-colors">
              Login
            </button>

            {/* Hamburger (mobile only) */}
            <button
              className="md:hidden focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (slide-down effect) */}
      <div
        className={`md:hidden bg-green-800 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <div className="flex flex-col space-y-4 p-4 font-medium">
          <a href="#" className="hover:text-green-200 transition-colors">Home</a>
          <a href="#" className="hover:text-green-200 transition-colors">Shop</a>
          <a href="#" className="hover:text-green-200 transition-colors">Deals</a>
          <a href="#" className="hover:text-green-200 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}
