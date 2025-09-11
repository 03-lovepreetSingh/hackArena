"use client";
import React from "react";
import { Award, Code, MessageSquare, Users } from "lucide-react";
export const QuestList = () => {
  const quests = [
    {
      id: 1,
      title: "Submit Your First Project",
      description: "Create and submit your first project to any hackathon",
      icon: <Code className="h-6 w-6" />,
      xp: 500,
      status: "active",
      progress: 0,
      category: "Build",
    },
    {
      id: 2,
      title: "Join Web3 Innovate Jam",
      description: "Register for the Web3 Innovate Jam hackathon",
      icon: <Award className="h-6 w-6" />,
      xp: 200,
      status: "active",
      progress: 0,
      category: "Participate",
    },
    {
      id: 3,
      title: "Complete Introduction to Web3 Course",
      description: "Finish all lessons in the Introduction to Web3 course",
      icon: <Award className="h-6 w-6" />,
      xp: 300,
      status: "active",
      progress: 0,
      category: "Learn",
    },
    {
      id: 4,
      title: "Join Community Discussion",
      description: "Participate in at least 3 community discussions",
      icon: <MessageSquare className="h-6 w-6" />,
      xp: 100,
      status: "in-progress",
      progress: 33,
      category: "Community",
    },
    {
      id: 5,
      title: "Invite Team Members",
      description: "Invite 3 friends to join your project team",
      icon: <Users className="h-6 w-6" />,
      xp: 150,
      status: "in-progress",
      progress: 66,
      category: "Team",
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Available Quests</h2>
        <div className="flex gap-2">
          <button className="bg-[#16161b] rounded-md px-3 py-1 text-sm text-[#949fa8]">
            All
          </button>
          <button className="bg-[#16161b] rounded-md px-3 py-1 text-sm text-[#949fa8]">
            Build
          </button>
          <button className="bg-[#16161b] rounded-md px-3 py-1 text-sm text-[#949fa8]">
            Learn
          </button>
          <button className="bg-[#16161b] rounded-md px-3 py-1 text-sm text-[#949fa8]">
            Community
          </button>
        </div>
      </div>
      <div className="space-y-4">
        {quests.map((quest) => (
          <div
            key={quest.id}
            className="bg-[#16161b] border border-[#2a2a2e] rounded-lg p-4 flex items-center"
          >
            <div className="bg-[#1b1b1e] p-4 rounded-lg text-[#0092ff] mr-4">
              {quest.icon}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold">{quest.title}</h3>
                  <p className="text-sm text-[#949fa8]">{quest.description}</p>
                </div>
                <div className="bg-[#1b1b1e] px-3 py-1 rounded-full text-xs text-[#949fa8]">
                  {quest.category}
                </div>
              </div>
              {quest.status === "in-progress" && (
                <div className="mt-2">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-[#949fa8]">Progress</span>
                    <span>{quest.progress}%</span>
                  </div>
                  <div className="h-1.5 bg-[#2a2a2e] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#0092ff] rounded-full"
                      style={{
                        width: `${quest.progress}%`,
                      }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
            <div className="ml-4 flex flex-col items-end">
              <div className="text-lg font-bold text-[#0092ff]">
                {quest.xp} XP
              </div>
              <button className="bg-[#0092ff] text-white px-3 py-1 rounded-md text-sm mt-2">
                {quest.status === "in-progress" ? "Continue" : "Start Quest"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
