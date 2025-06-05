"use client";
import React from "react";

const plans = [
  {
    name: "Basic",
    price: "$10",
    features: [
      { text: "10GB Storage", included: false },
      { text: "Basic Support", included: false },
      { text: "Single User", included: false },
      { text: "Community Access", included: true },
      { text: "Weekly Updates", included: true },
    ],
  },
  {
    name: "Standard",
    price: "$20",
    badge: "Bestseller",
    features: [
      { text: "50GB Storage", included: true },
      { text: "Priority Support", included: true },
      { text: "Up to 5 Users", included: true },
      { text: "Community Access", included: true },
      { text: "Beta Features", included: true },
    ],
    highlight: true,
  },
  {
    name: "Premium",
    price: "$30",
    features: [
      { text: "200GB Storage", included: true },
      { text: "24/7 Support", included: true },
      { text: "Unlimited Users", included: true },
      { text: "Community Access", included: true },
      { text: "Real-time Updates", included: true },
    ],
  },
];

const PricingSection = () => {
  return (
    <section className="bg-background py-20 mx-auto w-full">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-extrabold">Pricing Plans</h2>
        <p className="mt-3">Choose the plan that suits you best</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`rounded-xl border ${
              plan.highlight
                ? "border-indigo-600 bg-background shadow-xl scale-105"
                : "border-gray-700 bg-background"
            } transition-transform hover:scale-105 duration-300 p-8`}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-semibold">{plan.name}</h3>
              {plan.badge && (
                <span className="bg-background text-indigo-600 border border-indigo-600 text-xs font-bold px-2 py-1 rounded-full">
                  {plan.badge}
                </span>
              )}
            </div>

            <p className="text-3xl font-bold">
              {plan.price}
              <span className="text-base font-medium">/month</span>
            </p>

            <ul className="mt-6 space-y-3">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className={`flex items-center gap-2 text-sm ${
                    !feature.included ? "line-through" : ""
                  }`}
                >
                  {feature.included ? "✅" : "❌"} {feature.text}
                </li>
              ))}
            </ul>

            <button
              className={`mt-6 w-full py-2 px-4 rounded-lg text-white font-semibold ${
                plan.highlight
                  ? "bg-indigo-600 hover:bg-indigo-700"
                  : "bg-gray-800 hover:bg-gray-900"
              } transition duration-300`}
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
