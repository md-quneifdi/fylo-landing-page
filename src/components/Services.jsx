import React, { createElement } from "react";
import { Container } from "../components";
import { BsFillArrowRightCircleFill as arrow } from "react-icons/bs";
import productive from "../assets/images/illustration-stay-productive.png";

const Services = () => {
  return (
    <section className="bg-mainBackground">
      <Container>
        <div className="flex flex-col lg:flex-row items-center py-16">
          <div className="flex-1">
            <img src={productive} className="w-full" alt="..." />
          </div>
          <div className="info mt-14 lg:mt-0 md:ml-11 flex-1">
            <h2 className="text-xl md:text-4xl lg:text-5xl font-[700]">
              Stay productive, wherever you are
            </h2>
            <p className="text-[18px] font-normal text-slate-300 my-5">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p className="text-[18px] font-normal text-slate-300 mt-5">
              {" "}
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
            <button
              className="group flex justify-center items-center 
              border-b-2 border-[#62e0d9] hover:border-white
              py-1 mt-5 cursor-pointer text-[#62e0d9]
              hover:text-white text-[18px]"
            >
              <a href="#">See how Fylo works</a>
              <span className="ml-2">{createElement(arrow)}</span>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;
