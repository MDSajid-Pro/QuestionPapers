// components/About.js
import React from "react";

const About = () => {
  return (
    <section className="py-12 bg-gray-100 rounded-2xl">
      <div className="container mx-auto px-4">
        <header className="text-center mb-10">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            About Us
          </h3>
          <p className="text-gray-600">
            Empowering students with easy access to academic resources.
          </p>
        </header>
        <article className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
          <p className="mb-5">
            <span className="font-semibold">1. Welcome!</span> Our platform is
            dedicated to providing students with an easy and efficient way to
            access previous year's question papers. Whether you are preparing
            for exams or reviewing past papers, we've got you covered.
          </p>
          <p className="mb-5">
            <span className="font-semibold">2. Wide Coverage:</span> We cater to
            a variety of universities and courses, including <b>B.Sc, B.A,
            B.Com, BE.d</b>, and more. Simply select your university, course,
            semester, and year to download question papers effortlessly.
          </p>
          <p>
            <span className="font-semibold">3. Our Mission:</span> To support
            your academic success by providing valuable resources at your
            fingertips, making your educational journey smoother.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;

