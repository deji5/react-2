import React from "react";

const naijaGreenShades = [
  { name: "Naija Green 50", hex: "#e6f4ea" },
  { name: "Naija Green 100", hex: "#c1e3cb" },
  { name: "Naija Green 200", hex: "#99d1aa" },
  { name: "Naija Green 300", hex: "#6fbf87" },
  { name: "Naija Green 400", hex: "#4caf6b" },
  { name: "Naija Green 500", hex: "#2a9d4b" },
  { name: "Naija Green 600", hex: "#21823f" },
  { name: "Naija Green 700", hex: "#186734" },
  { name: "Naija Green 800", hex: "#0e4c26" },
  { name: "Naija Green 900", hex: "#073316" },
  { name: "Naija Green 950", hex: "#021b0b" },
];

export default function NaijaColorsGrid() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-8">
      {/* Nigerian Flag Header */}
      <div className="flex justify-center w-full mb-10 rounded-lg overflow-hidden shadow-md">
        <div className="bg-[#008751] w-1/3 h-24" />
        <div className="bg-white w-1/3 h-24" />
        <div className="bg-[#008751] w-1/3 h-24" />
      </div>

      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        🇳🇬 Naija Green Palette
      </h1>

      {/* Grid of color swatches */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {naijaGreenShades.map((shade) => (
          <div key={shade.name} className="flex flex-col items-center">
            <div
              className="w-24 h-24 rounded-lg shadow-md border border-gray-200"
              style={{ backgroundColor: shade.hex }}
            />
            <p
              className="text-sm font-medium mt-2"
              style={{
                color: getTextColor(shade.hex),
              }}
            >
              {shade.name}
            </p>
            <p className="text-xs text-gray-600">{shade.hex}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Utility function for text contrast
function getTextColor(hex) {
  // Convert hex to RGB
  const r = parseInt(hex.substr(1, 2), 16);
  const g = parseInt(hex.substr(3, 2), 16);
  const b = parseInt(hex.substr(5, 2), 16);

  // Calculate brightness (YIQ formula)
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? "#1a1a1a" : "#ffffff";
}