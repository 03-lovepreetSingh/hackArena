"use client";
import React from "react";
import { Sidebar } from "../Sidebar";
import { Header } from "../Header";
import { ActiveProjects } from "../ActiveProjects";
import { RegisteredHackathons } from "../RegisteredHackathons";
import { OpenVoting } from "../OpenVoting";
export const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-[#1b1b1e] text-white">
      <Sidebar />
      <main className="flex-1">
        <div className="px-8 py-4">
          <Header />
          <div className="mt-6 space-y-10">
            <ActiveProjects />
            <RegisteredHackathons />
            <OpenVoting />
          </div>
        </div>
      </main>
    </div>
  );
};
