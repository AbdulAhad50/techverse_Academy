// pages/PricingCards.jsx
import { div } from "three/tsl";
import PricingCard from "./card";

const course = {
  Name: [
    "Advance Python",
    "Data Engineering",
    "Agentic Ai Development",
    "Front End Development",
    "Backend Development"
  ]
};

export default function PricingCards() {
  return (
    <>
      <h2 className="bg-[#270f71] pt-[50px] text-center text-4xl md:text-6xl font-extrabold text-white/40">
        Course Price
      </h2>

      {/* Responsive Grid */}
      <div className="bg-[#270f71] max-w-[1440px] p-[20px] 
                      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                      items-center gap-10 mx-auto">
        {course.Name.map((n, i) => {
          return <PricingCard key={i} name={n} />;
        })}
      </div>
    </>
  );
}
