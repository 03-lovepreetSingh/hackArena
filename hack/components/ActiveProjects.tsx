"use client";
import React from "react";
import { Link } from "react-router-dom";
import { FolderIcon, MoreHorizontal, Link2Icon } from "lucide-react";
export const ActiveProjects = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Active Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <a
          href="/create-project"
          className="border border-dashed border-[#2a2a2e] rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-[#16161b] transition-colors"
        >
          <div className="bg-[#16161b] p-4 rounded-lg mb-4">
            <FolderIcon className="h-12 w-12 text-[#0092ff]" />
          </div>
          <span className="text-[#0092ff] font-medium">Create New Project</span>
        </a>
        <div className="bg-[#16161b] border border-[#2a2a2e] rounded-lg overflow-hidden">
          <div className="p-4">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-lg">Init Club Pro</h3>
              <div className="flex space-x-2">
                <button className="p-1 rounded hover:bg-[#2a2a2e]">
                  <Link2Icon className="h-4 w-4 text-[#949fa8]" />
                </button>
                <button className="p-1 rounded hover:bg-[#2a2a2e]">
                  <MoreHorizontal className="h-4 w-4 text-[#949fa8]" />
                </button>
              </div>
            </div>
            <p className="text-sm text-[#949fa8] mb-4">
              PAIRS was born from a simple but radical belief: true innovation
              shouldn't...
            </p>
            <div className="text-xs text-[#949fa8]">
              Last edited
              <span className="ml-16">6 days ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
