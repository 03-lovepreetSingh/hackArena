"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { OverviewTab } from "@/components/tabs/overview-tab";
import { PrizeJudgeTab } from "@/components/tabs/prize-judge-tab";
import { ScheduleTab } from "@/components/tabs/schedule-tab";
import { SubmittedProjectsTab } from "@/components/tabs/submitted-projects-tab";

interface HackathonTabsProps {
  hackathonId: string;
}

export function HackathonTabs({ hackathonId }: HackathonTabsProps) {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "prize-judge", label: "Prize & Judge" },
    { id: "schedule", label: "Schedule" },
    { id: "submitted-projects", label: "Submitted Projects" },
  ];

  return (
    <div>
      {/* Tab Navigation */}
      <div className="border-b border-neutral-800 px-6">
        <div className="flex space-x-8">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant="ghost"
              className={`px-0 py-4 border-b-2 rounded-none ${
                activeTab === tab.id
                  ? "border-blue-500 text-blue-400"
                  : "border-transparent text-neutral-400 hover:text-white"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === "overview" && <OverviewTab hackathonId={hackathonId} />}
        {activeTab === "prize-judge" && (
          <PrizeJudgeTab hackathonId={hackathonId} />
        )}
        {activeTab === "schedule" && <ScheduleTab hackathonId={hackathonId} />}
        {activeTab === "submitted-projects" && (
          <SubmittedProjectsTab hackathonId={hackathonId} />
        )}
      </div>
    </div>
  );
}
