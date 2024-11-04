import React from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import SelectionForm from "./components/SelectionForm";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";

const App = () => {
  return (
    <div className="App font-sans">
      <div id="home" className="sticky top-0 z-50">
        <NavBar />
      </div>
      <div className="container mx-auto p-5 font-sans">
        <SelectionForm />
        <div id="about">
          <About />
        </div>
        <div id="testimonial">
          <Testimonials />
        </div>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
