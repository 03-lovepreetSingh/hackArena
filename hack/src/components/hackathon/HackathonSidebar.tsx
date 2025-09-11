"use client";
import React from "react";
import { Twitter, MessageCircle } from "lucide-react";
interface HackathonSidebarProps {
  onRegisterClick: () => void;
}
export const HackathonSidebar = ({
  onRegisterClick,
}: HackathonSidebarProps) => {
  return (
    <div className="w-80 bg-[#16161b] border-l border-[#2a2a2e] p-6 hidden lg:block">
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Left to register</h3>
        <div className="flex gap-2">
          <div className="bg-[#1b1b1e] rounded-md p-2 flex-1 flex flex-col items-center">
            <span className="text-2xl font-bold">12</span>
            <span className="text-xs text-[#949fa8]">D</span>
          </div>
          <div className="bg-[#1b1b1e] rounded-md p-2 flex-1 flex flex-col items-center">
            <span className="text-2xl font-bold">01</span>
            <span className="text-xs text-[#949fa8]">H</span>
          </div>
          <div className="bg-[#1b1b1e] rounded-md p-2 flex-1 flex flex-col items-center">
            <span className="text-2xl font-bold">42</span>
            <span className="text-xs text-[#949fa8]">M</span>
          </div>
          <div className="bg-[#1b1b1e] rounded-md p-2 flex-1 flex flex-col items-center">
            <span className="text-2xl font-bold">31</span>
            <span className="text-xs text-[#949fa8]">S</span>
          </div>
        </div>
      </div>
      <button
        onClick={onRegisterClick}
        className="w-full bg-[#0092ff] hover:bg-[#0084e5] text-white rounded-md py-3 font-medium mb-8"
      >
        Register to Hackathon
      </button>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-[#949fa8]">Registration</span>
          <span>12 days left</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#949fa8]">Tech stack</span>
          <span>All tech stack</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#949fa8]">Level</span>
          <span>All levels</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#949fa8]">Total Prize</span>
          <span>50,000.00 USD</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#949fa8]">Location</span>
          <span>Online</span>
        </div>
      </div>
      <div className="mt-8">
        <h4 className="text-[#949fa8] mb-2">Links</h4>
        <div className="flex gap-2">
          <a href="#" className="bg-[#1b1b1e] p-2 rounded-md">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" className="bg-[#1b1b1e] p-2 rounded-md">
            <MessageCircle className="h-5 w-5" />
          </a>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <h4>Project Quests</h4>
          <a href="#" className="text-[#0092ff] text-sm">
            See All
          </a>
        </div>
        <div className="mb-4">
          <h5 className="text-sm mb-2">Join Telegram Group</h5>
          <a href="#" className="text-[#0092ff] text-sm">
            Join Community
          </a>
          <div className="mt-1 flex items-center">
            <div className="h-4 w-4 rounded-full bg-green-500 flex items-center justify-center text-xs text-white">
              ✓
            </div>
          </div>
        </div>
        <div className="mb-4">
          <h5 className="text-sm mb-2">Follow Tech Fairness Hackathon on X</h5>
          <a href="#" className="text-[#0092ff] text-sm">
            Follow on X
          </a>
        </div>
        <div>
          <h5 className="text-sm mb-2">
            Join Tech Fairness Hackathon on Discord
          </h5>
          <a href="#" className="text-[#0092ff] text-sm">
            Join Discord
          </a>
        </div>
      </div>
    </div>
  );
};
