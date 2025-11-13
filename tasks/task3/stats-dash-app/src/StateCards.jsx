import React from "react";


const stats = [
  {
    title: "Total Sales",
    value: "₦2.5M",
    change: "+12%",
    // icon: <ShoppingBag className="h-8 w-8 text-white" />,
    color: "bg-green-500",
  },
  {
    title: "Orders",
    value: "1,234",
    change: "+8%",
    // icon: <Package className="h-8 w-8 text-white" />,
    color: "bg-blue-500",
  },
  {
    title: "Customers",
    value: "567",
    change: "+23%",
    // icon: <Users className="h-8 w-8 text-white" />,
    color: "bg-yellow-500",
  },
  {
    title: "Revenue",
    value: "₦4.2M",
    change: "+15%",
    // icon: <DollarSign className="h-8 w-8 text-white" />,
    color: "bg-purple-500",
  },
];

function StatsCards() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-between transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
          >

            <div className={`p-4 rounded-xl ${item.color}`}>
              {item.icon}
            </div>

            <div className="text-right">
              <p className="text-gray-500 text-sm font-medium">{item.title}</p>
              <h3 className="text-2xl font-bold text-gray-800">{item.value}</h3>
              <p className="text-green-600 font-semibold text-sm">
                {item.change} ↑
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCards;
