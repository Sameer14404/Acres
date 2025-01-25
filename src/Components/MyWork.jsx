import React, { useState } from "react";

const MyWork = () => {
  const propertyImages = [
    "https://dlajgvw9htjpb.cloudfront.net/cms/fb44ee0c-17b4-49c6-a5cd-56e0bdb4fb9c/A11478040/-8280597360208347391.jpg",
    "https://dlajgvw9htjpb.cloudfront.net/cms/fb44ee0c-17b4-49c6-a5cd-56e0bdb4fb9c/A11478040/2149096853229457563.jpg",
    "https://dlajgvw9htjpb.cloudfront.net/cms/fb44ee0c-17b4-49c6-a5cd-56e0bdb4fb9c/A11478040/5942877172124353418.jpg",
    "https://dlajgvw9htjpb.cloudfront.net/cms/fb44ee0c-17b4-49c6-a5cd-56e0bdb4fb9c/A11478040/-5033829493867515710.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="bg-black">
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-full bg-black overflow-hidden">
        <h2 className="text-3xl font-bold text-left px-6 pt-4 pb-2 text-white">
          Our Interior Work
        </h2>

        {/* Carousel Wrapper */}
        <div
          className="flex transition-transform duration-700"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {propertyImages.map((image, index) =>  <div key={index} className="flex-shrink-0 w-full h-full">
              <img
                alt={`Property ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => (e.target.src = "fallback-image.jpg")} // Fallback image
                src={image}
              />
            </div> )}

          
          
          
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {propertyImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${
                currentSlide === index ? "bg-white" : "bg-gray-500"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyWork;
