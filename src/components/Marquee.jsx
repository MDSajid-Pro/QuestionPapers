import React from "react";

const Marquee = () => {
  return (
    <div className="overflow-hidden rounded-3xl bg-[#F0F0F0] py-2">
      <div className="flex animate-scroll whitespace-nowrap text-blue-700 text-sm  md:text-lg">
        <span className="font-medium mx-6 tracking-wider ">
          Access question papers for all courses & semesters in just a few
          clicks! Start exploring now!."New question papers added! Stay ahead
          with the latest updates!". Looking for previous year's question
          papers? We've got you covered!
        </span>
      </div>
    </div>
  );
};

export default Marquee;
