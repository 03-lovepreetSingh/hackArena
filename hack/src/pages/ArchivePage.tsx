"use client";
import React from "react";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { ProjectFilters } from "../components/archive/ProjectFilters";
import { ArchivedProjects } from "../components/archive/ArchivedProjects";
export const ArchivePage = () => {
  return (
    <div className="flex min-h-screen bg-[#1b1b1e] text-white">
      <Sidebar />
      <main className="flex-1">
        <div className="px-8 py-4">
          <Header />
          <div className="mt-6 space-y-10">
            <ProjectFilters />
            <ArchivedProjects />
          </div>
        </div>
      </main>
    </div>
  );
};
