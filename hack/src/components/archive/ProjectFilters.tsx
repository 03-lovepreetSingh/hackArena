"use client";
import React from "react";
import { Search, Filter } from "lucide-react";
export const ProjectFilters = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Project Archive</h2>
      <div className="bg-[#16161b] border border-[#2a2a2e] rounded-lg p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#949fa8]" />
            <input
              type="text"
              placeholder="Search projects by name, technology, or description"
              className="w-full bg-[#1b1b1e] border border-[#2a2a2e] rounded-md py-2 pl-10 pr-3 text-white placeholder-[#949fa8] focus:outline-none focus:ring-1 focus:ring-[#0092ff]"
            />
          </div>
          <div className="flex gap-2">
            <button className="bg-[#1b1b1e] border border-[#2a2a2e] rounded-md px-4 py-2 text-[#949fa8] hover:border-[#949fa8] transition-colors flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </button>
            <button className="bg-[#0092ff] text-white rounded-md px-4 py-2">
              Search
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          <div className="bg-[#1b1b1e] rounded-md px-3 py-1 text-sm text-[#949fa8]">
            Project Type: All
          </div>
          <div className="bg-[#1b1b1e] rounded-md px-3 py-1 text-sm text-[#949fa8]">
            Hackathon: Any
          </div>
          <div className="bg-[#1b1b1e] rounded-md px-3 py-1 text-sm text-[#949fa8]">
            Tech Stack: All
          </div>
          <div className="bg-[#1b1b1e] rounded-md px-3 py-1 text-sm text-[#949fa8]">
            Date: All Time
          </div>
          <div className="bg-[#1b1b1e] rounded-md px-3 py-1 text-sm text-[#949fa8]">
            Sort By: Newest
          </div>
        </div>
      </div>
    </div>
  );
};
