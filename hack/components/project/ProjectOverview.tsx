"use client";
import React from "react";
import { Upload, Link2 } from "lucide-react";
export const ProjectOverview = ({
  projectData,
  updateProjectData,
  nextStep,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateProjectData({
      [name]: value,
    });
  };
  const handleSectorToggle = (sector) => {
    const updatedSectors = projectData.sectors.includes(sector)
      ? projectData.sectors.filter((s) => s !== sector)
      : [...projectData.sectors, sector];
    updateProjectData({
      sectors: updatedSectors,
    });
  };
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <section>
        <h3 className="text-lg font-medium mb-3">Project Logo</h3>
        <div className="border border-dashed border-[#2a2a2e] rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer hover:bg-[#16161b] transition-colors">
          <div className="w-16 h-16 bg-[#16161b] rounded-full flex items-center justify-center mb-3">
            <Upload className="h-6 w-6 text-[#949fa8]" />
          </div>
          <p className="text-sm text-[#949fa8] mb-1">
            Drag/drop project logo here or
          </p>
          <button className="text-[#0092ff]">Click to browse</button>
        </div>
      </section>
      <section>
        <h3 className="text-lg font-medium mb-3">Project Name</h3>
        <input
          type="text"
          name="name"
          value={projectData.name}
          onChange={handleChange}
          placeholder="Enter project name"
          className="w-full bg-[#16161b] border border-[#2a2a2e] rounded-md p-3 text-white placeholder-[#949fa8] focus:outline-none focus:ring-1 focus:ring-[#0092ff]"
        />
      </section>
      <section>
        <h3 className="text-lg font-medium mb-3">Project Intro</h3>
        <textarea
          name="intro"
          value={projectData.intro}
          onChange={handleChange}
          placeholder="Short project intro"
          className="w-full bg-[#16161b] border border-[#2a2a2e] rounded-md p-3 text-white placeholder-[#949fa8] focus:outline-none focus:ring-1 focus:ring-[#0092ff] h-24 resize-none"
        ></textarea>
      </section>
      <section>
        <h3 className="text-lg font-medium mb-3">
          Pitch Video <span className="text-sm text-[#949fa8]">(optional)</span>
        </h3>
        <div className="border border-dashed border-[#2a2a2e] rounded-lg p-12 flex flex-col items-center justify-center bg-[#16161b]">
          <div className="flex gap-3 mb-4">
            <button className="bg-[#0092ff] text-white px-4 py-2 rounded-md flex items-center gap-2">
              <Upload className="h-4 w-4" />
              Upload Video
            </button>
            <button className="border border-[#2a2a2e] px-4 py-2 rounded-md flex items-center gap-2 text-[#949fa8]">
              <Link2 className="h-4 w-4" />
              Add Video Link
            </button>
          </div>
        </div>
      </section>
      <section>
        <h3 className="text-lg font-medium mb-3">Sector</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[
            "SocialFi",
            "DeFi",
            "NFT",
            "Infra",
            "Gaming",
            "DAO",
            "RWA",
            "AI",
            "Other",
          ].map((sector) => (
            <button
              key={sector}
              className={`border rounded-md py-2 px-3 text-sm ${
                projectData.sectors.includes(sector)
                  ? "border-[#0092ff] text-[#0092ff]"
                  : "border-[#2a2a2e] text-[#949fa8] hover:border-[#949fa8]"
              }`}
              onClick={() => handleSectorToggle(sector)}
            >
              + {sector}
            </button>
          ))}
        </div>
      </section>
      <section>
        <h3 className="text-lg font-medium mb-3">Progress During Hackathon</h3>
        <textarea
          name="progress"
          value={projectData.progress}
          onChange={handleChange}
          placeholder="Describe what you have accomplished during the hackathon"
          className="w-full bg-[#16161b] border border-[#2a2a2e] rounded-md p-3 text-white placeholder-[#949fa8] focus:outline-none focus:ring-1 focus:ring-[#0092ff] h-24 resize-none"
        ></textarea>
      </section>
      <section>
        <h3 className="text-lg font-medium mb-3">Fundraising Status</h3>
        <textarea
          name="fundraising"
          value={projectData.fundraising}
          onChange={handleChange}
          placeholder="Have you raised any money already? How much do you need to finish the product? Etc."
          className="w-full bg-[#16161b] border border-[#2a2a2e] rounded-md p-3 text-white placeholder-[#949fa8] focus:outline-none focus:ring-1 focus:ring-[#0092ff] h-24 resize-none"
        ></textarea>
      </section>
      <section>
        <h3 className="text-lg font-medium mb-3">Full Description</h3>
        <div className="border border-[#2a2a2e] rounded-md overflow-hidden">
          <div className="border-b border-[#2a2a2e] p-2 flex gap-2 bg-[#16161b]">
            <button className="px-2 py-1 text-sm rounded bg-[#0d0d0f] text-[#949fa8]">
              Paragraph text
            </button>
            <button className="px-2 py-1 text-sm text-[#949fa8]">14</button>
            <button className="px-2 py-1 text-sm text-[#949fa8]">B</button>
            <button className="px-2 py-1 text-sm text-[#949fa8]">I</button>
            <button className="px-2 py-1 text-sm text-[#949fa8]">U</button>
            <button className="px-2 py-1 text-sm text-[#949fa8]">A</button>
            <button className="px-2 py-1 text-sm text-[#949fa8]">Link</button>
            <button className="px-2 py-1 text-sm text-[#949fa8]">Image</button>
            <button className="px-2 py-1 text-sm text-[#949fa8]">List</button>
          </div>
          <textarea
            name="description"
            value={projectData.description}
            onChange={handleChange}
            className="w-full bg-[#0d0d0f] p-3 text-white focus:outline-none h-64 resize-none"
          ></textarea>
        </div>
      </section>
      <div className="flex justify-end">
        <button
          className="bg-[#0092ff] text-white px-6 py-2 rounded-md"
          onClick={nextStep}
        >
          Next
        </button>
      </div>
    </div>
  );
};
