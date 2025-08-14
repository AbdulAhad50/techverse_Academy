// components/PricingCard.jsx
import React from "react";
import { FaCheck } from "react-icons/fa";

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 text-gray-700">
      <FaCheck className="text-blue-500" />
      <span className="text-sm">{text}</span>
    </div>
  );
}

export default function PricingCard({ name }: { name: string }) {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-sm relative overflow-hidden">
        {/* Ribbon */}
        <div className="absolute top-4 right-0">
          <div className="bg-blue-500 text-white px-4 py-1 rounded-l-lg flex flex-col items-center">
            <span className="text-xs">1000.Rs</span>
            <span className="text-[10px]">/month</span>
          </div>
        </div>

        {/* Coin Image */}
        <div className="flex justify-center mt-6">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            🪙
          </div>
        </div>

        {/* Plan Title */}
        <div className="text-center mt-4">
          <p className="text-xs text-gray-500 tracking-widest">ADVANCE PLAN</p>
          <h2 className="text-2xl font-bold mt-1">{name}</h2>
        </div>

        {/* Features */}
        <div className="mt-6 px-6 space-y-3">
          <Feature text="Free Demo Class" />
          <Feature text="Assignment" />
          <Feature text="Quizes" />
          <Feature text="Projects" />
        </div>

        {/* Button */}
        <div className="px-6 py-6">
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition">
            Choose this plan
          </button>
        </div>
      </div>
    </div>
  );
}
