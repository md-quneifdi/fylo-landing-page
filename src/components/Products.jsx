import React from "react";
import { Container } from "../components";
import { testimonials } from "../content";
import quotes from "../assets/images/bg-quotes.png";

const Products = () => {
  return (
    <section className="bg-mainBackground">
      <Container>
        <div
          className="main w-full pt-16 pb-[200px] flex flex-col justify-between items-center
         lg:flex-row flex-wrap"
        >
          {/* boxes that contain the qouats */}
          {testimonials.map((item, i) => (
            <div
              key={item.id}
              className={`box flex-1 flex flex-col justify-center items-center pt-10 pb-8 px-5
             shadow-lg shadow-testBackground/60 bg-testBackground 
             rounded-lg mt-5 lg:mt-0 lg:ml-5 relative z-10`}
            >
              <img
                src={quotes}
                className={`absolute -left-3 md:-left-5 -top-8 w-14 h-14 z-0
                ${i === 0 ? "block" : "hidden"}`}
                alt="..."
              />
              <p className="w-full text-[18px] text-slate-200 font-medium">
                {item.text}
              </p>
              <div className="info flex justify-start items-center mt-5 w-full">
                <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                  <img
                    src={item.avatar}
                    className="w-full h-full object-cover"
                    alt="..."
                  />
                </div>
                <div className="ml-5">
                  <h2 className="text-[18px] text-slate-300 font-semibold">
                    {item.title}
                  </h2>
                  <h3 className="text-[15px] text-slate-300 font-normal">
                    {item.subTitle}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Products;
