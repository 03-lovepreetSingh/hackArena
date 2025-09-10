"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Upload, Plus, X } from "lucide-react"

export default function TechStackPage() {
  const [selectedTags, setSelectedTags] = useState(["React", "Next", "Web3"])
  const [customTag, setCustomTag] = useState("")

  const suggestedTags = [
    "React",
    "Next",
    "Vue",
    "Web3",
    "Ethers",
    "Node",
    "Java",
    "Go",
    "Python",
    "Solidity",
    "Rust",
    "Move",
  ]

  const addTag = (tag: string) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag])
    }
  }

  const removeTag = (tag: string) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag))
  }

  const addCustomTag = () => {
    if (customTag.trim() && !selectedTags.includes(customTag.trim())) {
      setSelectedTags([...selectedTags, customTag.trim()])
      setCustomTag("")
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* GitHub Link */}
      <div>
        <label className="block text-white font-medium mb-4">Github Link</label>
        <div className="flex">
          <span className="bg-gray-800 border border-gray-700 border-r-0 px-3 py-2 text-gray-400 rounded-l-lg">
            https://
          </span>
          <Input
            className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 rounded-l-none"
            placeholder="github.com/username/repo"
          />
        </div>
      </div>

      {/* Demo Video */}
      <div>
        <label className="block text-white font-medium mb-4">Demo Video</label>
        <div className="border-2 border-dashed border-gray-600 rounded-lg p-12 text-center bg-gray-800">
          <div className="space-y-4">
            <div className="text-gray-400 mb-4">
              Drag/drop a hackathon
              <br />
              visual here or
            </div>
            <Button variant="link" className="text-blue-400">
              Click to browse
            </Button>
            <div className="flex justify-center gap-4 mt-6">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Upload className="w-4 h-4 mr-2" />
                Upload Video
              </Button>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent">
                <Plus className="w-4 h-4 mr-2" />
                Add Video Link
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Tags */}
      <div>
        <label className="block text-white font-medium mb-4">Tech Stack Tags</label>

        {/* Selected Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {selectedTags.map((tag) => (
            <Badge key={tag} className="bg-blue-600 text-white px-3 py-1 flex items-center gap-2">
              {tag}
              <button onClick={() => removeTag(tag)} className="hover:bg-blue-700 rounded-full p-0.5">
                <X className="w-3 h-3" />
              </button>
            </Badge>
          ))}
          <div className="flex items-center gap-2">
            <Input
              value={customTag}
              onChange={(e) => setCustomTag(e.target.value)}
              placeholder="Enter Tag"
              className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 w-32"
              onKeyPress={(e) => e.key === "Enter" && addCustomTag()}
            />
          </div>
        </div>

        {/* Suggested Tags */}
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {suggestedTags
              .filter((tag) => !selectedTags.includes(tag))
              .map((tag) => (
                <Button
                  key={tag}
                  variant="outline"
                  size="sm"
                  onClick={() => addTag(tag)}
                  className="border-gray-600 text-gray-300 hover:bg-gray-700"
                >
                  + {tag}
                </Button>
              ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            className="border-gray-600 text-blue-400 hover:bg-gray-700 bg-transparent"
          >
            + Add New Tag
          </Button>
        </div>
      </div>
    </div>
  )
}
