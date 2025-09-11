'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProjectOverview } from '../project/ProjectOverview';
import { TechStackSelection } from '../project/TechStackSelection';
import { HackathonSubmission } from '../project/HackathonSubmission';
import { ProjectSidebar } from '../project/ProjectSidebar';
export const CreateProject = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [projectData, setProjectData] = useState({
    name: '',
    intro: '',
    logo: null,
    pitchVideo: null,
    sectors: [],
    progress: '',
    fundraising: '',
    description: '',
    githubLink: '',
    demoVideo: null,
    techStack: [],
    selectedHackathon: null
  });
  const steps = [{
    name: 'Overview',
    id: 0
  }, {
    name: 'Tech Stack',
    id: 1
  }, {
    name: 'Hackathon',
    id: 2
  }];
  const updateProjectData = data => {
    setProjectData(prev => ({
      ...prev,
      ...data
    }));
  };
  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
  };
  const getCompletionPercentage = () => {
    const percentages = [0, 40, 90];
    return percentages[currentStep];
  };
  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <ProjectOverview projectData={projectData} updateProjectData={updateProjectData} nextStep={nextStep} />;
      case 1:
        return <TechStackSelection projectData={projectData} updateProjectData={updateProjectData} nextStep={nextStep} />;
      case 2:
        return <HackathonSubmission projectData={projectData} updateProjectData={updateProjectData} />;
      default:
        return null;
    }
  };
  return <div className="flex h-screen bg-[#0d0d0f] text-white">
      {/* Sidebar */}
      <ProjectSidebar steps={steps} currentStep={currentStep} setCurrentStep={setCurrentStep} />
      {/* Main content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 border-b border-[#2a2a2e] flex justify-between items-center sticky top-0 bg-[#0d0d0f] z-10">
          <div className="flex items-center gap-2">
            <Link to="/" className="p-2 rounded-md hover:bg-[#1b1b1e]">
              <X className="h-4 w-4" />
            </Link>
            <span>Save project draft & quit</span>
          </div>
          <div className="flex-1 mx-8">
            <div className="text-center font-medium">Create New Project</div>
            <div className="mt-1 h-1 bg-[#2a2a2e] rounded-full overflow-hidden">
              <div className="h-full bg-[#0092ff] rounded-full" style={{
              width: `${getCompletionPercentage()}%`
            }}></div>
            </div>
            <div className="text-xs text-[#949fa8] text-right mt-1">
              {getCompletionPercentage()}% completed
            </div>
          </div>
          <button className="bg-[#0092ff] px-4 py-2 rounded-md">
            Create Project
          </button>
        </div>
        <div className="p-6">{renderStep()}</div>
      </div>
    </div>;
};
