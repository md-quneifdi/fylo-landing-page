import React from "react";
import { Container } from "../components";
import content from "../content";

const AboutUs = () => {
  return (
    <section className="bg-mainBackground">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-4 py-16">
          {content.map((item) => (
            <div
              className="box text-center flex flex-col justify-center items-center"
              key={item.id}
            >
              <img src={item.img} className="w-[70px]  " alt="..." />
              <h2 className="text-xl font-[700] mt-5">{item.tilte}</h2>
              <p className=" max-w-[420px] text-lg font-normal mt-2 text-slate-300">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
