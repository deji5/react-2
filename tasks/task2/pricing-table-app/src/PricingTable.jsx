import React from "react";

export default function PricingTable() {
  const plans = [
    {
      name: "Basic",
      price: "₦5,000",
      period: "/month",
      features: [
        "Access to core features",
        "Email support",
        "Community access",
      ],
      highlight: false,
    },
    {
      name: "Pro",
      price: "₦15,000",
      period: "/month",
      features: [
        "Everything in Basic",
        "Priority support",
        "Advanced analytics",
        "Custom integrations",
      ],
      highlight: true,
    },
    {
      name: "Enterprise",
      price: "₦50,000",
      period: "/month",
      features: [
        "All Pro features",
        "Dedicated account manager",
        "24/7 premium support",
        "Custom solutions",
      ],
      highlight: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-green-700 mb-4">
        💼 Our Pricing Plans
      </h1>
      <p className="text-gray-600 mb-12 text-center max-w-2xl">
        Choose the plan that fits your needs — flexible, affordable, and powered
        by Naija energy.
      </p>

      {/* Grid / Flex Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`flex flex-col justify-between rounded-2xl shadow-md p-8 transition-transform duration-200 
              ${plan.highlight
                ? "bg-green-700 text-white scale-105 shadow-lg"
                : "bg-white text-gray-800 hover:shadow-lg"} 
            `}
          >
            {/* Title */}
            <h2
              className={`text-2xl font-bold mb-2 ${
                plan.highlight ? "text-white" : "text-green-700"
              }`}
            >
              {plan.name}
            </h2>

            {/* Price */}
            <p className="text-4xl font-extrabold mb-4">
              {plan.price}
              <span
                className={`text-lg font-medium ${
                  plan.highlight ? "text-green-100" : "text-gray-500"
                }`}
              >
                {plan.period}
              </span>
            </p>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      plan.highlight ? "bg-green-300" : "bg-green-600"
                    }`}
                  ></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button
              className={`py-3 rounded-lg font-semibold transition-colors ${
                plan.highlight
                  ? "bg-white text-green-700 hover:bg-green-100"
                  : "bg-green-600 text-white hover:bg-green-700"
              }`}
            >
              {plan.highlight ? "Get Started" : "Choose Plan"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
