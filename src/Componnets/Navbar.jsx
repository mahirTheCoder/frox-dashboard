import React from 'react';

// Importing icons from React Icons (using Fi for Feather Icons and Md for Material Design Icons)
import { FiLayout, FiBox, FiShoppingCart, FiCreditCard, FiDollarSign, FiUsers, FiPlus, FiSun, FiMaximize } from 'react-icons/fi';
import { MdOutlineNightsStay } from 'react-icons/md';

const Navbar = () => {
  return (
    // Outer section for the main layout context
    <section id='navbar'>
      <div className="main-layout flex gap-5 ">
        
        {/* 1. SIDEBAR (Fixed and remains in place) */}
        <div className="sideitems w-[256px] h-full sticky bg-white shadow-2xl p-4 flex flex-col  font-sans z-50">
            
          {/* Header/Logo */}
          <div className="flex items-center space-x-2 pb-8 pt-2">
            {/* Logo Placeholder Div */}
            <div className="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center">
              <span className="text-xl font-bold text-white leading-none">F</span> 
            </div>
            <span className="text-xl font-extrabold text-gray-900 tracking-tight">Frox</span>
          </div>

          {/* Main Navigation */}
          <div className="space-y-1 mb-8">
            {/* Dashboard (Active) */}
            <div className="flex items-center space-x-3 py-2 px-4 rounded-lg cursor-pointer bg-violet-600 text-white shadow-lg shadow-violet-500/30 transition-all duration-200">
              <FiLayout className="w-5 h-5" /> 
              <span className="text-sm font-semibold">Dashboard</span>
            </div>
            {/* Other Navigation Items */}
            <div className="flex items-center space-x-3 py-2 px-4 rounded-lg cursor-pointer text-gray-600 hover:bg-gray-100 transition-colors duration-150">
              <FiBox className="w-5 h-5" /> 
              <span className="text-sm font-medium">Products</span>
            </div>
            <div className="flex items-center space-x-3 py-2 px-4 rounded-lg cursor-pointer text-gray-600 hover:bg-gray-100 transition-colors duration-150">
              <FiShoppingCart className="w-5 h-5" /> 
              <span className="text-sm font-medium">Orders</span>
            </div>
            <div className="flex items-center space-x-3 py-2 px-4 rounded-lg cursor-pointer text-gray-600 hover:bg-gray-100 transition-colors duration-150">
              <FiCreditCard className="w-5 h-5" /> 
              <span className="text-sm font-medium">Payments</span>
            </div>
            <div className="flex items-center space-x-3 py-2 px-4 rounded-lg cursor-pointer text-gray-600 hover:bg-gray-100 transition-colors duration-150">
              <FiDollarSign className="w-5 h-5" /> 
              <span className="text-sm font-medium">Transactions</span>
            </div>
            <div className="flex items-center space-x-3 py-2 px-4 rounded-lg cursor-pointer text-gray-600 hover:bg-gray-100 transition-colors duration-150">
              <FiUsers className="w-5 h-5" /> 
              <span className="text-sm font-medium">Clients</span>
            </div>
          </div>

          <div className="h-px bg-gray-200 my-2"></div>

          {/* Categories */}
          <div className="mb-8">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest px-4 mb-2">
              Categories
            </h3>
            <div className="space-y-1">
              {/* Laptops (Yellow) */}
              <div className="flex items-center justify-between py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer transition-colors">
                <span className="text-sm">Laptops</span>
                <div className="w-4 h-4 rounded-sm bg-yellow-400"></div>
              </div>
              {/* Mobile phones (Orange/Red) */}
              <div className="flex items-center justify-between py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer transition-colors">
                <span className="text-sm">Mobile phones</span>
                <div className="w-4 h-4 rounded-sm bg-orange-500"></div>
              </div>
              {/* Desktops (Pink) */}
              <div className="flex items-center justify-between py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer transition-colors">
                <span className="text-sm">Desktops</span>
                <div className="w-4 h-4 rounded-sm bg-pink-500"></div>
              </div>
              {/* Accessories (Teal) */}
              <div className="flex items-center justify-between py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer transition-colors">
                <span className="text-sm">Accessories</span>
                <div className="w-4 h-4 rounded-sm bg-teal-500"></div>
              </div>
              {/* Portable storage (Pink) */}
              <div className="flex items-center justify-between py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer transition-colors">
                <span className="text-sm">Portable storage</span>
                <div className="w-4 h-4 rounded-sm bg-pink-500"></div>
              </div>
              {/* Networking (Teal) */}
              <div className="flex items-center justify-between py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer transition-colors">
                <span className="text-sm">Networking</span>
                <div className="w-4 h-4 rounded-sm bg-teal-500"></div>
              </div>
              {/* Add Category */}
              <div className="flex items-center space-x-3 py-2 px-4 text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer transition-colors mt-2">
                <FiPlus className="w-5 h-5" />
                <span className="text-sm font-medium">Add category</span>
              </div>
            </div>
          </div>

          {/* Top Sellers */}
          <div className="mb-8">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest px-4 mb-2">
              Top Sellers
            </h3>
            {/* Profile Pictures Div */}
            <div className="px-4 flex -space-x-2 items-center">
              <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-400 z-50"></div>
              <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-500 z-40"></div>
              <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-400 z-30"></div>
              <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-500 z-20"></div>
              <div className="w-8 h-8 rounded-full border-2 border-white bg-violet-600 flex items-center justify-center text-white font-bold text-sm z-10">+</div>
            </div>
          </div>

          {/* Upgrade Banner (Flex-grow to push it down) */}
          <div className=" flex items-end">
            <div className="w-full p-6 rounded-xl bg-gray-50 text-center relative overflow-hidden transition-shadow duration-300 hover:shadow-lg hover:shadow-indigo-300/50">
              {/* Illustration Placeholder Div - Complex shape using absolute positioning */}
              <div className="h-32 w-full flex items-center justify-center mb-4 relative">
                <div className="absolute inset-0 top-0 left-1/2 transform -translate-x-1/2 w-40 h-24 bg-indigo-200 rounded-t-lg rounded-b-full"></div>
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-indigo-500 rounded-full shadow-lg z-10"></div>
                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-yellow-400 rounded-full z-20"></div>
                <div className="absolute right-0 top-1/4 w-8 h-16 grid grid-cols-2 gap-1 opacity-50">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-300"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-300"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-300"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-300"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-300"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-300"></div>
                </div>
              </div>

              <p className="text-sm text-gray-700 mb-4 font-normal">
                Unlock more information now by <strong className='font-extrabold text-gray-800'>Upgrade to Frox</strong>
              </p>
              <button className="w-full py-2.5 bg-violet-600 text-white font-bold rounded-lg hover:bg-violet-700 transition-colors duration-200 text-sm shadow-md shadow-violet-500/20">
                Upgrade now
              </button>
            </div>
          </div>

          {/* Bottom Switcher/Actions */}
          <div className="mt-4 p-2 bg-gray-100 rounded-full flex items-center justify-between select-none">
            <MdOutlineNightsStay className="w-5 h-5 text-gray-500" /> {/* Moon */}
            
            {/* Toggle Switch */}
            <div className="w-12 h-6 flex items-center bg-violet-600 rounded-full p-0.5 cursor-pointer transition-colors duration-200 hover:bg-violet-700">
              <div className="bg-white w-5 h-5 rounded-full shadow-md transform translate-x-6 transition-transform duration-200"></div>
            </div>

            <FiSun className="w-5 h-5 text-yellow-500" /> {/* Sun */}
            <div className="w-px h-6 bg-gray-300 mx-2"></div>
            <FiMaximize className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors" />
          </div>

        </div>
        
   

        {/* 2. MAIN CONTENT AREA (Includes the top bar, and will include all future content) */}
            <div className="navBar w-full h-24 bg-amber-200 p-4 rounded-lg shadow-sm">
               
            </div>
            
         

      </div>
    </section>
  );
};

export default Navbar;