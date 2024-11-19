import React from 'react'
import About from "./About";
import SelectionForm from "./SelectionForm";
import Footer from "./Footer";
import Testimonials from "./Testimonials";
import ContactForm from "./ContactForm";

const Home = () => {
  return (
    <div className="App">
      <div className="container mx-auto p-5">
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
  )
}

export default Home