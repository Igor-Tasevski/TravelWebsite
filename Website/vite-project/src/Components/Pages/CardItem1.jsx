import React from 'react';

const CardItem1 = (props) => {
  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 hover:scale-105 relative"
      onClick={props.onClick}  // Add click handler here
    >
      {/* Image container */}
      <figure className="relative">
        <img
          className="w-full h-64 object-cover group-hover:scale-110 transition-all duration-300"
          alt="Travel Image"
          src={props.src}
        />

        {/* Label on top of the image */}
        <span className="absolute top-2 left-2 bg-black bg-opacity-60 text-white py-1 px-3 rounded-full text-sm font-semibold">
          {props.label}
        </span>
      </figure>

      {/* Text description below the image */}
      <div className="p-6">
        <h5 className="text-lg font-semibold text-gray-800">{props.text}</h5>
      </div>
    </div>
  );
};

export default CardItem1;
