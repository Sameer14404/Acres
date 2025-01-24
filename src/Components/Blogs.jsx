import React from "react";

const Blogs = () => {
  const arr = [
    {
      img: "https://acredge.in/_next/image?url=%2Fimages%2Fblog%2FlivingRoom.avif&w=828&q=75",
      head: "Living Room",
      dis: "The Living Room: The Heart of Your Home's Story",
    },
    {
      img: "https://acredge.in/_next/image?url=%2Fimages%2Fblog%2FlifeStyle.avif&w=828&q=75",
      head: "Investment in Cities",
      dis: "The Investment The Heart of Your Home's Story",
    },
    {
      img: "https://acredge.in/_next/image?url=%2Fimages%2Fblog%2F1st%20Blog.webp&w=828&q=75",
      head: "Village Property",
      dis: "The Investment The Heart of Your Home's Story",
    },
  ];

  return (
    <div className="bg-black py-10">
      <h2 className="text-4xl font-bold text-center mb-8 text-white">
        Blogs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {arr.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            {/* Image */}
            <img
              src={item.img}
              alt={item.head}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:blur-sm"
            />
            {/* Hover Content */}
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-4">
              <h3 className="text-2xl font-bold text-white mb-2">
                {item.head}
              </h3>
              <p className="text-white text-sm">{item.dis}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
