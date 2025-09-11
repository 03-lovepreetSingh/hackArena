"use client";
import React from "react";
import { HackathonCard } from "./HackathonCard";
export const HackathonList = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Explore Hackathons</h2>
        <button className="bg-[#0092ff] hover:bg-[#0084e5] text-white px-4 py-2 rounded-md transition-colors">
          Host a Hackathon
        </button>
      </div>
      <p className="text-[#949fa8] mb-6">
        Welcome to your hackathon dashboard! Manage projects, invite teammates,
        and track your hackathon journey with ease — all in one place.
      </p>
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="bg-[#16161b] rounded-md px-3 py-1 text-sm text-[#949fa8]">
          Total Prize: All
        </div>
        <div className="bg-[#16161b] rounded-md px-3 py-1 text-sm text-[#949fa8]">
          Ecosystem: All
        </div>
        <div className="bg-[#16161b] rounded-md px-3 py-1 text-sm text-[#949fa8]">
          Tech Stack: All
        </div>
        <div className="bg-[#16161b] rounded-md px-3 py-1 text-sm text-[#949fa8]">
          Status: Live, Upcoming
        </div>
      </div>
      <div className="mb-10">
        <HackathonCard
          title="ChainSpark Hackathon"
          status="Live"
          description="ChainSpark Hackathon was born from a simple but radical belief: true innovation shouldn't be strangled by black-box algorithms or centralized gatekeepers."
          registrationInfo={{
            type: "Registration",
            daysLeft: 12,
          }}
          techStack="All tech stack"
          level="All levels accepted"
          prize="50,000.00 USD"
          participants={455}
          imageSrc="/figma-preview.jpg"
        />
        <HackathonCard
          title="Web3 Innovate Jam"
          status="Voting"
          description="The Web3 Innovate Jam is designed to inspire developers, designers, and innovators to build innovative applications that integrate the MetaMask Card."
          registrationInfo={{
            type: "Voting",
            daysLeft: 8,
          }}
          techStack="All tech stack"
          level="All levels accepted"
          prize="40,000.00 USD"
          participants={405}
          imageSrc="/figma-preview.jpg"
        />
        <HackathonCard
          title="Coindora Hackfest"
          status="Voting"
          description="Coindora Hackfest is designed to inspire developers, designers, and innovators to build innovative applications that integrate the MetaMask Card."
          registrationInfo={{
            type: "Voting",
            daysLeft: 7,
          }}
          techStack="All tech stack"
          level="All levels accepted"
          prize="1,000.00 USD"
          participants={405}
          imageSrc="/figma-preview.jpg"
        />
        <HackathonCard
          title="Cryptovate Hack"
          status="Live"
          description="Cryptovate Hack is designed to inspire developers, designers, and innovators to build innovative applications that integrate the MetaMask Card, LIFI, and..."
          registrationInfo={{
            type: "Voting",
            daysLeft: 8,
          }}
          techStack="All tech stack"
          level="All levels accepted"
          prize="40,000.00 USD"
          participants={405}
          imageSrc="/figma-preview.jpg"
        />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-6">Past Hackathons</h2>
        <HackathonCard
          title="Ledgeforge Hackathon, Chain Security Club"
          status="Ended"
          description="Ledgeforge Hackathon, Chain Security Club: Was born from a simple but radical belief: true innovation shouldn't be strangled by black-box algorithms"
          registrationInfo={{
            type: "Winner",
            daysLeft: 0,
          }}
          techStack="All tech stack"
          level="All levels accepted"
          prize="50,000.00 USD"
          participants={405}
          imageSrc="/figma-preview.jpg"
        />
        <HackathonCard
          title="MetaMask Card Dev Cook-Off"
          status="Ended"
          description="The MetaMask Card Hackathon is designed to inspire developers, designers, and innovators to build innovative applications that integrate the MetaMask."
          registrationInfo={{
            type: "Winner",
            daysLeft: 0,
          }}
          techStack="All tech stack"
          level="All levels accepted"
          prize="40,000.00 USD"
          participants={405}
          imageSrc="/figma-preview.jpg"
        />
      </div>
    </div>
  );
};
