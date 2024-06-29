// Card.js
import React from "react";

const Card = () => {
  const options = [
    { amount: 50, label: "Save 50%" },
    { amount: 100, label: "Save 50%", highlighted: true },
    { amount: 300, label: "Save 50%" },
    { amount: 500, label: "Save 50%" },
    { amount: 1000, label: "Save 50%" },
    { amount: 2500, label: "Save 50%" },
    { amount: 5000, label: "Save 50%" },
    { amount: 10000, label: "Save 50%" },
    { amount: 20000, label: "Save 50%" },
    { amount: 40000, label: "Save 50%" },
    { amount: 50000, label: "Save 50%" },
    { amount: 100000, label: "Save 50%" },
    { amount: 200000, label: "Save 50%" },
    { amount: 400000, label: "Save 50%" },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-80">
      <div className="grid grid-cols-3 gap-4 mb-4">
        {options.map((option, index) => (
          <div
            key={index}
            className={`${
              option.highlighted ? "bg-red-500 text-white" : "bg-gray-100"
            } text-center py-2 rounded`}
          >
            {option.amount}
            <br />
            <span
              className={option.highlighted ? "text-white" : "text-red-500"}
            >
              {option.label}
            </span>
          </div>
        ))}
      </div>
      <div className="text-center text-3xl mb-4">$1.38</div>
      <button className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white py-2 px-4 rounded w-full">
        Order Now
      </button>
    </div>
  );
};

export default Card;
