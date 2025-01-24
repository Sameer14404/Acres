import React from 'react';

const EveryThing = () => {
  const arr = [
    {
      img: "https://acredge.in/_next/image?url=%2Fimages%2FourServices%2FHome%20interior%20services.png&w=640&q=75",
      para: "Home Interior Services",
    },
    {
      img: "https://acredge.in/_next/image?url=%2Fimages%2FourServices%2FHome%20Loan%20Service.jpeg&w=640&q=75",
      para: "Home Loan Services",
    },
    {
      img: "https://acredge.in/_next/image?url=%2Fimages%2FourServices%2FpropertyLegalServices.jpeg&w=640&q=75",
      para: "Property Legal Services",
    },
    {
      img: "https://acredge.in/_next/image?url=%2Fimages%2FourServices%2FProperty%20Valuation.png&w=640&q=75",
      para: "Property Valuation",
    },
  ];

  return (
    <div className="bg-black py-10">
      <h2 className="text-4xl font-bold text-center mb-8 text-white">
        Everything in One Place
      </h2>
      <div className="flex flex-wrap justify-center items-center"> 
        {arr.map((item, index) => (
          <div 
            key={index} 
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4" 
          > 
            <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <div className="w-full h-48 md:h-56 lg:h-64 overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.para} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="p-4 text-center">
                <p className="text-lg font-semibold text-white">{item.para}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EveryThing;