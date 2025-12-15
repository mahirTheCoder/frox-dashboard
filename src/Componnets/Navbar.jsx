import React from 'react';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import {
  FiSearch,
  FiBell,
  FiMessageSquare,
  FiChevronDown
} from 'react-icons/fi';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router';
import logo from '../assets/images/Logo Dark.png'
import profile from '../assets/images/Avatar.png'
const Navbar = () => {
  return (
    <section id='Navbar' className="">
      <div className="navItems w-full h-24 bg-white flex items-center justify-between px-6 shadow-xs">

        {/* Left Section: Logo and Back Button */}
        <div className="flex items-center space-x-4">
          {/* Logo Placeholder Div (Violet Frox - matching sidebar) */}
          <div className="flex items-center space-x-2">
            <Link to='/'>

              <img src={logo} alt="logo img" />
            </Link>
          </div>

          {/* Back Arrow Button */}
          <button className="p-2 ml-4 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-150 text-gray-700">
            <IoIosArrowBack className="w-5 h-5" />
          </button>
        </div>

        {/* Center Section: Search and Browse */}
        <div className="flex items-center space-x-6 ">

          {/* Search Bar */}
          <div className="flex items-center bg-gray-50 rounded-xl p-3 w-full  border border-gray-200">
            <FiSearch className="w-5 h-5 text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent text-gray-800 focus:outline-none w-full placeholder-gray-400 text-base"
            />
          </div>

          {/* Browse Dropdown */}
          <div className="flex items-center text-gray-600 cursor-pointer hover:text-violet-600 transition-colors duration-150">
            <FaArrowUpRightFromSquare className="w-4 h-4 mr-2" />

            <span className="text-base font-medium mr-6">Browse</span>
            <FiChevronDown className="w-4 h-4" />
          </div>
        </div>

        {/* Right Section: Actions and Profile */}
        <div className="flex items-center space-x-4">

          {/* Messages Icon (Pink Indicator) */}
          <div className="relative p-2 rounded-full text-gray-500 hover:text-gray-700 cursor-pointer transition-colors duration-150">
            <FiMessageSquare className="w-6 h-6" />
            <div className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full border border-white"></div>
          </div>

          {/* Notifications Icon (Pink Indicator) */}
          <div className="relative p-2 rounded-full text-gray-500 hover:text-gray-700 cursor-pointer transition-colors duration-150">
            <FiBell className="w-6 h-6" />
            <div className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full border border-white"></div>
          </div>

          {/* Profile Picture Placeholder */}
          <div className="profile img">
            <img src={profile} alt="profile img" />
          </div>
        </div>

      </div>

      <div className="sidebar">
        
      </div>
    </section>
  );
};

export default Navbar;