"use client";
import React from "react";
import { MoreHorizontal } from "lucide-react";
export const OpenVoting = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Open Voting</h2>
      <div className="space-y-4">
        <VotingHackathonCard
          title="Web3 Innovate Jam"
          status="Voting"
          description="The Web3 Innovate Jam is designed to inspire developers, designers, and innovators to build innovative applications that integrate the MetaMask Card..."
          votingInfo={{
            daysLeft: 8,
          }}
          techStack="All tech stack"
          level="All levels accepted"
          prize="40,000.00 USD"
          participants={405}
          detailCard={{
            title: "Web3 Innovate Jam",
            subtitle: "AI & Blockchain Edition",
            prize: "$30,000 prize pool",
            date: "May 10-12, 2024",
          }}
        />
        <VotingHackathonCard
          title="Coindora Hackfest"
          status="Voting"
          description="Coindora Hackfest is designed to inspire developers, designers, and innovators to build innovative applications that integrate the MetaMask Card..."
          votingInfo={{
            daysLeft: 7,
          }}
          techStack="All tech stack"
          level="All levels accepted"
          prize="1,000.00 USD"
          participants={405}
          detailCard={{
            title: "COINDORA HACKFEST",
            subtitle: "ASTRAL COSMOS CHALLENGE",
            prize: "$35,000 IN PRIZES",
            date: "SEPTEMBER 5-8, 2024",
          }}
        />
        <VotingHackathonCard
          title="Moca Network Identity"
          status="Live"
          description="The MetaMask Card Hackathon is designed to inspire developers, designers, and innovators to build innovative applications that integrate the MetaMask..."
          votingInfo={{
            daysLeft: 8,
          }}
          techStack="All tech stack"
          level="All levels accepted"
          prize="40,000.00 USD"
          participants={405}
          detailCard={{
            title: "MOCA NETWORK IDENTITY HOUSE",
            subtitle: "Focus: Account Identity and Reputation",
            prize: "Prize: $40,000",
            date: "When: June 27 - July 1, 2023",
          }}
        />
      </div>
    </div>
  );
};
const VotingHackathonCard = ({
  title,
  status,
  description,
  votingInfo,
  techStack,
  level,
  prize,
  participants,
  detailCard,
}) => {
  return (
    <div className="bg-[#16161b] border border-[#2a2a2e] rounded-lg p-4 flex flex-col md:flex-row">
      <div className="flex-grow">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="font-bold text-lg">{title}</h3>
          {status === "Voting" && (
            <span className="bg-purple-900/50 text-purple-400 text-xs px-2 py-0.5 rounded">
              Voting
            </span>
          )}
          {status === "Live" && (
            <span className="bg-green-900/50 text-green-400 text-xs px-2 py-0.5 rounded">
              Live
            </span>
          )}
        </div>
        <p className="text-sm text-[#949fa8] mb-4">{description}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div>
            <p className="text-xs text-[#949fa8]">Voting close</p>
            <p className="text-sm">Voting {votingInfo.daysLeft} days left</p>
          </div>
          <div>
            <p className="text-xs text-[#949fa8]">Tech stack</p>
            <p className="text-sm">{techStack}</p>
          </div>
          <div>
            <p className="text-xs text-[#949fa8]">Level</p>
            <p className="text-sm">{level}</p>
          </div>
          <div>
            <p className="text-xs text-[#949fa8]">Total prize</p>
            <p className="text-sm">{prize}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-[#2a2a2e] text-xs text-[#949fa8] px-2 py-1 rounded">
            Online
          </div>
          <div className="text-xs text-[#949fa8]">
            {participants} Participants
          </div>
          <div className="bg-[#2a2a2e] text-xs text-[#949fa8] px-2 py-1 rounded">
            Judges Only
          </div>
        </div>
      </div>
      <div className="md:w-64 mt-4 md:mt-0 md:ml-4">
        <div className="bg-[#0d0d0f] rounded-lg overflow-hidden h-full">
          <img
            src="/03-1-Dashboard.png"
            alt={title}
            className="w-full h-32 object-cover"
          />
          <div className="p-3">
            <div className="font-bold mb-1">{detailCard.title}</div>
            <div className="text-xs text-[#949fa8] mb-2">
              {detailCard.subtitle}
            </div>
            <div className="text-sm font-bold">{detailCard.prize}</div>
            <div className="text-xs text-[#949fa8]">{detailCard.date}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
