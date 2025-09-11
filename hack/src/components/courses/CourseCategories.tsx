"use client";
import React from "react";
import {
  Code,
  Database,
  Shield,
  Coins,
  Layers,
  BrainCircuit,
} from "lucide-react";
export const CourseCategories = () => {
  const categories = [
    {
      name: "Smart Contracts",
      icon: <Code className="h-8 w-8" />,
      count: 12,
    },
    {
      name: "Blockchain Development",
      icon: <Database className="h-8 w-8" />,
      count: 8,
    },
    {
      name: "Security & Auditing",
      icon: <Shield className="h-8 w-8" />,
      count: 6,
    },
    {
      name: "DeFi",
      icon: <Coins className="h-8 w-8" />,
      count: 10,
    },
    {
      name: "NFTs & Digital Assets",
      icon: <Layers className="h-8 w-8" />,
      count: 5,
    },
    {
      name: "AI & Web3",
      icon: <BrainCircuit className="h-8 w-8" />,
      count: 4,
    },
  ];
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Course Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-[#16161b] border border-[#2a2a2e] rounded-lg p-4 flex flex-col items-center hover:border-[#0092ff] cursor-pointer transition-colors"
          >
            <div className="bg-[#1b1b1e] p-4 rounded-lg text-[#0092ff] mb-3">
              {category.icon}
            </div>
            <h3 className="font-medium text-center mb-1">{category.name}</h3>
            <p className="text-xs text-[#949fa8]">{category.count} courses</p>
          </div>
        ))}
      </div>
    </div>
  );
};
