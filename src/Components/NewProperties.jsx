import React from "react";

const NewProperties = () => {
  const properties = [
    "Paint House",
    "Villa",
    "Luxury Apartment",
    "Beachfront Property",
    "Penthouse",
    "Modern Villa",
    "Lakefront Property",
    "City View Apartment",
    "Gated Community",
    "Eco-Friendly Living",
  ];

  return (
    <div className="relative h-96 w-full overflow-hidden ">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="https://res.cloudinary.com/luxuryp/videos/f_webm,vc_vp9,q_auto/suyejxdtvocnw6zhzjk1/bandw-palm-trees.webm"
          type="video/webm"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 h-full flex items-center justify-center bg-gradient-to-r from-black/60 to-transparent w-full">
        <div className="text-white text-center p-8 ">
          <h1 className="lg:text-3xl font-bold mb-6  sm:text-center">Discover the New Development</h1>
          

          {/* Moving Properties */}
          <div className="overflow-hidden w-full">
            <div className="flex animate-marquee space-x-16 w-full">
              {properties.map((property, index) => (
                <div
                  key={index}
                  className="text-3xl font-semibold whitespace-nowrap"
                >
                  {property}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProperties;
