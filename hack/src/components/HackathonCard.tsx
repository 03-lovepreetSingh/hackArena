"use client";
import React from "react";
import { Link } from "react-router-dom";
export const HackathonCard = ({
  id,
  title,
  description,
  image,
  isLive,
  prize,
  date,
  onClick,
}) => {
  return (
    <div
      className="bg-[#16161b] border border-[#2a2a2e] rounded-lg overflow-hidden cursor-pointer hover:border-[#949fa8] transition-colors"
      onClick={onClick}
    >
      <div className="h-40 relative">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        {isLive && (
          <span className="absolute top-2 right-2 bg-green-900/50 text-green-400 text-xs px-2 py-0.5 rounded">
            Live
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-sm text-[#949fa8] mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold">{prize}</div>
          <div className="text-xs text-[#949fa8]">{date}</div>
        </div>
      </div>
    </div>
  );
};
