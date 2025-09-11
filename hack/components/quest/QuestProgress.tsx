"use client";
import React from "react";
export const QuestProgress = () => {
  return (
    <div className="bg-[#16161b] border border-[#2a2a2e] rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Your Quest Journey</h2>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex-1">
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <span className="text-[#949fa8]">Quest Level</span>
              <span className="text-[#0092ff]">Explorer Level 3</span>
            </div>
            <div className="h-2 bg-[#2a2a2e] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#0092ff] rounded-full"
                style={{
                  width: "65%",
                }}
              ></div>
            </div>
            <div className="flex justify-between mt-1 text-xs text-[#949fa8]">
              <span>0 XP</span>
              <span>1,500 / 2,000 XP</span>
            </div>
          </div>
          <p className="text-sm text-[#949fa8]">
            Complete 2 more quests to reach Explorer Level 4 and unlock new
            rewards!
          </p>
        </div>
        <div className="flex gap-4">
          <div className="bg-[#1b1b1e] rounded-lg p-4 flex flex-col items-center">
            <span className="text-2xl font-bold text-[#0092ff]">12</span>
            <span className="text-xs text-[#949fa8]">Completed Quests</span>
          </div>
          <div className="bg-[#1b1b1e] rounded-lg p-4 flex flex-col items-center">
            <span className="text-2xl font-bold text-[#0092ff]">3</span>
            <span className="text-xs text-[#949fa8]">Available Quests</span>
          </div>
          <div className="bg-[#1b1b1e] rounded-lg p-4 flex flex-col items-center">
            <span className="text-2xl font-bold text-[#0092ff]">1,500</span>
            <span className="text-xs text-[#949fa8]">Total XP</span>
          </div>
        </div>
      </div>
    </div>
  );
};
