"use client";
import React from "react";
export const Schedule = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">ChainSpark Hackathon</h1>
      <div className="grid grid-cols-1 divide-y divide-[#2a2a2e]">
        <div className="py-6">
          <div className="bg-[#0092ff] text-white p-4 rounded-md inline-block mb-4">
            <div>Jun 17, 2025 19:00 -</div>
            <div>Jul 19, 2025 19:00</div>
          </div>
        </div>
        <div className="py-6">
          <div className="mb-4">Jun 26, 2025 15:00</div>
        </div>
        <div className="py-6">
          <div className="mb-4">Jun. 28, 2025; 15:00</div>
          <div className="bg-green-500 text-black text-xs font-medium px-2 py-1 rounded-full inline-block">
            Live
          </div>
          <div className="text-xl font-bold mt-2">Registration</div>
        </div>
        <div className="py-6">
          <div className="mb-4">Jun. 30, 2025; 15:00</div>
        </div>
        <div className="py-6">
          <div className="mb-4">
            <div>Jul 19, 2025 19:00 -</div>
            <div>Jul 30, 2025 19:00</div>
          </div>
        </div>
        <div className="py-6">
          <div className="mb-4">Aug 3, 2025 19:00</div>
        </div>
      </div>
    </div>
  );
};
