import React from "react";

const Card = ({ img, description, price, inventory }) => {
  return (
    <div className="bg-[#1F1D28] p-8 rounded-xl flex flex-col items-center text-gray-300 text-center gap-2">
      <img
        src={img}
        className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
      />
      <p className="text-xl">{description}</p>
      <span className="text-gray-400">${price}</span>
      <p className="text-gray-600">{inventory}</p>
    </div>
  );
};

export default Card;
