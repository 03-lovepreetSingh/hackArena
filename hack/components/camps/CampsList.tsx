"use client";
import React from "react";
import { Calendar, Users, Clock } from "lucide-react";
export const CampsList = () => {
  const camps = [
    {
      id: 1,
      title: "Blockchain Developer Bootcamp",
      description:
        "An intensive 8-week program to master blockchain development from fundamentals to advanced smart contract programming.",
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      startDate: "July 1, 2024",
      duration: "8 weeks",
      participants: 120,
      status: "enrolling",
      featured: true,
    },
    {
      id: 2,
      title: "DeFi Summer Camp",
      description:
        "Explore the world of decentralized finance with hands-on projects and mentorship from industry experts.",
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      startDate: "August 15, 2024",
      duration: "6 weeks",
      participants: 85,
      status: "enrolling",
      featured: false,
    },
    {
      id: 3,
      title: "Web3 Security Intensive",
      description:
        "Learn to identify and mitigate security vulnerabilities in smart contracts and decentralized applications.",
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      startDate: "September 5, 2024",
      duration: "4 weeks",
      participants: 60,
      status: "enrolling",
      featured: false,
    },
    {
      id: 4,
      title: "NFT Creator Workshop",
      description:
        "A comprehensive workshop on creating, minting, and marketing NFT collections with a focus on technical implementation.",
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      startDate: "July 20, 2024",
      duration: "3 weeks",
      participants: 95,
      status: "enrolling",
      featured: false,
    },
  ];
  const activeCamps = [
    {
      id: 5,
      title: "Smart Contract Auditing Masterclass",
      progress: 65,
      nextSession: "June 15, 2024 • 2:00 PM UTC",
      completedModules: 5,
      totalModules: 8,
    },
  ];
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Learning Camps</h2>
      {activeCamps.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Your Active Camps</h3>
          {activeCamps.map((camp) => (
            <div
              key={camp.id}
              className="bg-[#16161b] border border-[#2a2a2e] rounded-lg p-4"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-lg">{camp.title}</h4>
                  <div className="text-sm text-[#949fa8] mb-3">
                    Next session: {camp.nextSession}
                  </div>
                </div>
                <button className="bg-[#0092ff] text-white px-3 py-1 rounded-md text-sm">
                  Continue Learning
                </button>
              </div>
              <div className="mb-2">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-[#949fa8]">Course Progress</span>
                  <span>{camp.progress}%</span>
                </div>
                <div className="h-2 bg-[#2a2a2e] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#0092ff] rounded-full"
                    style={{
                      width: `${camp.progress}%`,
                    }}
                  ></div>
                </div>
              </div>
              <div className="flex justify-between text-sm text-[#949fa8]">
                <span>
                  Completed {camp.completedModules} of {camp.totalModules}{" "}
                  modules
                </span>
                <span>Certificate upon completion</span>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Featured Camp */}
      {camps
        .filter((camp) => camp.featured)
        .map((camp) => (
          <div
            key={camp.id}
            className="bg-gradient-to-r from-[#0092ff] to-[#472915] rounded-lg overflow-hidden mb-8"
          >
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <img
                    src={camp.image}
                    alt={camp.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="md:w-2/3">
                  <div className="bg-white/20 text-white text-xs px-2 py-1 rounded inline-block mb-2">
                    Featured Camp
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{camp.title}</h3>
                  <p className="mb-4">{camp.description}</p>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-white/70">Start Date</div>
                      <div>{camp.startDate}</div>
                    </div>
                    <div>
                      <div className="text-sm text-white/70">Duration</div>
                      <div>{camp.duration}</div>
                    </div>
                    <div>
                      <div className="text-sm text-white/70">Participants</div>
                      <div>{camp.participants} enrolled</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-white/90 transition-colors">
                      Enroll Now
                    </button>
                    <button className="bg-white/20 text-white px-4 py-2 rounded-md hover:bg-white/30 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      <h3 className="text-xl font-bold mb-4">Upcoming Camps</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {camps
          .filter((camp) => !camp.featured)
          .map((camp) => (
            <div
              key={camp.id}
              className="bg-[#16161b] border border-[#2a2a2e] rounded-lg overflow-hidden hover:border-[#949fa8] transition-colors"
            >
              <div className="h-40 relative">
                <img
                  src={camp.image}
                  alt={camp.title}
                  className="w-full h-full object-cover"
                />
                {camp.status === "enrolling" && (
                  <div className="absolute top-2 right-2 bg-green-900/50 text-green-400 text-xs px-2 py-0.5 rounded">
                    Enrolling Now
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{camp.title}</h3>
                <p className="text-sm text-[#949fa8] mb-4 line-clamp-2">
                  {camp.description}
                </p>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-3 w-3 mr-1 text-[#949fa8]" />
                    <span>Starts {camp.startDate}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="h-3 w-3 mr-1 text-[#949fa8]" />
                    <span>{camp.duration}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-[#949fa8]">
                    <Users className="h-3 w-3 mr-1" />
                    {camp.participants} enrolled
                  </div>
                  <button className="bg-[#0092ff] text-white px-3 py-1 rounded-md text-sm">
                    Enroll
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Past Camps</h3>
        <div className="bg-[#16161b] border border-[#2a2a2e] rounded-lg p-4">
          <div className="text-center py-6">
            <p className="text-[#949fa8] mb-2">No past camps found</p>
            <p className="text-sm text-[#949fa8]">
              Enroll in a camp to see it here after completion
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
