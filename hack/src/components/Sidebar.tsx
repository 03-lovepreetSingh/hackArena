"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  X,
  Home,
  Award,
  Archive,
  Calendar,
  MessageSquare,
  BookOpen,
  Users,
  MoreHorizontal,
} from "lucide-react";

export const Sidebar = () => {
  const pathname = usePathname();

  const navItems = [
    {
      name: "Quest",
      icon: <Award className="h-4 w-4 mr-2" />,
      path: "/quest",
    },
    {
      name: "My Certifications",
      icon: <Award className="h-4 w-4 mr-2" />,
      path: "/certifications",
    },
    {
      name: "Explore Course",
      icon: <BookOpen className="h-4 w-4 mr-2" />,
      path: "/courses",
    },
    {
      name: "Dashboard",
      icon: <Home className="h-4 w-4 mr-2" />,
      path: "/",
    },
    {
      name: "Explore Hackathons",
      icon: <Calendar className="h-4 w-4 mr-2" />,
      path: "/hackathon/web3-jam",
    },
    {
      name: "Project Archive",
      icon: <Archive className="h-4 w-4 mr-2" />,
      path: "/archive",
    },
    {
      name: "Community Events",
      icon: <Users className="h-4 w-4 mr-2" />,
      path: "/events",
    },
    {
      name: "Learning Camps",
      icon: <BookOpen className="h-4 w-4 mr-2" />,
      path: "/camps",
    },
    {
      name: "Discussion & Support",
      icon: <MessageSquare className="h-4 w-4 mr-2" />,
      path: "/support",
    },
    {
      name: "Advocate Program",
      icon: <Users className="h-4 w-4 mr-2" />,
      path: "/advocate",
    },
    {
      name: "More",
      icon: <MoreHorizontal className="h-4 w-4 mr-2" />,
      path: "/more",
    },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(path);
  };

  return (
    <aside className="w-64 bg-[#16161b] border-r border-[#2a2a2e] h-screen sticky top-0 hidden md:block">
      <div className="p-4">
        {/* Logo / Close */}
        <div className="flex items-center mb-6">
          <Link href="/">
            <X className="h-6 w-6 text-[#0092ff]" />
          </Link>
        </div>

        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search for researches and audits on HackX"
            className="w-full bg-[#1b1b1e] text-[#949fa8] text-sm py-2 px-4 rounded-md focus:outline-none focus:ring-1 focus:ring-[#0092ff]"
          />
        </div>

        {/* Navigation */}
        <nav className="mt-6">
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.path}
                  className={`flex items-center px-4 py-2 text-[#949fa8] hover:text-[#0092ff] transition-colors rounded-md ${
                    isActive(item.path) ? "bg-[#1b1b1e] text-[#0092ff]" : ""
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};
