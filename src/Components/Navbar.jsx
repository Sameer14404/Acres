import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Add shadow effect when scrolled
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-screen">
      {/* Fullscreen Video */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/luxuryp/videos/f_webm,vc_vp9,q_auto/zuczg7qork4aul5lezzu/scheinfeld-team-01-comp.webm"
            type="video/webm"
          />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
      </div>

      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 w-full z-20 transition-all duration-500 ${
          isScrolled ? "bg-black bg-opacity-90 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="navbar px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-white text-2xl lg:text-3xl font-extrabold">
            <a href="#" className="hover:opacity-80">
              Acres
            </a>
          </div>

          {/* Search Bar for large screens  */}
          <div className="hidden lg:flex  w-1/2 m-2  h-4  justify-center">
            <input
              type="text"
              placeholder="Search for properties..."
              className="w-[90%] px-4 py-2 rounded-lg bg-white text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white ml-8  pl-20 h-10"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8 ml-auto">
            <a
              href="#buy"
              className="text-white text-lg font-medium hover:text-gray-300"
            >
              Buy
            </a>
            <a
              href="#rent"
              className="text-white text-lg font-medium hover:text-gray-300"
            >
              Rent
            </a>
            <a
              href="#contact"
              className="text-white text-lg font-medium hover:text-gray-300"
            >
              Contact
            </a>
          </div>

          {/* Hamburger Menu */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 w-80 h-full bg-gray-900 bg-opacity-95 shadow-lg z-30 p-6 space-y-6 transition-transform transform translate-x-0 rounded-l-xl lg:w-96">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white text-xl absolute top-4 right-4"
          >
            Close
          </button>
          <div className="mt-10">
            {/* Search Bar in Mobile Drawer */}
            <input
              type="text"
              placeholder="Search properties..."
              className="w-full px-4 py-2 bg-gray-800 text-white rounded-md placeholder-gray-400"
            />
            <button className="mt-4 w-full bg-gray-700 text-white py-2 rounded-md hover:bg-gray-600">
              Search
            </button>
          </div>
          <ul className="space-y-4">
            <li>
              <a
                href="#buy"
                className="text-white text-xl font-semibold hover:text-gray-400"
              >
                Buy House
              </a>
            </li>
            <li>
              <a
                href="#rent"
                className="text-white text-xl font-semibold hover:text-gray-400"
              >
                Rent House
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white text-xl font-semibold hover:text-gray-400"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Page Content */}
      <div className="relative z-10 text-white text-center px-6 md:px-12 font-sans">
        <div className="h-[2000px] pt-32">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Discover Your Dream Home
          </h1>
          <h2 className="mt-5 text-3xl md:text-4xl font-light">
            Welcome To Acres
          </h2>
          <p className="mt-5 text-lg md:text-xl">
            Find the perfect property with Acres. From buying to renting.
          </p>
          <p className="mt-5 text-lg md:text-xl">
            Start your journey today and explore the finest properties near you.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button className="bg-white text-black font-semibold text-lg py-3 px-6 rounded-lg hover:bg-gray-300 transition-all">
              Explore Properties
            </button>
            <button className="bg-transparent border border-white text-white font-semibold text-lg py-3 px-6 rounded-lg hover:bg-white hover:text-black transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
