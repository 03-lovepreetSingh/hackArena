import React, { useState } from 'react';
import { X, Upload, Link2 } from 'lucide-react';
export const TechStackSelection = ({
  projectData,
  updateProjectData,
  nextStep
}) => {
  const [selectedTags, setSelectedTags] = useState(projectData.techStack || ['React', 'Next', 'Web3']);
  const [tagInput, setTagInput] = useState('');
  const handleAddTag = tag => {
    if (!selectedTags.includes(tag) && tag) {
      const newTags = [...selectedTags, tag];
      setSelectedTags(newTags);
      updateProjectData({
        techStack: newTags
      });
    }
  };
  const handleRemoveTag = tag => {
    const newTags = selectedTags.filter(t => t !== tag);
    setSelectedTags(newTags);
    updateProjectData({
      techStack: newTags
    });
  };
  const handleGithubLinkChange = e => {
    updateProjectData({
      githubLink: e.target.value
    });
  };
  return <div className="max-w-3xl mx-auto space-y-8">
      <section>
        <h3 className="text-lg font-medium mb-3">Github Link</h3>
        <div className="relative">
          <input type="text" value={projectData.githubLink} onChange={handleGithubLinkChange} placeholder="https://" className="w-full bg-[#16161b] border border-[#2a2a2e] rounded-md p-3 text-white placeholder-[#949fa8] focus:outline-none focus:ring-1 focus:ring-[#0092ff]" />
        </div>
      </section>
      <section>
        <h3 className="text-lg font-medium mb-3">Demo Video</h3>
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
        <h3 className="text-lg font-medium mb-3">Tech Stack Tags</h3>
        <div className="flex flex-wrap gap-2 mb-3">
          {selectedTags.map(tag => <div key={tag} className="bg-[#16161b] border border-[#2a2a2e] rounded-md px-3 py-1 flex items-center gap-2">
              <button onClick={() => handleRemoveTag(tag)} className="text-[#949fa8] hover:text-white">
                <X className="h-3 w-3" />
              </button>
              <span className="text-sm">{tag}</span>
            </div>)}
          <input type="text" value={tagInput} onChange={e => setTagInput(e.target.value)} onKeyDown={e => {
          if (e.key === 'Enter') {
            handleAddTag(tagInput);
            setTagInput('');
          }
        }} placeholder="Enter Tag" className="bg-transparent border-none outline-none text-sm text-[#949fa8] px-2" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {['React', 'Next', 'Vue', 'Web3', 'Ethers', 'Node', 'Java', 'Go', 'Python', 'Solidity', 'Rust', 'Move'].map(tag => <button key={tag} className={`border rounded-md py-2 px-3 text-sm ${selectedTags.includes(tag) ? 'border-[#0092ff] text-[#0092ff]' : 'border-[#2a2a2e] text-[#949fa8] hover:border-[#949fa8]'}`} onClick={() => {
          if (selectedTags.includes(tag)) {
            handleRemoveTag(tag);
          } else {
            handleAddTag(tag);
          }
        }}>
              {selectedTags.includes(tag) ? '✓ ' : '+ '}
              {tag}
            </button>)}
        </div>
        <button className="mt-4 w-full border border-dashed border-[#2a2a2e] rounded-md py-3 text-[#949fa8] hover:border-[#949fa8]">
          + Add New Tag
        </button>
      </section>
      <div className="flex justify-end">
        <button className="bg-[#0092ff] text-white px-6 py-2 rounded-md" onClick={nextStep}>
          Next
        </button>
      </div>
    </div>;
};
