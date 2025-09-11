"use client";
import React from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
export const ProjectSidebar = ({ steps, currentStep, setCurrentStep }) => {
  return (
    <div className="w-64 bg-[#16161b] border-r border-[#2a2a2e] h-screen">
      <div className="p-4">
        <div className="mb-8">
          <Link to="/" className="flex items-center gap-2">
            <X className="h-6 w-6 text-[#0092ff]" />
          </Link>
        </div>
        <div className="space-y-1">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex items-center gap-2 p-3 rounded-md cursor-pointer ${
                currentStep === index
                  ? "bg-[#1b1b1e] text-[#0092ff]"
                  : "text-[#949fa8] hover:bg-[#1b1b1e] hover:text-white"
              }`}
              onClick={() => index <= currentStep && setCurrentStep(index)}
            >
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center text-xs 
                ${
                  currentStep >= index
                    ? "bg-[#0092ff] text-white"
                    : "bg-[#2a2a2e] text-[#949fa8]"
                }`}
              >
                {index + 1}
              </div>
              <span>{step.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
