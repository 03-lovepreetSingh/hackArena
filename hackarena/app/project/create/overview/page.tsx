"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Upload, Plus } from "lucide-react";

export default function ProjectOverviewPage() {
  const [selectedSectors, setSelectedSectors] = useState<string[]>([]);

  const sectors = [
    "SocialFi",
    "DeFi",
    "NFT",
    "Infra",
    "Gaming",
    "DAO",
    "RWA",
    "AI",
    "Other",
  ];

  const toggleSector = (sector: string) => {
    setSelectedSectors((prev) =>
      prev.includes(sector)
        ? prev.filter((s) => s !== sector)
        : [...prev, sector]
    );
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Project Logo */}
      <div>
        <label className="block text-white font-medium mb-4">
          Project Logo
        </label>
        <div className="w-32 h-32 border-2 border-dashed border-neutral-600 rounded-lg flex flex-col items-center justify-center bg-neutral-800 hover:border-blue-500 transition-colors cursor-pointer">
          <Upload className="w-8 h-8 text-neutral-400 mb-2" />
          <span className="text-neutral-400 text-sm text-center">
            Drag/drop a project
            <br />
            logo here or
          </span>
          <Button variant="link" className="text-blue-400 p-0 h-auto">
            Click to browse
          </Button>
        </div>
      </div>

      {/* Project Name */}
      <div>
        <label className="block text-white font-medium mb-4">
          Project Name
        </label>
        <Input
          placeholder="Enter project name"
          className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500"
        />
      </div>

      {/* Project Intro */}
      <div>
        <label className="block text-white font-medium mb-4">
          Project Intro
        </label>
        <Textarea
          placeholder="Short project intro"
          className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500 min-h-[120px]"
        />
      </div>

      {/* Pitch Video */}
      <div>
        <label className="block text-white font-medium mb-4">
          Pitch Video <span className="text-neutral-500">(optional)</span>
        </label>
        <div className="border-2 border-dashed border-neutral-600 rounded-lg p-12 text-center bg-neutral-800">
          <div className="space-y-4">
            <div className="flex justify-center gap-4">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Upload className="w-4 h-4 mr-2" />
                Upload Video
              </Button>
              <Button
                variant="outline"
                className="border-neutral-600 text-neutral-300 hover:bg-neutral-700 bg-transparent"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Video Link
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Sector */}
      <div>
        <label className="block text-white font-medium mb-4">Sector</label>
        <div className="flex flex-wrap gap-3">
          {sectors.map((sector) => (
            <Badge
              key={sector}
              variant={selectedSectors.includes(sector) ? "default" : "outline"}
              className={`cursor-pointer px-4 py-2 ${
                selectedSectors.includes(sector)
                  ? "bg-blue-600 text-white"
                  : "border-neutral-600 text-neutral-300 hover:bg-neutral-700"
              }`}
              onClick={() => toggleSector(sector)}
            >
              + {sector}
            </Badge>
          ))}
        </div>
      </div>

      {/* Progress During Hackathon */}
      <div>
        <label className="block text-white font-medium mb-4">
          Progress During Hackathon
        </label>
        <Textarea
          placeholder="Describe what you have accomplished during the hackathon"
          className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500 min-h-[120px]"
        />
      </div>

      {/* Fundraising Status */}
      <div>
        <label className="block text-white font-medium mb-4">
          Fundraising Status
        </label>
        <Textarea
          placeholder="Have you raised any money already? How much do you need to finish the product?"
          className="bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500 min-h-[120px]"
        />
      </div>

      {/* Full Description */}
      <div>
        <label className="block text-white font-medium mb-4">
          Full Description
        </label>
        <div className="bg-neutral-800 border border-neutral-700 rounded-lg">
          {/* Rich text editor toolbar */}
          <div className="border-b border-neutral-700 p-3 flex items-center gap-2">
            <select className="bg-neutral-700 text-white text-sm rounded px-2 py-1 border-0">
              <option>Paragraph text</option>
            </select>
            <div className="flex items-center gap-1 ml-4">
              <Button
                size="sm"
                variant="ghost"
                className="text-neutral-400 hover:text-white p-1"
              >
                14
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-neutral-400 hover:text-white p-1"
              >
                <Plus className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-neutral-400 hover:text-white p-1 font-bold"
              >
                B
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-neutral-400 hover:text-white p-1 italic"
              >
                I
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-neutral-400 hover:text-white p-1 underline"
              >
                U
              </Button>
            </div>
          </div>
          <Textarea
            className="border-0 bg-transparent text-white placeholder:text-neutral-500 min-h-[200px] resize-none"
            placeholder="Enter your full project description..."
          />
        </div>
      </div>
    </div>
  );
}
