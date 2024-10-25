// components/About.js
import React from "react";

const About = () => {
  return (
    <div className=" py-12">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center pt-7 text-gray-700 mb-8">
          About Us
        </h3>
        <div className="text-clip  mx-6">
          <p className="mb-3">
            1. Welcome to our paper download platform! We are dedicated
            to providing students with an easy and efficient way to access
            previous year's question papers. Whether you are preparing for your
            exams or want to review past papers, we've got you covered.
          </p>
          <p className="mb-3">
            2. Our platform covers a wide range of universities and courses,
            including <b>B.Sc., B.A., B.Com,</b> and more. Simply choose your
            university, course, semester, and year, and download the question
            papers with just a few clicks.
          </p>
          <p className="mb-3">
            3. We aim to make your academic journey smoother and help you succeed
            in your studies by providing valuable resources at your fingertips.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
