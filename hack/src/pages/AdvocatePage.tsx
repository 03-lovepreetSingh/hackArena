"use client";
import React from "react";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { AdvocateProgram } from "../components/advocate/AdvocateProgram";
export const AdvocatePage = () => {
  return (
    <div className="flex min-h-screen bg-[#1b1b1e] text-white">
      <Sidebar />
      <main className="flex-1">
        <div className="px-8 py-4">
          <Header />
          <div className="mt-6 space-y-10">
            <AdvocateProgram />
          </div>
        </div>
      </main>
    </div>
  );
};
