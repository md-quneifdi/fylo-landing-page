import React from "react";
import { Container } from "../components";
import hero from "../assets/images/illustration-intro.png";
import curvyDesk from "../assets/images/bg-curvy-desktop.svg";
import curvyMob from "../assets/images/bg-curvy-mobile.svg";

const Hero = () => {
  return (
    <section className="w-full relative">
      <Container>
        <div className="hero flex flex-col justify-center items-center">
          <div className="img max-w-[700px] h-[300px] md:h-[400px] relative z-10">
            <img src={hero} className="w-full h-full" alt="..." />
          </div>
          <div className="text flex flex-col justify-center items-center mt-8 z-10">
            <h1 className="text-3xl text-center font-semibold max-w-[600px]">
              All your files in one secure location, accessible anywhere.
            </h1>
            <p className="text-lg text-slate-300 text-center font-normal max-w-[500px] mt-8">
              Fylo stores all your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends
              family, and co-workers.
            </p>
            <button
              className="w-[200px] rounded-full cursor-pointer text-lg tracking-[1px] font-medium
             py-3 px-6 bg-blueGradient hover:bg-cyanGradient mt-5"
            >
              {" "}
              Get Started
            </button>
          </div>
        </div>
      </Container>
      <div className="w-full absolute -bottom-2 md:bottom-0 z-0">
        <img src={curvyDesk} className="hidden md:block w-full" alt="" />
        <img src={curvyMob} className="block md:hidden w-full" alt="" />
      </div>
    </section>
  );
};

export default Hero;
