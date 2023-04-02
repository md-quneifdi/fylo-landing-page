import React, { useState } from "react";
import { Container } from ".";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(false);

  const emailValidation = (e) => {
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{1,3}$/;
    let emailValue = e.target.value;
    setEmail(emailValue);

    if (email.match(pattern)) {
      setMessage(true);
    } else {
      setMessage(false);
    }
  };

  return (
    <section className="bg-fBackground">
      <div className="md:container mx-auto px-5 py-2 md:px-8 lg:px-16">
        <div
          className="py-12 bg-testBackground mx-auto max-w-[900px] shadow-lg
         flex flex-col justify-center items-center rounded-lg relative -top-32"
        >
          <h1 className="text-3xl font-semibold px-3">
            Get early access today
          </h1>
          <p className="text-lg font-normal max-w-[470px] text-center mt-5 p-5">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
          <div
            className="mt-5 flex flex-col lg:flex-row justify-center items-center gap-5
           w-[95%]  lg:w-[80%] mx-auto"
          >
            <div
              className="flex-1 flex flex-col justify-center items-center relative
             w-[80%] md:w-[60%] lg:w-[70%]"
            >
              <input
                type="email"
                value={email}
                onChange={emailValidation}
                className="px-6 py-[10px] w-full rounded-full
                 text-black outline-none lg:ml-5"
              />
              <p
                className={`absolute lg:left-[35px] top-12 block
              ${
                email.length == 0
                  ? "hidden"
                  : message
                  ? "text-green-500"
                  : "text-red-500"
              }`}
              >
                {message ? "your email is valid" : "please enter a valid email"}
              </p>
            </div>
            <div
              className={`flex justify-start items-center
             ${email.length == 0 ? "mt-0" : "lg:mt-0 mt-5"}`}
            >
              <button
                className="bg-blueGradient hover:bg-cyanGradient w-[220px] px-6 py-[10px]
               rounded-full cursor-pointer lg:mr-10"
              >
                Get Started For Free
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
