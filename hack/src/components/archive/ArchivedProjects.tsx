"use client";
import React from "react";
import { ExternalLink, Award } from "lucide-react";
export const ArchivedProjects = () => {
  const projects = [
    {
      id: 1,
      name: "DeFi Yield Optimizer",
      description:
        "An automated yield farming protocol that optimizes returns across multiple DeFi platforms",
      hackathon: "Web3 Innovate Jam",
      date: "May 2024",
      tech: ["Solidity", "React", "Ethers.js"],
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      award: "1st Place",
      team: ["Alex K.", "Maria L.", "John D."],
    },
    {
      id: 2,
      name: "NFT Marketplace",
      description:
        "A decentralized marketplace for trading NFTs with low fees and cross-chain compatibility",
      hackathon: "ChainSpark Hackathon",
      date: "April 2024",
      tech: ["Solidity", "Next.js", "Hardhat"],
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      award: "2nd Place",
      team: ["Sarah M.", "David R."],
    },
    {
      id: 3,
      name: "DAO Governance Tool",
      description:
        "A comprehensive governance tool for DAOs with proposal creation, voting, and execution",
      hackathon: "Coindora Hackfest",
      date: "March 2024",
      tech: ["Solidity", "TypeScript", "Graph Protocol"],
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      award: "Finalist",
      team: ["Michael W.", "Elena R.", "Thomas B.", "Sophia L."],
    },
    {
      id: 4,
      name: "Cross-Chain Bridge",
      description:
        "A secure and efficient bridge for transferring assets between different blockchain networks",
      hackathon: "MetaMask Card Dev Cook-Off",
      date: "February 2024",
      tech: ["Rust", "Solidity", "React"],
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      award: "3rd Place",
      team: ["James K.", "Olivia P."],
    },
  ];
  return (
    <div className="space-y-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-[#16161b] border border-[#2a2a2e] rounded-lg p-4 flex flex-col md:flex-row"
        >
          <div className="md:w-64 h-40 mb-4 md:mb-0 md:mr-4">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <div>
                <h3 className="font-bold text-lg">{project.name}</h3>
                <p className="text-sm text-[#949fa8]">
                  {project.hackathon} • {project.date}
                </p>
              </div>
              {project.award && (
                <div className="flex items-center mt-2 md:mt-0 bg-[#1b1b1e] px-3 py-1 rounded-full">
                  <Award className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="text-sm">{project.award}</span>
                </div>
              )}
            </div>
            <p className="text-[#949fa8] mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="bg-[#1b1b1e] text-xs px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div className="flex items-center mb-3 md:mb-0">
                <div className="flex -space-x-2">
                  {project.team.slice(0, 3).map((member, index) => (
                    <div
                      key={index}
                      className="h-6 w-6 rounded-full bg-[#0092ff] flex items-center justify-center text-xs border border-[#16161b]"
                    >
                      {member.charAt(0)}
                    </div>
                  ))}
                  {project.team.length > 3 && (
                    <div className="h-6 w-6 rounded-full bg-[#1b1b1e] flex items-center justify-center text-xs border border-[#16161b]">
                      +{project.team.length - 3}
                    </div>
                  )}
                </div>
                <span className="text-xs text-[#949fa8] ml-2">
                  {project.team.length} team members
                </span>
              </div>
              <div className="flex gap-2">
                <button className="flex items-center gap-1 bg-[#1b1b1e] border border-[#2a2a2e] px-3 py-1 rounded-md text-sm">
                  <div className="h-4 w-4" />
                  Code
                </button>
                <button className="flex items-center gap-1 bg-[#1b1b1e] border border-[#2a2a2e] px-3 py-1 rounded-md text-sm">
                  <ExternalLink className="h-4 w-4" />
                  Demo
                </button>
                <button className="bg-[#0092ff] text-white px-3 py-1 rounded-md text-sm">
                  View Project
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="mt-6 text-center">
        <button className="border border-[#2a2a2e] text-[#949fa8] px-4 py-2 rounded-md hover:border-[#949fa8] hover:text-white transition-colors">
          Load More Projects
        </button>
      </div>
    </div>
  );
};
