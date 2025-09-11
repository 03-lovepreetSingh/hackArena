"use client";
import React from "react";
import { Trophy, Gift, Award } from "lucide-react";
export const QuestRewards = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Quest Rewards</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#16161b] border border-[#2a2a2e] rounded-lg p-6 flex flex-col items-center">
          <div className="bg-[#1b1b1e] p-4 rounded-full mb-4">
            <Trophy className="h-8 w-8 text-[#0092ff]" />
          </div>
          <h3 className="font-bold text-center mb-2">Exclusive NFT Badge</h3>
          <p className="text-sm text-[#949fa8] text-center mb-4">
            Earn a unique NFT badge for completing all Explorer level quests
          </p>
          <div className="mt-auto">
            <button className="bg-[#0092ff] text-white px-4 py-2 rounded-md w-full">
              View Details
            </button>
          </div>
        </div>
        <div className="bg-[#16161b] border border-[#2a2a2e] rounded-lg p-6 flex flex-col items-center">
          <div className="bg-[#1b1b1e] p-4 rounded-full mb-4">
            <Gift className="h-8 w-8 text-[#0092ff]" />
          </div>
          <h3 className="font-bold text-center mb-2">
            Community Token Rewards
          </h3>
          <p className="text-sm text-[#949fa8] text-center mb-4">
            Earn tokens for completing quests that can be redeemed for prizes
          </p>
          <div className="mt-auto">
            <button className="bg-[#0092ff] text-white px-4 py-2 rounded-md w-full">
              View Details
            </button>
          </div>
        </div>
        <div className="bg-[#16161b] border border-[#2a2a2e] rounded-lg p-6 flex flex-col items-center">
          <div className="bg-[#1b1b1e] p-4 rounded-full mb-4">
            <Award className="h-8 w-8 text-[#0092ff]" />
          </div>
          <h3 className="font-bold text-center mb-2">
            Early Access Privileges
          </h3>
          <p className="text-sm text-[#949fa8] text-center mb-4">
            Get early access to new features and upcoming hackathons
          </p>
          <div className="mt-auto">
            <button className="bg-[#0092ff] text-white px-4 py-2 rounded-md w-full">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
