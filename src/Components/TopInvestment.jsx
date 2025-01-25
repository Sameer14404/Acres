import React, { useState, useEffect } from "react";
import propertyData from "../assets/property_data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const TopInvestmentComponents = () => {
  const [topInvestments, setTopInvestments] = useState([]);
  const [likedProperties, setLikedProperties] = useState([]);

  useEffect(() => {
    // Process and sort properties by area
    const sortedProperties = propertyData
      .sort((a, b) => parseInt(b.area) - parseInt(a.area))
      .slice(0, 4); // Top 4 properties
    setTopInvestments(sortedProperties);
  }, []);

  const handleLike = (id) => {
    if (likedProperties.includes(id)) {
      setLikedProperties(likedProperties.filter((propertyId) => propertyId !== id));
    } else {
      setLikedProperties([...likedProperties, id]);
    }
  };

  return (
    <div className="bg-gray-900 py-10 px-5">
      <h2 className="text-3xl font-bold text-white text-center mb-8">
        🏆 Top Investment Opportunities
      </h2>

      {/* For large screens */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {topInvestments.map((property) => (
          <div
            key={property.id}
            className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={property.images[0] || "https://via.placeholder.com/300"}
              alt={property.projectName}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={() => handleLike(property.id)}
                className={`bg-red-600 text-white p-4 rounded-full hover:bg-red-800 transition-all duration-300 ${
                  likedProperties.includes(property.id) ? "bg-red-800" : ""
                }`}
              >
                {likedProperties.includes(property.id) ? "❤️" : "🤍"} Like
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-white">{property.projectName}</h3>
              <p className="text-gray-400">{property.city}</p>
              <p className="text-green-400 font-semibold mt-2">
                Rate: {property.sellingPrice}
              </p>
              <p className="text-gray-400">Area: {property.area} sq. ft.</p>
              <p className="text-gray-400">
                Type: {property.propertyType} ({property.typology})
              </p>
              <p className="text-gray-400">Furnish: {property.furnishType}</p>
              <p className="text-gray-400">View: {property.view}</p>
              <p className="text-gray-400">Possession: {property.possessionStatus}</p>
            </div>
          </div>
        ))}
      </div>

      {/* For mobile screens */}
      <div className="sm:hidden">
        <Swiper spaceBetween={20} slidesPerView={1.2}>
          {topInvestments.map((property) => (
            <SwiperSlide key={property.id}>
              <div className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={property.images[0] || "https://via.placeholder.com/300"}
                  alt={property.projectName}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white">{property.projectName}</h3>
                  <p className="text-gray-400">{property.city}</p>
                  <p className="text-green-400 font-semibold mt-2">
                    Rate: {property.sellingPrice}
                  </p>
                  <p className="text-gray-400">Area: {property.area} sq. ft.</p>
                </div>
                <button
                  onClick={() => handleLike(property.id)}
                  className={`absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full hover:bg-red-800 transition-all duration-300 ${
                    likedProperties.includes(property.id) ? "bg-red-800" : ""
                  }`}
                >
                  {likedProperties.includes(property.id) ? "❤️" : "🤍"}
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopInvestmentComponents;
