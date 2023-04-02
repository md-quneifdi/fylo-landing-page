import React from "react";
import logo from "../assets/images/logo.svg";

const Navbar = () => {
  return (
    <nav>
      <div className="md:container px-5 py-8 md:px-4 md:py-8 lg:px-16 mx-auto">
        <div className="navbar w-full flex pt-4">
          <div className="logo w-[120px] h-[30px] md:w-[175px] md:h-[52px]">
            <img src={logo} className="w-full h-full" alt="..." />
          </div>
          <ul className="flex-1 flex justify-end items-center text-slate-300">
            <li>
              <a
                href="#"
                className="hover:underline hover:underline-offset-2 hover:text-white mr-5 md:mr-10"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:underline-offset-2 hover:text-white mr-5 md:mr-10"
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline hover:underline-offset-2 hover:text-white "
              >
                Sign in
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
