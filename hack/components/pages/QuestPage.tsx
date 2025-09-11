"use client";
import React from "react";
import { Sidebar } from "../Sidebar";
import { Header } from "../Header";
import { QuestList } from "../quest/QuestList";
import { QuestRewards } from "../quest/QuestRewards";
import { QuestProgress } from "../quest/QuestProgress";
export const QuestPage = () => {
  return (
    <div className="flex min-h-screen bg-[#1b1b1e] text-white">
      <Sidebar />
      <main className="flex-1">
        <div className="px-8 py-4">
          <Header />
          <div className="mt-6 space-y-10">
            <QuestProgress />
            <QuestList />
            <QuestRewards />
          </div>
        </div>
      </main>
    </div>
  );
};
