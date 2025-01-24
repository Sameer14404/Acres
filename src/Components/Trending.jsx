import React, { useState } from "react";

const Trending = () => {
  const arr = [
    {
      img: "https://acredge.in/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fadmin-acredge-a801b.appspot.com%2FProjectImages%2F3evGFqxoqqsq5ZjBw78k%2Fimg-20241221-wa0012_1734772649575_e903457b-075d-412d-93ff-f0e1f6b7b44d.jpg&w=640&q=75",
      name: "Wood Shire",
      details: "By M3M",
    },
    {
      img: "https://acredge.in/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fadmin-acredge-a801b.appspot.com%2FProjectImages%2F6Mcf4dYzRVZMHLcDoWVL%2Fwhatsapp_image_2024-12-20_at_11.54.46_b7bcad5a_1734675945949_e395e944-b2b1-44d7-8f8f-f95d22ba970d.jpg&w=640&q=75",
      name: "Skyline Heights",
      details: "By DLF",
    },
    {
      img: "https://acredge.in/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fadmin-acredge-a801b.appspot.com%2FProjectImages%2FB025yxMgyuLSfB5Dp716%2Fimg-20241221-wa0010_1734767211898_5b66826e-6e46-4a95-b799-9fc4c354f048.jpg&w=640&q=75",
      name: "Green Meadows",
      details: "By Prestige",
    },
    {
      img: "https://acredge.in/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fadmin-acredge-a801b.appspot.com%2FProjectImages%2FSq0C6hu2nnzvLJ1VoFPq%2Fimg-20241221-wa0006_1734773425875_fea5eea6-10da-4eb3-8b4d-e91b5342c67f.jpg&w=640&q=75",
      name: "Urban Nest",
      details: "By Godrej",
    },
    {
        img: "https://acredge.in/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fadmin-acredge-a801b.appspot.com%2FProjectImages%2F3evGFqxoqqsq5ZjBw78k%2Fimg-20241221-wa0012_1734772649575_e903457b-075d-412d-93ff-f0e1f6b7b44d.jpg&w=640&q=75",
        name: "Wood Shire",
        details: "By M3M",
      },
      {
        img: "https://acredge.in/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fadmin-acredge-a801b.appspot.com%2FProjectImages%2F6Mcf4dYzRVZMHLcDoWVL%2Fwhatsapp_image_2024-12-20_at_11.54.46_b7bcad5a_1734675945949_e395e944-b2b1-44d7-8f8f-f95d22ba970d.jpg&w=640&q=75",
        name: "Skyline Heights",
        details: "By DLF",
      },
      {
        img: "https://acredge.in/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fadmin-acredge-a801b.appspot.com%2FProjectImages%2FB025yxMgyuLSfB5Dp716%2Fimg-20241221-wa0010_1734767211898_5b66826e-6e46-4a95-b799-9fc4c354f048.jpg&w=640&q=75",
        name: "Green Meadows",
        details: "By Prestige",
      },
      {
        img: "https://acredge.in/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fadmin-acredge-a801b.appspot.com%2FProjectImages%2FSq0C6hu2nnzvLJ1VoFPq%2Fimg-20241221-wa0006_1734773425875_fea5eea6-10da-4eb3-8b4d-e91b5342c67f.jpg&w=640&q=75",
        name: "Urban Nest",
        details: "By Godrej",
      },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsVisible = 3;
  const maxIndex = arr.length - itemsVisible;

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="bg-black py-10">
      <h2 className="text-3xl font-bold text-white text-center mb-8">
        Trending Projects
      </h2>

      <div className="relative">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 btn btn-circle bg-gray-800 text-white z-10"
          onClick={handlePrev}
        >
          ❮
        </button>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 240}px)` }}
          >
            {arr.map((item, index) => (
              <div
                key={index}
                className="w-60 bg-gray-800 rounded-lg shadow-lg flex-shrink-0 mx-2"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-white">
                    {item.name}
                  </h3>
                  <p className="text-gray-400">{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 btn btn-circle bg-gray-800 text-white z-10"
          onClick={handleNext}
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Trending;
