import React from "react";
import Card from "./Card";

const Course = () => {
  return (
    <div className="max-w-[1440px] min-h-[550px] bg-[#270f71] px-4 sm:px-8 md:px-[100px] py-8">
      
      {/* Title */}
      <div className="w-full flex justify-center text-center">
        <h3 className="text-[#ffffff3c] text-[32px] sm:text-[48px] md:text-[63px] font-extrabold">
          New courses
        </h3>
      </div>

      {/* Cards */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 mt-6">
        <Card name={"Agentic Ai Development"} image={"c1.png"} id={"1"} />
        <Card name={"Data Engineering"} image={"c2.png"} id={"2"} />
      </div>
    </div>
  );
};

export default Course;

