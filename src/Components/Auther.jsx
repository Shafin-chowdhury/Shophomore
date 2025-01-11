import React from 'react';
import A1 from "../assets/A1.jpg";
import A2 from "../assets/A2.jpg";
import A3 from "../assets/A3.jpg";
import A4 from "../assets/A4.jpeg";
import A5 from "../assets/A5.jpg";
import A6 from "../assets/A6.webp";

const Author = () => {
  const authors = [
    { id: 1, name: 'J K Rowling', img: A1 },
    { id: 2, name: 'Arundati Roy', img: A2 },
    { id: 3, name: 'Jonn Updike', img: A3 },
    { id: 4, name: 'Nouman Ali Khan', img: A4 },
    { id: 5, name: 'RabindraNath Tagore', img: A5 },
    { id: 6, name: 'Nicholas Sparks', img: A6 },
  ];

  return (
    <div className="mx-auto py-12 px-4 md:px-16 lg:px-24 bg-gray-50">
      <h2 className="text-2xl font-semibold text-left mb-8">Famous Authors</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {authors.map((author) => (
          <div key={author.id} className="flex flex-col items-center text-center">
            <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-gray-200">
              <img
                src={author.img}
                alt={author.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-4 text-xl italic font-medium">{author.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Author;
