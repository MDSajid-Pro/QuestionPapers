// components/Testimonials.js
import React from "react";

const Testimonials = () => {
  return (
    <div className=" py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center pt-7 text-gray-800 mb-8">
          What Our Students Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <p className="italic text-gray-600">
              "This platform has been incredibly helpful for exam preparation! I
              was able to find all the question papers I needed."
            </p>
            <h4 className="mt-4 font-bold">— Ayesha, B.Sc. Student</h4>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <p className="italic text-gray-600">
              "The best resource for old papers. I always recommend this website
              to my classmates!"
            </p>
            <h4 className="mt-4 font-bold">— Sadiya Anjum, B.A. Student</h4>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <p className="italic text-gray-600">
              "It's very easy to use and has made my preparation stress-free!"
            </p>
            <h4 className="mt-4 font-bold">— Kaif Ali, B.Com. Student</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
