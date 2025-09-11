"use client";
import React from "react";
import { Heart } from "lucide-react";
export const SubmittedProjects = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Submitted Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#16161b] border border-[#2a2a2e] rounded-lg overflow-hidden">
          <div className="relative">
            <div className="bg-[#1b1b1e] h-24 flex items-center justify-center">
              <div className="text-2xl font-bold">ward</div>
            </div>
            <button className="absolute top-3 right-3 bg-[#0092ff] p-1 rounded-md flex items-center justify-center">
              <Heart className="h-4 w-4 text-white" />
              <span className="text-white text-xs ml-1">10</span>
            </button>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium mb-2">Ward</h3>
            <p className="text-sm text-[#949fa8] mb-4">
              Ward was born from a simple but radical belief: true innovation
              shouldn't ...
            </p>
            <div className="text-xs text-[#949fa8] mb-1">Last edited</div>
            <div className="text-sm mb-4">6 days ago</div>
            <div className="text-xs text-[#949fa8] mb-1">Builder</div>
            <div className="text-sm mb-4">John McKenzie</div>
            <div className="flex gap-2">
              <span className="bg-[#0092ff] bg-opacity-20 text-[#0092ff] text-xs px-3 py-1 rounded-full">
                DeFi
              </span>
              <span className="bg-[#0092ff] bg-opacity-20 text-[#0092ff] text-xs px-3 py-1 rounded-full">
                Infra
              </span>
            </div>
          </div>
        </div>
        <div className="bg-[#16161b] border border-[#2a2a2e] rounded-lg overflow-hidden">
          <div className="relative">
            <div className="bg-[#1b1b1e] h-24 flex items-center justify-center">
              <div className="text-2xl font-bold">Init Club Pro</div>
            </div>
            <button className="absolute top-3 right-3 bg-[#16161b] p-1 rounded-md flex items-center justify-center">
              <Heart className="h-4 w-4 text-white" />
              <span className="text-white text-xs ml-1">5</span>
            </button>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium mb-2">Init Club Pro</h3>
            <p className="text-sm text-[#949fa8] mb-4">
              Init Club Pro was born from a simple but radical belief: true
              innovation shouldn't ...
            </p>
            <div className="text-xs text-[#949fa8] mb-1">Last edited</div>
            <div className="text-sm mb-4">6 days ago</div>
            <div className="text-xs text-[#949fa8] mb-1">Builder</div>
            <div className="text-sm mb-4">John McKenzie</div>
            <div className="flex gap-2">
              <span className="bg-[#0092ff] bg-opacity-20 text-[#0092ff] text-xs px-3 py-1 rounded-full">
                DeFi
              </span>
              <span className="bg-[#0092ff] bg-opacity-20 text-[#0092ff] text-xs px-3 py-1 rounded-full">
                Infra
              </span>
            </div>
          </div>
        </div>
        <div className="bg-[#16161b] border border-[#2a2a2e] rounded-lg overflow-hidden">
          <div className="relative">
            <div className="bg-[#1b1b1e] h-24 flex items-center justify-center">
              <div className="text-2xl font-bold">Wiral</div>
            </div>
            <button className="absolute top-3 right-3 bg-[#16161b] p-1 rounded-md flex items-center justify-center">
              <Heart className="h-4 w-4 text-white" />
              <span className="text-white text-xs ml-1">5</span>
            </button>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium mb-2">Wiral</h3>
            <p className="text-sm text-[#949fa8] mb-4">
              Wiral was born from a simple but radical belief: true innovation
              shouldn't ...
            </p>
            <div className="text-xs text-[#949fa8] mb-1">Last edited</div>
            <div className="text-sm mb-4">6 days ago</div>
            <div className="text-xs text-[#949fa8] mb-1">Builder</div>
            <div className="text-sm mb-4">John McKenzie</div>
            <div className="flex gap-2">
              <span className="bg-[#0092ff] bg-opacity-20 text-[#0092ff] text-xs px-3 py-1 rounded-full">
                DeFi
              </span>
              <span className="bg-[#0092ff] bg-opacity-20 text-[#0092ff] text-xs px-3 py-1 rounded-full">
                Infra
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
