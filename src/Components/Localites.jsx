import React from "react";

const Localites = () => {
  const arr1 = [
    {
      img: "https://acredge.in/_next/image?url=%2Fimages%2Fhome%2Fgolf%20course%20road.jpg&w=640&q=75",
      name: "Golf Course Road",
    },
    {
      img: "https://acredge.in/_next/image?url=%2Fimages%2Fhome%2FgolfcourseExtension.jpg&w=640&q=75",
      name: "Golf Course Extension Road",
    },
    {
      img: "https://acredge.in/_next/image?url=%2Fimages%2Fhome%2Fdwarkaexpressway.jpg&w=640&q=75",
      name: "Dwarka Expressway",
    },
    {
      img: "https://acredge.in/_next/image?url=%2Fimages%2Fhome%2Fnewgurgaon.jpg&w=640&q=75",
      name: "New Gurgaon",
    },
    {
      img: "https://acredge.in/_next/image?url=%2Fimages%2Fhome%2Fmgroad.jpg&w=640&q=75",
      name: "MG Road",
    },
  ];

  return (
    <section className="py-10 bg-black text-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <h2 className="text-3xl font-bold  text-left p-2 m-2">
          Best Environment Localities
        </h2>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {arr1.map((item, index) => (
            <div
              key={index}
              className="card bg-gray-800 shadow-xl hover:shadow-2xl motion-scale-in-[0.5] motion-translate-x-in-[-25%] motion-translate-y-in-[25%] motion-opacity-in-[0%] motion-rotate-in-[-10deg] motion-blur-in-[5px] motion-duration-[0.35s] motion-duration-[0.53s]/scale motion-duration-[0.53s]/translate motion-duration-[0.63s]/rotate"
            >
              <figure>
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-t-lg "
                />
              </figure>
              <div className="card-body">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-400">
                  Discover the serene environment of {item.name}. Perfect for
                  living or investing!
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-secondry ">See More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Localites;
