"use client";
import React from "react";
import { Award, Download, Share2 } from "lucide-react";
export const CertificationsList = () => {
  const certifications = [
    {
      id: 1,
      name: "Blockchain Developer Certification",
      issuer: "Web3 Academy",
      date: "June 15, 2024",
      image:
        "https://images.unsplash.com/photo-1569098644584-210bcd375b59?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      skills: ["Smart Contracts", "Solidity", "Web3.js"],
      status: "completed",
    },
    {
      id: 2,
      name: "DeFi Protocol Engineering",
      issuer: "ChainSpark Academy",
      date: "May 3, 2024",
      image:
        "https://images.unsplash.com/photo-1569098644584-210bcd375b59?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      skills: ["DeFi", "Yield Farming", "AMMs"],
      status: "completed",
    },
    {
      id: 3,
      name: "Smart Contract Security Auditing",
      issuer: "Secure Chain Institute",
      date: "In progress (80%)",
      image:
        "https://images.unsplash.com/photo-1569098644584-210bcd375b59?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      skills: ["Security", "Auditing", "Vulnerabilities"],
      status: "in-progress",
      progress: 80,
    },
    {
      id: 4,
      name: "NFT Development Masterclass",
      issuer: "Digital Assets Academy",
      date: "Expires on Dec 31, 2024",
      image:
        "https://images.unsplash.com/photo-1569098644584-210bcd375b59?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      skills: ["NFTs", "ERC-721", "Metadata"],
      status: "completed",
    },
  ];
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">My Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="bg-[#16161b] border border-[#2a2a2e] rounded-lg overflow-hidden"
          >
            <div className="h-40 relative">
              <img
                src={cert.image}
                alt={cert.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                {cert.status === "completed" ? (
                  <div className="bg-[#0092ff]/80 p-4 rounded-full">
                    <Award className="h-10 w-10" />
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-full bg-[#0092ff]/80 flex items-center justify-center text-xl font-bold">
                    {cert.progress}%
                  </div>
                )}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg">{cert.name}</h3>
              <p className="text-sm text-[#949fa8] mb-3">
                Issued by {cert.issuer}
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {cert.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-[#1b1b1e] text-xs px-2 py-1 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-[#949fa8]">{cert.date}</span>
                {cert.status === "completed" ? (
                  <div className="flex gap-2">
                    <button className="flex items-center gap-1 bg-[#1b1b1e] border border-[#2a2a2e] px-3 py-1 rounded-md text-sm">
                      <Share2 className="h-3 w-3" />
                      Share
                    </button>
                    <button className="flex items-center gap-1 bg-[#0092ff] text-white px-3 py-1 rounded-md text-sm">
                      <Download className="h-3 w-3" />
                      Download
                    </button>
                  </div>
                ) : (
                  <button className="bg-[#0092ff] text-white px-3 py-1 rounded-md text-sm">
                    Continue Course
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">
          Recommended Certifications
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#16161b] border border-[#2a2a2e] rounded-lg p-4 hover:border-[#949fa8] transition-colors cursor-pointer">
            <h4 className="font-medium mb-2">
              Zero Knowledge Proofs Certification
            </h4>
            <p className="text-sm text-[#949fa8] mb-3">
              Learn advanced cryptography and ZK-proofs implementation
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-[#949fa8]">
                Intermediate • 6 weeks
              </span>
              <button className="bg-[#0092ff] text-white px-2 py-1 rounded text-xs">
                Enroll
              </button>
            </div>
          </div>
          <div className="bg-[#16161b] border border-[#2a2a2e] rounded-lg p-4 hover:border-[#949fa8] transition-colors cursor-pointer">
            <h4 className="font-medium mb-2">Layer 2 Solutions Architect</h4>
            <p className="text-sm text-[#949fa8] mb-3">
              Master scalability solutions for Ethereum and beyond
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-[#949fa8]">Advanced • 8 weeks</span>
              <button className="bg-[#0092ff] text-white px-2 py-1 rounded text-xs">
                Enroll
              </button>
            </div>
          </div>
          <div className="bg-[#16161b] border border-[#2a2a2e] rounded-lg p-4 hover:border-[#949fa8] transition-colors cursor-pointer">
            <h4 className="font-medium mb-2">Cross-Chain Development</h4>
            <p className="text-sm text-[#949fa8] mb-3">
              Build applications that work across multiple blockchains
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-[#949fa8]">
                Intermediate • 5 weeks
              </span>
              <button className="bg-[#0092ff] text-white px-2 py-1 rounded text-xs">
                Enroll
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
