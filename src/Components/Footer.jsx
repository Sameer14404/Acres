import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        {/* Firm Name Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Acres</h2>
          <p className="text-lg font-semibold text-gray-300 mt-2">
            Your Trusted Partner in Real Estate Solutions
          </p>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Toll Free Number</h3>
            <p className="text-lg text-gray-400">+91 999 000 7746</p>
            <h3 className="text-lg font-bold text-white mt-6 mb-4">Support?</h3>
            <p className="text-lg text-gray-400">connect@acres.com</p>
          </div>


           <div>
            <h3 className="text-lg font-bold text-white mb-4">Popular Search</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  Apartment for Rent
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  Offices for Sale
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  Offices for Rent
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
        

          {/* Popular Search */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Popular Search</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  Apartment for Rent
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  Offices for Sale
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  Offices for Rent
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className=" text-white">
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  Blogs
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  Terms of Use
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Discover Properties */}
          

          {/* Company Info (New Section) */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Company Information</h3>
            <p className="text-gray-400">
              Acres is a trusted name in the real estate sector, providing end-to-end services for buying, selling, and renting properties. Our mission is to make your property journey seamless, transparent, and hassle-free.
            </p>
            <p className="text-gray-400 mt-4">
              For any inquiries or assistance, feel free to reach out to us. We're here to help!
            </p>
          </div>
        </div>
        <div>
            <h3 className="text-lg font-bold text-white mb-4">Discover Properties</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  Golf Course Road
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  Golf Course Extension Road
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  MG Road
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  New Gurgaon
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  Dwarka Expressway
                </a>
              </li>
            </ul>
          </div>
        {/* Copyright */}
        <div className="mt-12 text-center text-sm text-gray-400">
          <p>© Acres Landworks Pvt. Ltd. 2025 - All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
