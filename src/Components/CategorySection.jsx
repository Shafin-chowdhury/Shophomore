import React from "react";
import Poet from "../assets/Poet.png";
import Kids from "../assets/Kids.jpg";
import BSB from "../assets/BSB.png";

const categories = [
  {
    title: "Famous Writers",
    imageUrl: Poet,
  },
  {
    title: "Kids",
    imageUrl: Kids,
  },
  {
    title: "Best Selling Books",
    imageUrl: BSB,
  },
];

const CategorySection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
      {categories.map((category, index) => (
        <div
          key={index}
          className="border italic rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          style={{ height: "350px", width: "100%" }} // Fixed card dimensions
        >
          <div className="w-full bg-stone-600 h-3/4 flex items-center justify-center ">
            <img
              src={category.imageUrl}
              alt={category.title}
              className="w-full h-full object-contain" // Ensures the entire picture fits inside
            />
          </div>
          <div className="h-1/4 p-4 text-center">
            <p className="text-lg font-semibold">{category.title}</p>
            <button
              className="bg-red-600 px-6 py-1.5 text-white  hover:bg-red-700 transform transition-transform duration-300 hover:scale-105"
              onClick={() => alert(`Viewing all ${category.title}`)}
            >
              View All
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;

