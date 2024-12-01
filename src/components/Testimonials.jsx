import React from "react";
import testimonialsData from "../data/testimonialsData";

const Testimonials = () => {
  return (
    <div className="py-12 bg-[#F0F0F0] rounded-lg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          What Our Students Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {testimonialsData.map((testimonialsData, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <p className="italic text-gray-600 mb-4">"{testimonialsData.quote}"</p>
              <h4 className="font-bold text-gray-800">— {testimonialsData.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
