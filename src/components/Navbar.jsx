import React, { useEffect, useState } from "react";
import Topbar from "./Topbar";

const Navbar = () => {
    
  return (
    <>
    <Topbar />
      <div className="md:h-20 h-16 flex justify-between items-center pl-8 pr-8 w-full z-20 bg-white ">
        <div className="flex gap-2 items-center">
          <img src="/images/logo.png" alt="" />
          <h2 className="md:text-4xl text-xl font-bold">
            <span className="text-[#FF6B18]"> UDYOG NIKETAN</span> TECHNO
          </h2>
        </div>

        <div className="items-center gap-10 font-semibold text-md hidden md:flex">
          <a
            className="hover:scale-150 hover:text-[#FF6B18] transition-all duration-500 "
            href="#Home"
          >
            Home
          </a>
          <a
            className="hover:scale-150 hover:text-[#FF6B18]  transition-all duration-500"
            href="#About"
          >
            About
          </a>
          <a
            className="hover:scale-150 hover:text-[#FF6B18]  transition-all duration-500"
            href="#Service"
          >
            Service
          </a>
          <a
            className="hover:scale-150 hover:text-[#FF6B18]  transition-all duration-500"
            href="#Client"
          >
            Client
          </a>
          <a
            className="hover:scale-150 hover:text-[#FF6B18]  transition-all duration-500"
            href="#WhyUs"
          >
            Why Us
          </a>
          <button className="px-6 py-2 rounded-full text-white bg-[#FF6B18]">
            <a href="#Contact">Contact Us</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
