"use client";
import React from "react";
import { MoreHorizontal } from "lucide-react";
import { HackathonCard } from "./HackathonCard";
export const RegisteredHackathons = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Registered Hackathons</h2>
      <div className="space-y-4">
        <HackathonCardDetailed
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
          imageSrc="/03-1-Dashboard.png"
          detailCard={{
            title: "HACKATHON",
            subtitle: "DeFi Builders Edition",
            info: "Smart Contracts & Protocol Innovation",
            prize: "$38,000",
            date: "OCTOBER 12-16, 2024",
          }}
        />
      </div>
    </div>
  );
};
const HackathonCardDetailed = ({
  title,
  status,
  description,
  registrationInfo,
  techStack,
  level,
  prize,
  imageSrc,
  detailCard,
}) => {
  return (
    <div className="bg-[#16161b] border border-[#2a2a2e] rounded-lg p-4 flex flex-col md:flex-row">
      <div className="flex-grow">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="font-bold text-lg">{title}</h3>
          {status === "Live" && (
            <span className="bg-green-900/50 text-green-400 text-xs px-2 py-0.5 rounded">
              Live
            </span>
          )}
        </div>
        <p className="text-sm text-[#949fa8] mb-4">{description}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div>
            <p className="text-xs text-[#949fa8]">Registration close</p>
            <p className="text-sm">
              Registration {registrationInfo.daysLeft} days left
            </p>
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
        <div className="flex gap-2">
          <button className="bg-[#0092ff] text-white px-4 py-2 rounded-md flex items-center gap-2">
            Submit Project
            <span>→</span>
          </button>
          <button className="border border-[#2a2a2e] px-3 py-2 rounded-md">
            <MoreHorizontal className="h-4 w-4 text-[#949fa8]" />
          </button>
        </div>
      </div>
      <div className="md:w-64 mt-4 md:mt-0 md:ml-4">
        <div className="bg-[#0d0d0f] rounded-lg overflow-hidden">
          <div className="h-32 bg-gradient-to-r from-blue-600 to-purple-600 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={imageSrc}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="p-3">
            <div className="text-xs text-[#949fa8] mb-1">
              {detailCard.title}
            </div>
            <div className="font-bold mb-1">{detailCard.subtitle}</div>
            <div className="text-xs text-[#949fa8] mb-2">{detailCard.info}</div>
            <div className="text-lg font-bold">{detailCard.prize}</div>
            <div className="text-xs text-[#949fa8]">{detailCard.date}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
