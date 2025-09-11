"use client";
import React from "react";
import {
  Search,
  MessageSquare,
  Users,
  ThumbsUp,
  Eye,
  Clock,
  Filter,
} from "lucide-react";
export const DiscussionBoard = () => {
  const categories = [
    {
      name: "All Topics",
      count: 342,
    },
    {
      name: "Technical Support",
      count: 124,
    },
    {
      name: "Project Ideas",
      count: 86,
    },
    {
      name: "Hackathon Help",
      count: 57,
    },
    {
      name: "General Discussion",
      count: 75,
    },
  ];
  const discussions = [
    {
      id: 1,
      title: "How to optimize gas fees for complex smart contracts?",
      author: "Alex K.",
      authorAvatar: "A",
      category: "Technical Support",
      replies: 12,
      views: 156,
      likes: 24,
      timeAgo: "2 hours ago",
      solved: true,
    },
    {
      id: 2,
      title: "Looking for team members for Web3 Innovate Jam",
      author: "Maria L.",
      authorAvatar: "M",
      category: "Hackathon Help",
      replies: 8,
      views: 103,
      likes: 15,
      timeAgo: "5 hours ago",
      solved: false,
    },
    {
      id: 3,
      title: "Best practices for secure NFT metadata storage?",
      author: "John D.",
      authorAvatar: "J",
      category: "Technical Support",
      replies: 17,
      views: 230,
      likes: 32,
      timeAgo: "1 day ago",
      solved: true,
    },
    {
      id: 4,
      title: "Ideas for DeFi projects with real-world assets",
      author: "Sarah M.",
      authorAvatar: "S",
      category: "Project Ideas",
      replies: 21,
      views: 189,
      likes: 41,
      timeAgo: "2 days ago",
      solved: false,
    },
    {
      id: 5,
      title: "How to debug failing transactions on Ethereum?",
      author: "David R.",
      authorAvatar: "D",
      category: "Technical Support",
      replies: 14,
      views: 167,
      likes: 19,
      timeAgo: "3 days ago",
      solved: true,
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Discussion & Support</h2>
        <button className="bg-[#0092ff] hover:bg-[#0084e5] text-white px-4 py-2 rounded-md transition-colors">
          New Discussion
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left sidebar */}
        <div className="md:w-1/4">
          <div className="bg-[#16161b] border border-[#2a2a2e] rounded-lg p-4 mb-4">
            <h3 className="font-medium mb-3">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <button
                    className={`w-full text-left flex justify-between items-center p-2 rounded-md ${
                      index === 0
                        ? "bg-[#1b1b1e] text-[#0092ff]"
                        : "text-[#949fa8] hover:bg-[#1b1b1e] hover:text-white"
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className="bg-[#2a2a2e] text-xs px-2 py-0.5 rounded-full">
                      {category.count}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#16161b] border border-[#2a2a2e] rounded-lg p-4">
            <h3 className="font-medium mb-3">Popular Tags</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "smart-contracts",
                "defi",
                "nft",
                "security",
                "solidity",
                "react",
                "ethers.js",
                "hackathon",
                "web3",
                "blockchain",
              ].map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#1b1b1e] text-xs px-2 py-1 rounded cursor-pointer hover:bg-[#2a2a2e]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* Main content */}
        <div className="md:w-3/4">
          <div className="bg-[#16161b] border border-[#2a2a2e] rounded-lg p-4 mb-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#949fa8]" />
                <input
                  type="text"
                  placeholder="Search discussions..."
                  className="w-full bg-[#1b1b1e] border border-[#2a2a2e] rounded-md py-2 pl-10 pr-3 text-white placeholder-[#949fa8] focus:outline-none focus:ring-1 focus:ring-[#0092ff]"
                />
              </div>
              <div className="flex gap-2">
                <button className="bg-[#1b1b1e] border border-[#2a2a2e] rounded-md px-4 py-2 text-[#949fa8] hover:border-[#949fa8] transition-colors flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filters
                </button>
                <select className="bg-[#1b1b1e] border border-[#2a2a2e] rounded-md px-3 py-2 text-[#949fa8]">
                  <option>Latest</option>
                  <option>Most Popular</option>
                  <option>Most Replies</option>
                </select>
              </div>
            </div>
          </div>
          <div className="bg-[#16161b] border border-[#2a2a2e] rounded-lg overflow-hidden">
            {discussions.map((discussion, index) => (
              <div
                key={discussion.id}
                className={`p-4 cursor-pointer hover:bg-[#1b1b1e] ${
                  index !== discussions.length - 1
                    ? "border-b border-[#2a2a2e]"
                    : ""
                }`}
              >
                <div className="flex">
                  <div className="mr-4">
                    <div className="h-10 w-10 rounded-full bg-[#0092ff] flex items-center justify-center font-medium">
                      {discussion.authorAvatar}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-medium mb-1 flex items-center">
                          {discussion.title}
                          {discussion.solved && (
                            <span className="ml-2 bg-green-900/50 text-green-400 text-xs px-2 py-0.5 rounded">
                              Solved
                            </span>
                          )}
                        </h3>
                        <div className="flex items-center text-xs text-[#949fa8]">
                          <span className="mr-2">by {discussion.author}</span>
                          <span className="mr-2">in {discussion.category}</span>
                          <span className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {discussion.timeAgo}
                          </span>
                        </div>
                      </div>
                      <div className="bg-[#1b1b1e] px-2 py-1 rounded text-xs">
                        {discussion.category}
                      </div>
                    </div>
                    <div className="flex items-center mt-3 text-sm">
                      <div className="flex items-center mr-4 text-[#949fa8]">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        {discussion.replies} replies
                      </div>
                      <div className="flex items-center mr-4 text-[#949fa8]">
                        <Eye className="h-4 w-4 mr-1" />
                        {discussion.views} views
                      </div>
                      <div className="flex items-center text-[#949fa8]">
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        {discussion.likes} likes
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-center">
            <div className="flex">
              <button className="px-3 py-1 bg-[#1b1b1e] border border-[#2a2a2e] rounded-l-md text-[#949fa8]">
                Previous
              </button>
              <button className="px-3 py-1 bg-[#0092ff] text-white">1</button>
              <button className="px-3 py-1 bg-[#1b1b1e] border-y border-[#2a2a2e] text-[#949fa8]">
                2
              </button>
              <button className="px-3 py-1 bg-[#1b1b1e] border-y border-[#2a2a2e] text-[#949fa8]">
                3
              </button>
              <button className="px-3 py-1 bg-[#1b1b1e] border border-[#2a2a2e] rounded-r-md text-[#949fa8]">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
