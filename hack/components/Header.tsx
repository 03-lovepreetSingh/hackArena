"use client";
import React from "react";
import { Bell } from "lucide-react";
export const Header = () => {
  return (
    <header className="flex justify-end items-center py-2">
      <div className="flex items-center space-x-4">
        <button className="text-gray-400 hover:text-white">
          <Bell className="h-5 w-5" />
        </button>
        <div className="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-medium">
          C
        </div>
      </div>
    </header>
  );
};
