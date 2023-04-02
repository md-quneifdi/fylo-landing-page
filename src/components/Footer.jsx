import React, { createElement } from "react";
import logo from "../assets/images/logo.svg";
import location from "../assets/images/icon-location.svg";
import phone from "../assets/images/icon-phone.svg";
import email from "../assets/images/icon-email.svg";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="bg-fBackground">
      {/* container */}
      <div className="md:container mx-auto px-5 py-3 md:px-8 lg:px-16">
        {/* logo */}
        <div className="">
          <img src={logo} alt="..." />
        </div>
        {/* logo */}
        {/* info */}
        <div
          className="grid grid-cols-1 lg:grid-cols-5 lg:justify-items-center lg:items-center
            gap-x-4 py-10 text-slate-300"
        >
          <div className="flex-1 flex justify-center items-center relative">
            <div className="w-[18px] absolute -left-[6px] top-1">
              <img
                src={location}
                className="w-full object-fill align-top"
                alt="..."
              />
            </div>
            <div className="hover:text-white ml-6 sm:-ml-[34%] lg:ml-6">
              <p className="min-w-[250px] max-w-[400px] text-[15px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
          </div>

          {/* start contact */}
          <div className="contact flex-1 flex flex-col ml-5 mt-7 lg:mt-0">
            <div className="flex mb-5">
              <img src={phone} className="w-6 h-5" alt="..." />
              <p className="ml-5">+1-543-123-4567</p>
            </div>
            <div className="flex">
              <img src={email} className="w-6 h-5" alt="..." />
              <p className="ml-5">example@fylo.com</p>
            </div>
          </div>
          {/* end contact */}
          {/* start links1 */}
          <div className="flex flex-col text-left mt-12 lg:mt-4 ml-4">
            <h2
              className="text-[18px] font-semibold hover:text-white w-full
               duration-300 cursor-default "
            >
              About Us
            </h2>
            <ul className="w-full mt-1">
              <li>Jobs</li>
              <li className="my-1">Press</li>
              <li className="">Blog</li>
            </ul>
          </div>
          {/* end links1 */}
          {/* start links2 */}
          <div className="flex-1 flex flex-col justify-center items-start ml-4 mt-12 lg:mt-0">
            <h2
              className="text-[18px] font-semibold hover:text-white
               duration-300 cursor-default flex-1"
            >
              Contact Us
            </h2>
            <ul className="flex-1 mt-1">
              <li>Terms</li>
              <li className="mt-1">Privacy</li>
            </ul>
          </div>
          {/* end links2 */}
          {/* social icons */}
          <div className="flex justify-center items-center lg:relative mt-12 lg:mt-0">
            <ul className="flex-1 flex justify-center items-center relative -translate-y-3">
              <li
                className="w-10 h-10 text-xl hover:text-cyan-500 grid place-items-center 
              border-2 border-slate-200 hover:border-cyan-500 rounded-full mr-5"
              >
                {createElement(BsFacebook)}
              </li>
              <li
                className="w-10 h-10 text-xl hover:text-cyan-500 grid place-items-center 
              border-2 border-slate-200 hover:border-cyan-500 rounded-full mr-5"
              >
                {createElement(BsTwitter)}
              </li>
              <li
                className="w-10 h-10 text-xl hover:text-cyan-500 grid place-items-center 
              border-2 border-slate-200 hover:border-cyan-500 rounded-full "
              >
                {createElement(BsInstagram)}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
