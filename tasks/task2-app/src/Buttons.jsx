import React from "react";

function Buttons() {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center bg-gray-50 min-h-screen p-10">

      <button className="bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-green-700 transition">
        Primary
      </button>

      <button className="bg-white text-green-600 border-2 border-green-600 font-semibold py-2 px-6 rounded-lg shadow-sm hover:bg-green-50 transition">
        Secondary
      </button>

      <button className="bg-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-red-700 transition">
        Danger
      </button>

      <button className="bg-emerald-500 text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-emerald-600 transition">
        Success
      </button>

      <button className="bg-green-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg text-lg hover:bg-green-700 transition">
        Large
      </button>

      <button className="bg-green-600 text-white font-semibold py-1.5 px-4 rounded-md shadow-sm text-sm hover:bg-green-700 transition">
        Small
      </button>
    </div>
  );
};

export default Buttons;
