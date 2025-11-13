import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-primary text-white flex items-center justify-between px-6 py-4 relative">
      <div className="text-2xl font-bold">NaijaShop</div>

      <ul className="hidden md:flex gap-8">
        <li><a href="#" className="hover:text-accent transition">Home</a></li>
        <li><a href="#" className="hover:text-accent transition">Products</a></li>
        <li><a href="#" className="hover:text-accent transition">Categories</a></li>
        <li><a href="#" className="hover:text-accent transition">Contact</a></li>
      </ul>

      <button
        className="md:hidden text-3xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {open && (
        <ul className="absolute top-16 right-6 bg-primary flex flex-col gap-4 p-4 rounded-lg md:hidden">
          <li><a href="#" className="hover:text-accent">Home</a></li>
          <li><a href="#" className="hover:text-accent">Products</a></li>
          <li><a href="#" className="hover:text-accent">Categories</a></li>
          <li><a href="#" className="hover:text-accent">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}