"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface AdminNavbarProps {
  activeTab: string;
  hackathonId?: string;
}

export function AdminSidebar({
  activeTab,
  hackathonId = "new",
}: AdminNavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const tabs = [
    { id: "overview", label: "Overview", icon: "📝" },
    { id: "prizes", label: "Prizes", icon: "🏆" },
    { id: "judges", label: "Judges", icon: "👨‍⚖️" },
    { id: "schedule", label: "Schedule", icon: "📅" },
  ];

  return (
    <nav className="w-full border-b border-neutral-800 bg-neutral-900 text-neutral-100 relative">
      <div className="flex items-center justify-between px-4 py-3 md:px-6">
        {/* Brand / Logo */}
        <Link href="/" className="font-bold text-lg">
          HackX Admin
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-6">
          {tabs.map((tab) => (
            <Link
              key={tab.id}
              href={`/admin/hackathon/${hackathonId}/${tab.id}`}
              className={cn(
                "flex items-center space-x-2 px-3 py-2 rounded-md transition-colors text-sm",
                activeTab === tab.id
                  ? "text-blue-400 bg-blue-900/20"
                  : "text-neutral-400 hover:text-white hover:bg-neutral-800"
              )}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden bg-neutral-800 hover:bg-neutral-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="absolute inset-x-0 top-full bg-neutral-900 border-t border-neutral-800 md:hidden">
          <div className="flex flex-col p-4 space-y-2">
            {tabs.map((tab) => (
              <Link
                key={tab.id}
                href={`/admin/hackathon/${hackathonId}/${tab.id}`}
                className={cn(
                  "flex items-center space-x-2 px-3 py-2 rounded-md transition-colors text-sm",
                  activeTab === tab.id
                    ? "text-blue-400 bg-blue-900/20"
                    : "text-neutral-400 hover:text-white hover:bg-neutral-800"
                )}
                onClick={() => setIsOpen(false)}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
