"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const tabs = [
  { id: "overview", label: "Overview", href: "/project/create/overview" },
  { id: "tech-stack", label: "Tech Stack", href: "/project/create/tech-stack" },
  { id: "hackathon", label: "Hackathon", href: "/project/create/hackathon" },
]

export default function CreateProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [completionPercentage, setCompletionPercentage] = useState(40)

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <Link href="/dashboard" className="text-gray-400 hover:text-white">
              <X className="w-5 h-5" />
            </Link>
            <span className="text-gray-400">Save project draft & quit</span>
          </div>

          <h1 className="text-xl font-semibold text-white">Create New Project</h1>

          <div className="flex items-center gap-4">
            <span className="text-sm text-orange-400">{completionPercentage}% completed</span>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent">
              Preview
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">Create Project</Button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-gray-800">
          <div
            className="h-full bg-blue-600 transition-all duration-300"
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-900 border-r border-gray-800 min-h-screen">
          <nav className="p-4">
            <ul className="space-y-2">
              {tabs.map((tab) => (
                <li key={tab.id}>
                  <Link
                    href={tab.href}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-gray-600" />
                    {tab.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  )
}
