"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
export const HackathonSubmission = ({ projectData, updateProjectData }) => {
  const hackathons = [
    {
      id: "web3-jam",
      title: "Web3 Innovate Jam",
      isLive: true,
      description:
        "The Web3 Innovate Jam is designed to inspire developers, designers, and innovators to build innovative applications that integrate the MetaMask Card...",
      registrationDays: 12,
      techStack: "All tech stack",
      level: "All levels accepted",
      prize: "50,000.00 USD",
      image: "/04-3-Submit-to-Hackathon.png",
      details: {
        subtitle: "AI & Blockchain Edition",
        prize: "$30,000 prize pool",
        date: "May 10-12, 2024",
      },
    },
    {
      id: "coindora",
      title: "Coindora Hackfest",
      isLive: true,
      description:
        "Coindora Hackfest was born from a simple but radical belief: true innovation shouldn't be strangled by black-box algorithms or centralized gatekeepers. In an era...",
      registrationDays: 12,
      techStack: "All tech stack",
      level: "All levels accepted",
      prize: "50,000.00 USD",
      image: "/04-3-Submit-to-Hackathon.png",
      details: {
        subtitle: "ASTRAL COSMOS CHALLENGE",
        prize: "$35,000 IN PRIZES",
        date: "SEPTEMBER 5-9, 2024",
      },
    },
  ];
  const handleSelectHackathon = (hackathonId) => {
    updateProjectData({
      selectedHackathon: hackathonId,
    });
  };
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <section>
        <h2 className="text-xl font-bold mb-2">Submit Project to Hackathon</h2>
        <p className="text-[#949fa8] mb-6">
          Select an existing hackathon to submit your project to.
          <br />
          This way your project will appear in hackathon project gallery early.
          You can always submit your project to hackathon later
        </p>
        <div className="space-y-6">
          {hackathons.map((hackathon) => (
            <div
              key={hackathon.id}
              className="bg-[#16161b] border border-[#2a2a2e] rounded-lg p-4 flex flex-col md:flex-row"
            >
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-bold text-lg">{hackathon.title}</h3>
                  {hackathon.isLive && (
                    <span className="bg-green-900/50 text-green-400 text-xs px-2 py-0.5 rounded">
                      Live
                    </span>
                  )}
                </div>
                <p className="text-sm text-[#949fa8] mb-4">
                  {hackathon.description}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-[#949fa8]">Registration close</p>
                    <p className="text-sm">
                      Registration {hackathon.registrationDays} days left
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-[#949fa8]">Tech stack</p>
                    <p className="text-sm">{hackathon.techStack}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#949fa8]">Level</p>
                    <p className="text-sm">{hackathon.level}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#949fa8]">Total prize</p>
                    <p className="text-sm">{hackathon.prize}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    className={`px-4 py-2 rounded-md flex items-center gap-2 ${
                      projectData.selectedHackathon === hackathon.id
                        ? "bg-[#0092ff] text-white"
                        : "border border-[#2a2a2e] text-[#949fa8] hover:text-white"
                    }`}
                    onClick={() => handleSelectHackathon(hackathon.id)}
                  >
                    Submit to this Hackathon
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="md:w-64 mt-4 md:mt-0 md:ml-4">
                <div className="bg-[#0d0d0f] rounded-lg overflow-hidden">
                  <div className="h-32 relative">
                    <img
                      src={hackathon.image}
                      alt={hackathon.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <div className="font-bold mb-1">
                      {hackathon.details.subtitle}
                    </div>
                    <div className="text-lg font-bold">
                      {hackathon.details.prize}
                    </div>
                    <div className="text-xs text-[#949fa8]">
                      {hackathon.details.date}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
