"use client"

import { AdminSidebar } from "@/components/admin-sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Upload, Plus, X } from "lucide-react"
import { useState } from "react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

export default function OverviewPage({ params }: { params: { id: string } }) {
  const [registrationStart, setRegistrationStart] = useState<Date>()
  const [registrationEnd, setRegistrationEnd] = useState<Date>()
  const [hackathonStart, setHackathonStart] = useState<Date>()
  const [hackathonEnd, setHackathonEnd] = useState<Date>()
  const [votingStart, setVotingStart] = useState<Date>()
  const [votingEnd, setVotingEnd] = useState<Date>()
  const [socialLinks, setSocialLinks] = useState([{ platform: "x.com", url: "" }])

  const addSocialLink = () => {
    setSocialLinks([...socialLinks, { platform: "x.com", url: "" }])
  }

  const removeSocialLink = (index: number) => {
    setSocialLinks(socialLinks.filter((_, i) => i !== index))
  }

  return (
    <div className="flex">
      <AdminSidebar activeTab="overview" hackathonId={params.id} />
      <main className="flex-1 p-6 md:ml-0">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Hackathon Name */}
          <div className="space-y-2">
            <Label htmlFor="hackathon-name">Hackathon Name</Label>
            <Input id="hackathon-name" placeholder="Enter hackathon name" className="bg-gray-800 border-gray-700" />
          </div>

          {/* Hackathon Image */}
          <div className="space-y-2">
            <Label>Hackathon Image</Label>
            <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center bg-gray-800/50">
              <Upload className="h-12 w-12 mx-auto text-gray-400 mb-4" />
              <p className="text-gray-400 mb-2">Drag and drop a hackathon visual here or</p>
              <Button variant="outline" className="border-blue-600 text-blue-400 bg-transparent">
                Click to browse
              </Button>
            </div>
          </div>

          {/* Short Description */}
          <div className="space-y-2">
            <Label htmlFor="short-description">Short Description</Label>
            <Textarea
              id="short-description"
              placeholder="Short description that goes under key visual"
              className="bg-gray-800 border-gray-700 min-h-[120px]"
            />
          </div>

          {/* Duration Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Registration Duration */}
            <div className="space-y-4">
              <Label>Registration duration</Label>
              <div className="space-y-3">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-gray-800 border-gray-700",
                        !registrationStart && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {registrationStart ? format(registrationStart, "PPP") : "From — to dates"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-gray-800 border-gray-700">
                    <Calendar mode="single" selected={registrationStart} onSelect={setRegistrationStart} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            {/* Hackathon Duration */}
            <div className="space-y-4">
              <Label>Hackathon duration</Label>
              <div className="space-y-3">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-gray-800 border-gray-700",
                        !hackathonStart && "text-muted-foreground",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {hackathonStart ? format(hackathonStart, "PPP") : "From — to dates"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-gray-800 border-gray-700">
                    <Calendar mode="single" selected={hackathonStart} onSelect={setHackathonStart} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>

          {/* Voting Duration */}
          <div className="space-y-4">
            <Label>Voting duration</Label>
            <div className="max-w-md">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal bg-gray-800 border-gray-700",
                      !votingStart && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {votingStart ? format(votingStart, "PPP") : "From — to dates"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-gray-800 border-gray-700">
                  <Calendar mode="single" selected={votingStart} onSelect={setVotingStart} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Tech Stack and Experience Level */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Tech stack</Label>
              <Select>
                <SelectTrigger className="bg-gray-800 border-gray-700">
                  <SelectValue placeholder="Select tech stack" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700">
                  <SelectItem value="all">All tech stack</SelectItem>
                  <SelectItem value="web3">Web3</SelectItem>
                  <SelectItem value="ai">AI/ML</SelectItem>
                  <SelectItem value="mobile">Mobile</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Experience Level</Label>
              <Select>
                <SelectTrigger className="bg-gray-800 border-gray-700">
                  <SelectValue placeholder="Select experience level" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700">
                  <SelectItem value="all">All levels</SelectItem>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Hackathon Location */}
          <div className="space-y-2">
            <Label htmlFor="location">Hackathon location</Label>
            <Input id="location" placeholder="Enter hackathon location" className="bg-gray-800 border-gray-700" />
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <Label>Social links</Label>
            {socialLinks.map((link, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Select value={link.platform}>
                  <SelectTrigger className="w-32 bg-gray-800 border-gray-700">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="x.com">x.com</SelectItem>
                    <SelectItem value="github.com">github.com</SelectItem>
                    <SelectItem value="discord.gg">discord.gg</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  placeholder="Enter link to x.com"
                  value={link.url}
                  onChange={(e) => {
                    const newLinks = [...socialLinks]
                    newLinks[index].url = e.target.value
                    setSocialLinks(newLinks)
                  }}
                  className="flex-1 bg-gray-800 border-gray-700"
                />
                {socialLinks.length > 1 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeSocialLink(index)}
                    className="text-gray-400 hover:text-white"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
            <Button variant="ghost" onClick={addSocialLink} className="text-blue-400 hover:text-blue-300">
              <Plus className="h-4 w-4 mr-2" />
              add another link
            </Button>
          </div>

          {/* Full Description */}
          <div className="space-y-2">
            <Label>Full Description</Label>
            <div className="bg-gray-800 border border-gray-700 rounded-lg">
              {/* Rich text editor toolbar */}
              <div className="border-b border-gray-700 p-3 flex items-center space-x-2">
                <Select defaultValue="paragraph">
                  <SelectTrigger className="w-32 bg-gray-700 border-gray-600">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-700 border-gray-600">
                    <SelectItem value="paragraph">Paragraph text</SelectItem>
                    <SelectItem value="heading1">Heading 1</SelectItem>
                    <SelectItem value="heading2">Heading 2</SelectItem>
                  </SelectContent>
                </Select>
                <div className="flex items-center space-x-1">
                  <Button variant="ghost" size="sm" className="text-gray-400">
                    14
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-400 font-bold">
                    B
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-400 italic">
                    I
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-400 underline">
                    U
                  </Button>
                </div>
              </div>
              <Textarea
                placeholder="Enter full description..."
                className="border-0 bg-transparent min-h-[200px] resize-none focus:ring-0"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
