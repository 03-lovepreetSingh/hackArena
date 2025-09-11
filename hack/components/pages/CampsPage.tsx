"use client";
import React from "react";
import { Sidebar } from "../Sidebar";
import { Header } from "../Header";
import { CampsList } from "../camps/CampsList";
export const CampsPage = () => {
  return (
    <div className="flex min-h-screen bg-[#1b1b1e] text-white">
      <Sidebar />
      <main className="flex-1">
        <div className="px-8 py-4">
          <Header />
          <div className="mt-6 space-y-10">
            <CampsList />
          </div>
        </div>
      </main>
    </div>
  );
};
