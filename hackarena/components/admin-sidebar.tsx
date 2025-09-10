"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface AdminSidebarProps {
  activeTab: string
  hackathonId?: string
}

export function AdminSidebar({ activeTab, hackathonId = "new" }: AdminSidebarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const tabs = [
    { id: "overview", label: "Overview", icon: "📝" },
    { id: "prizes", label: "Prizes", icon: "🏆" },
    { id: "judges", label: "Judges", icon: "👨‍⚖️" },
    { id: "schedule", label: "Schedule", icon: "📅" },
  ]

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden fixed top-4 left-4 z-50 bg-gray-800 hover:bg-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Overlay for mobile */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsOpen(false)} />}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed md:static inset-y-0 left-0 z-40 w-64 border-r border-gray-800 bg-gray-900 transform transition-transform duration-200 ease-in-out md:transform-none",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        )}
      >
        <nav className="p-4 space-y-2 mt-16 md:mt-0">
          {tabs.map((tab) => (
            <Link
              key={tab.id}
              href={`/admin/hackathon/${hackathonId}/${tab.id}`}
              className={cn(
                "flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors",
                activeTab === tab.id
                  ? "text-blue-400 bg-blue-900/20"
                  : "text-gray-400 hover:text-white hover:bg-gray-800",
              )}
              onClick={() => setIsOpen(false)}
            >
              <span className="text-sm">{tab.icon}</span>
              <span>{tab.label}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  )
}
