"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { X, MessageCircle } from "lucide-react"
import { RegistrationModal } from "@/components/registration-modal"

export function HackathonSidebar() {
  const [showRegistration, setShowRegistration] = useState(false)

  return (
    <>
      <aside className="w-80 border-l border-gray-800 bg-gray-900 p-6">
        {/* Registration Countdown */}
        <div className="mb-6">
          <p className="text-sm text-gray-400 mb-2">Left to register</p>
          <div className="grid grid-cols-4 gap-2 mb-4">
            <div className="text-center">
              <div className="text-2xl font-bold">12</div>
              <div className="text-xs text-gray-400">D</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">01</div>
              <div className="text-xs text-gray-400">H</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">42</div>
              <div className="text-xs text-gray-400">M</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">31</div>
              <div className="text-xs text-gray-400">S</div>
            </div>
          </div>

          <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-4" onClick={() => setShowRegistration(true)}>
            Register to Hackathon
          </Button>
        </div>

        {/* Registration Info */}
        <Card className="bg-gray-800 border-gray-700 p-4 mb-6">
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Registration</span>
              <span>12 days left</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Tech stack</span>
              <span>All tech stack</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Level</span>
              <span>All levels</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Total Prize</span>
              <span>50,000.00 USD</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Location</span>
              <span>Online</span>
            </div>
          </div>
        </Card>

        {/* Links */}
        <div className="mb-6">
          <p className="text-sm text-gray-400 mb-3">Links</p>
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon" className="bg-gray-800 hover:bg-gray-700">
              <X className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="bg-gray-800 hover:bg-gray-700">
              <MessageCircle className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Project Quests */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-medium">Project Quests</p>
            <Button variant="link" className="text-blue-400 text-xs p-0">
              See All
            </Button>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div>
                <p className="text-sm">Join Telegram Group</p>
                <p className="text-xs text-blue-400">Join Telegram</p>
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-sm">Follow Tech Fairness Hackathon on X</p>
              <p className="text-xs text-blue-400">Follow on X</p>
            </div>

            <div className="space-y-1">
              <p className="text-sm">Join Tech Fairness Hackathon on Discord</p>
              <p className="text-xs text-blue-400">Join Discord</p>
            </div>
          </div>
        </div>
      </aside>

      <RegistrationModal isOpen={showRegistration} onClose={() => setShowRegistration(false)} />
    </>
  )
}
