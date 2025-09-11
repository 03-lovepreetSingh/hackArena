"use client";
import React from "react";
import { Star, Clock, BookOpen } from "lucide-react";
export const CourseList = () => {
  const courses = [
    {
      id: 1,
      title: "Solidity Programming: Zero to Expert",
      instructor: "Alex Johnson",
      level: "Intermediate",
      duration: "8 weeks",
      lessons: 24,
      rating: 4.8,
      students: 1250,
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Smart Contracts", "Ethereum"],
    },
    {
      id: 2,
      title: "Web3 Authentication & Identity Management",
      instructor: "Sarah Mitchell",
      level: "Advanced",
      duration: "6 weeks",
      lessons: 18,
      rating: 4.7,
      students: 890,
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Authentication", "Security"],
    },
    {
      id: 3,
      title: "DeFi Protocol Development",
      instructor: "Michael Wong",
      level: "Advanced",
      duration: "10 weeks",
      lessons: 32,
      rating: 4.9,
      students: 760,
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["DeFi", "Smart Contracts"],
    },
    {
      id: 4,
      title: "Introduction to Blockchain Technology",
      instructor: "Elena Rodriguez",
      level: "Beginner",
      duration: "4 weeks",
      lessons: 16,
      rating: 4.6,
      students: 2100,
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Blockchain", "Fundamentals"],
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Popular Courses</h2>
        <div className="flex gap-2">
          <button className="bg-[#16161b] rounded-md px-3 py-1 text-sm text-[#949fa8]">
            All Levels
          </button>
          <button className="bg-[#16161b] rounded-md px-3 py-1 text-sm text-[#949fa8]">
            Most Popular
          </button>
          <button className="bg-[#16161b] rounded-md px-3 py-1 text-sm text-[#949fa8]">
            Newest
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-[#16161b] border border-[#2a2a2e] rounded-lg overflow-hidden hover:border-[#949fa8] transition-colors cursor-pointer"
          >
            <div className="h-40 relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-[#0092ff] text-white text-xs px-2 py-0.5 rounded">
                {course.level}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{course.title}</h3>
              <p className="text-sm text-[#949fa8] mb-3">
                by {course.instructor}
              </p>
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span>{course.rating}</span>
                  <span className="text-xs text-[#949fa8] ml-1">
                    ({course.students})
                  </span>
                </div>
                <div className="flex items-center text-sm text-[#949fa8]">
                  <Clock className="h-3 w-3 mr-1" />
                  {course.duration}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center text-sm text-[#949fa8]">
                  <BookOpen className="h-3 w-3 mr-1" />
                  {course.lessons} lessons
                </div>
                <button className="bg-[#0092ff] text-white px-3 py-1 rounded-md text-sm">
                  Enroll
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <button className="border border-[#2a2a2e] text-[#949fa8] px-4 py-2 rounded-md hover:border-[#949fa8] hover:text-white transition-colors">
          View All Courses
        </button>
      </div>
    </div>
  );
};
