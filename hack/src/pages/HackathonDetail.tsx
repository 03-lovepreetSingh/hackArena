"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Share } from "lucide-react";

// Your local components
import { Overview } from "../components/hackathon/Overview";
import { PrizeAndJudge } from "../components/hackathon/PrizeAndJudge";
import { Schedule } from "../components/hackathon/Schedule";
import { SubmittedProjects } from "../components/hackathon/SubmittedProjects";
import { RegistrationModal } from "../components/hackathon/RegistrationModal";
import { HackathonSidebar } from "../components/hackathon/HackathonSidebar";

export const HackathonDetail = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  const router = useRouter();

  const handleGoBack = () => {
    router.push("/"); // Navigate back to homepage
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return <Overview />;
      case "prize":
        return <PrizeAndJudge />;
      case "schedule":
        return <Schedule />;
      case "projects":
        return <SubmittedProjects />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#1b1b1e] text-white">
      {/* Main Content */}
      <div className="flex-1">
        <div className="px-8 py-4">
          {/* Header */}
          <div className="flex justify-between items-center py-2">
            <button
              onClick={handleGoBack}
              className="flex items-center text-sm text-gray-400 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Hackathons
            </button>

            <div className="flex items-center space-x-4">
              <button className="flex items-center text-sm text-gray-400 hover:text-white">
                <Share className="h-4 w-4 mr-1" />
                Share Link
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-4">
            <div className="bg-[#16161b] rounded-lg overflow-hidden">
              <div className="flex border-b border-[#2a2a2e]">
                <button
                  className={`px-6 py-3 text-sm font-medium ${
                    activeTab === "overview"
                      ? "bg-[#0092ff] text-white"
                      : "text-[#949fa8]"
                  }`}
                  onClick={() => setActiveTab("overview")}
                >
                  Overview
                </button>
                <button
                  className={`px-6 py-3 text-sm font-medium ${
                    activeTab === "prize"
                      ? "bg-[#0092ff] text-white"
                      : "text-[#949fa8]"
                  }`}
                  onClick={() => setActiveTab("prize")}
                >
                  Prize & Judge
                </button>
                <button
                  className={`px-6 py-3 text-sm font-medium ${
                    activeTab === "schedule"
                      ? "bg-[#0092ff] text-white"
                      : "text-[#949fa8]"
                  }`}
                  onClick={() => setActiveTab("schedule")}
                >
                  Schedule
                </button>
                <button
                  className={`px-6 py-3 text-sm font-medium ${
                    activeTab === "projects"
                      ? "bg-[#0092ff] text-white"
                      : "text-[#949fa8]"
                  }`}
                  onClick={() => setActiveTab("projects")}
                >
                  Submitted Projects
                </button>
              </div>

              {/* Tab Content */}
              <div className="p-6">{renderTabContent()}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <HackathonSidebar
        onRegisterClick={() => setIsRegistrationModalOpen(true)}
      />

      {/* Registration Modal */}
      {isRegistrationModalOpen && (
        <RegistrationModal onClose={() => setIsRegistrationModalOpen(false)} />
      )}
    </div>
  );
};
