import React from "react";
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#4B2BAA] text-white px-6 md:px-16 py-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold">Join the Computer Science School newsletter</h2>
          <p className="mt-2 text-gray-300 text-sm">
            Donec et scelerisque quam. Aliquam varius et sapien.
          </p>

          {/* Email input */}
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="you@example.com"
              className="px-4 py-2 rounded-md outline-none w-full sm:w-auto flex-1 text-black"
            />
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-5 py-2 rounded-md font-semibold">
              Submit
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5 text-2xl">
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTiktok /></a>
          </div>
        </div>

        {/* Learn Links */}
        <div>
          <h3 className="font-bold text-lg">Learn</h3>
          <ul className="mt-2 space-y-1 text-gray-300">
            <li><a href="#">HTML</a></li>
            <li><a href="#">CSS</a></li>
            <li><a href="#">Javascript</a></li>
            <li><a href="#">React</a></li>
            <li><a href="#">React Hooks</a></li>
            <li><a href="#">TypeScript</a></li>
            <li><a href="#">Python</a></li>
            <li><a href="#">SQL</a></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-bold text-lg">Company</h3>
          <ul className="mt-2 space-y-1 text-gray-300">
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom text */}
      <div className="mt-10 border-t border-gray-500 pt-4 text-sm text-gray-300 text-center">
        ©2022 Webflow University. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
