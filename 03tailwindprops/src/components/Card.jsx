import React from "react";

function Card({
  //destructuring of variables and passing default values
  title = "Savory Sensation",
  subtitle = "A Symphony of Sweetness",
  image = "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  data = {
    detailedDescription: "This is a default description.",
    tags: ["Dessert", "Sweet"],
  },
}) {
  return (
    <div className="mb-4">
      <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-6">
        <img
          className="w-full h-48 object-cover rounded-xl"
          src={image}
          alt="Card Image"
        />
        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <p className="mt-2 text-gray-600">{subtitle}</p>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-800">
            {data.heading}
          </h2>
          <p className="mt-2 text-gray-600">{data.detailedDescription}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {data.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 flex justify-between items-center">
          <button className="bg-blue-300 text-white px-4 py-2 rounded-xl hover:bg-blue-600">
            Learn More
          </button>
          <span className="text-gray-500 text-sm">2 min read</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
