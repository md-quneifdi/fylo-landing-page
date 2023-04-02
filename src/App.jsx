import React from "react";
import {
  Navbar,
  Hero,
  AboutUs,
  Services,
  Products,
  Testimonials,
  ContactUs,
  Footer,
} from "./components";

function App() {
  return (
    <div className="App text-white bg-testBackground">
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Products />
      {/* <Testimonials /> */}
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
