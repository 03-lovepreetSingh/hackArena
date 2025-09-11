"use client";
import React from "react";
export const FeaturedHackathon = () => {
  return (
    <div className="rounded-xl overflow-hidden bg-gradient-to-r from-[#0092ff] to-[#472915] text-white mb-8">
      <div className="p-8 relative">
        <div className="absolute top-4 left-4 bg-white/20 rounded-full px-3 py-1 text-xs">
          Featured
        </div>
        <div className="mt-8">
          <h1 className="text-4xl font-bold mb-4">Open Source Frontier</h1>
          <h2 className="text-3xl font-bold mb-6">AI x WEB3 x Transparency</h2>
          <div className="grid grid-cols-3 gap-6 mb-6 max-w-lg">
            <div>
              <div className="text-sm text-white/70">Registration close</div>
              <div>Registration 12 days left</div>
            </div>
            <div>
              <div className="text-sm text-white/70">Tech stack</div>
              <div>All tech stacks</div>
            </div>
            <div>
              <div className="text-sm text-white/70">Level</div>
              <div>All levels accepted</div>
            </div>
          </div>
          <div className="mb-6">
            <div className="text-sm text-white/70">Total prize</div>
            <div className="text-xl font-bold">50,000.00 USD</div>
          </div>
          <button className="bg-white text-black rounded-md px-4 py-2 hover:bg-white/90 transition-colors flex items-center">
            Start Register
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
