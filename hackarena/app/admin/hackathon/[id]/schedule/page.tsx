"use client"

import { AdminSidebar } from "@/components/admin-sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronDown, ChevronRight, Plus, Upload } from "lucide-react"
import { useState } from "react"

interface ScheduleEvent {
  id: string
  date: string
  time: string
  title: string
  description: string
  includeSpeaker: boolean
  speaker?: {
    picture?: string
    xName: string
    xLink: string
    realName: string
    workPlace: string
  }
  expanded: boolean
}

export default function SchedulePage({ params }: { params: { id: string } }) {
  const [events, setEvents] = useState<ScheduleEvent[]>([
    {
      id: "1",
      date: "June 21, 2025",
      time: "16:00",
      title: "Online Course 1: How to Build a Web3 Project from 0 to 1",
      description:
        "Learn how to plan, design, and launch your own Web3 project from scratch, covering everything from smart contracts and tokenomics to community building and go-to-market strategy.",
      includeSpeaker: true,
      speaker: {
        xName: "Wizzy",
        xLink: "@WizzyOnChain",
        realName: "Tom White Adressen",
        workPlace: "Founder & CEO at A16Z",
      },
      expanded: true,
    },
  ])

  const addTimeSlot = () => {
    const newEvent: ScheduleEvent = {
      id: Date.now().toString(),
      date: "",
      time: "",
      title: "",
      description: "",
      includeSpeaker: false,
      expanded: true,
    }
    setEvents([...events, newEvent])
  }

  const toggleEventExpansion = (id: string) => {
    setEvents(events.map((event) => (event.id === id ? { ...event, expanded: !event.expanded } : event)))
  }

  const updateEvent = (id: string, updates: Partial<ScheduleEvent>) => {
    setEvents(events.map((event) => (event.id === id ? { ...event, ...updates } : event)))
  }

  return (
    <div className="flex">
      <AdminSidebar activeTab="schedule" hackathonId={params.id} />
      <main className="flex-1 p-6 md:ml-0">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Schedule Header */}
          <div className="text-center py-6">
            <h2 className="text-xl font-semibold text-gray-300 mb-2">Jun 17, 2025 19:00 - Jul 19, 2025 19:00</h2>
          </div>

          {/* Schedule Events */}
          {events.map((event) => (
            <div key={event.id} className="border border-gray-700 rounded-lg bg-gray-800/50">
              {/* Event Header */}
              <div
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-800/70"
                onClick={() => toggleEventExpansion(event.id)}
              >
                <div className="flex items-center space-x-2">
                  {event.expanded ? (
                    <ChevronDown className="h-4 w-4 text-blue-400" />
                  ) : (
                    <ChevronRight className="h-4 w-4 text-blue-400" />
                  )}
                  <span className="text-gray-300">
                    {event.date} {event.time}
                  </span>
                </div>
                <span className="text-blue-400 text-sm">details</span>
              </div>

              {/* Event Details */}
              {event.expanded && (
                <div className="p-6 border-t border-gray-700 space-y-6">
                  {/* Event Title */}
                  <div className="space-y-2">
                    <Label>Hackathon Name</Label>
                    <Input
                      placeholder="Enter hackathon name"
                      value={event.title}
                      onChange={(e) => updateEvent(event.id, { title: e.target.value })}
                      className="bg-gray-800 border-gray-700"
                    />
                  </div>

                  {/* Event Description */}
                  <div className="space-y-2">
                    <Label>Short Description</Label>
                    <Textarea
                      placeholder="Short description that goes under key visual"
                      value={event.description}
                      onChange={(e) => updateEvent(event.id, { description: e.target.value })}
                      className="bg-gray-800 border-gray-700 min-h-[120px]"
                    />
                  </div>

                  {/* Include Speaker Checkbox */}
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={`speaker-${event.id}`}
                      checked={event.includeSpeaker}
                      onCheckedChange={(checked) => updateEvent(event.id, { includeSpeaker: checked as boolean })}
                    />
                    <Label htmlFor={`speaker-${event.id}`}>Include Speaker</Label>
                  </div>

                  {/* Speaker Details */}
                  {event.includeSpeaker && (
                    <div className="space-y-6 border-t border-gray-700 pt-6">
                      {/* Speaker Picture */}
                      <div className="space-y-2">
                        <Label>Speaker Picture</Label>
                        <div className="w-24 h-24 border-2 border-dashed border-gray-700 rounded-lg flex items-center justify-center bg-gray-800/50">
                          <div className="text-center">
                            <Upload className="h-6 w-6 mx-auto text-gray-400 mb-1" />
                            <p className="text-xs text-gray-400 mb-1">Drag and drop a project logo here or</p>
                            <Button variant="link" className="text-blue-400 text-xs p-0 h-auto">
                              Click to browse
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* Speaker Details Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label>Speaker x.com name</Label>
                          <Input
                            placeholder="Enter speaker x.com name"
                            value={event.speaker?.xName || ""}
                            onChange={(e) =>
                              updateEvent(event.id, {
                                speaker: { ...event.speaker, xName: e.target.value },
                              })
                            }
                            className="bg-gray-800 border-gray-700"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label>Speaker x.com link</Label>
                          <Input
                            placeholder="Enter speaker x.com link"
                            value={event.speaker?.xLink || ""}
                            onChange={(e) =>
                              updateEvent(event.id, {
                                speaker: { ...event.speaker, xLink: e.target.value },
                              })
                            }
                            className="bg-gray-800 border-gray-700"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label>Speaker real name</Label>
                          <Input
                            placeholder="Enter speaker real name"
                            value={event.speaker?.realName || ""}
                            onChange={(e) =>
                              updateEvent(event.id, {
                                speaker: { ...event.speaker, realName: e.target.value },
                              })
                            }
                            className="bg-gray-800 border-gray-700"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label>Speaker work place & position</Label>
                          <Input
                            placeholder="Enter speaker details"
                            value={event.speaker?.workPlace || ""}
                            onChange={(e) =>
                              updateEvent(event.id, {
                                speaker: { ...event.speaker, workPlace: e.target.value },
                              })
                            }
                            className="bg-gray-800 border-gray-700"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}

          {/* Add Time Slot Button */}
          <Button variant="ghost" onClick={addTimeSlot} className="text-blue-400 hover:text-blue-300">
            <Plus className="h-4 w-4 mr-2" />
            add another time slot
          </Button>
        </div>
      </main>
    </div>
  )
}
