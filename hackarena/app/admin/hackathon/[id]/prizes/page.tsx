"use client"

import { AdminSidebar } from "@/components/admin-sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronDown, ChevronRight, Plus } from "lucide-react"
import { useState } from "react"

interface PrizeCohort {
  id: string
  name: string
  expanded: boolean
  winners: number
  prizeAmount: string
  description: string
  evaluationCriteria: Array<{ name: string; points: number; description: string }>
  judgingMode: string
  votingMode: string
  maxVotesPerJudge: number
}

export default function PrizesPage({ params }: { params: { id: string } }) {
  const [prizeCohorts, setPrizeCohorts] = useState<PrizeCohort[]>([
    {
      id: "1",
      name: "Enter Prize Cohort Name",
      expanded: false,
      winners: 1,
      prizeAmount: "",
      description: "",
      evaluationCriteria: [{ name: "", points: 0, description: "" }],
      judgingMode: "judges-only",
      votingMode: "project-scoring",
      maxVotesPerJudge: 100,
    },
  ])

  const addPrizeCohort = () => {
    const newCohort: PrizeCohort = {
      id: Date.now().toString(),
      name: "Enter Prize Cohort Name",
      expanded: false,
      winners: 1,
      prizeAmount: "",
      description: "",
      evaluationCriteria: [{ name: "", points: 0, description: "" }],
      judgingMode: "judges-only",
      votingMode: "project-scoring",
      maxVotesPerJudge: 100,
    }
    setPrizeCohorts([...prizeCohorts, newCohort])
  }

  const toggleCohortExpansion = (id: string) => {
    setPrizeCohorts(
      prizeCohorts.map((cohort) => (cohort.id === id ? { ...cohort, expanded: !cohort.expanded } : cohort)),
    )
  }

  const addEvaluationCriteria = (cohortId: string) => {
    setPrizeCohorts(
      prizeCohorts.map((cohort) =>
        cohort.id === cohortId
          ? {
              ...cohort,
              evaluationCriteria: [...cohort.evaluationCriteria, { name: "", points: 0, description: "" }],
            }
          : cohort,
      ),
    )
  }

  return (
    <div className="flex">
      <AdminSidebar activeTab="prizes" hackathonId={params.id} />
      <main className="flex-1 p-6 md:ml-0">
        <div className="max-w-4xl mx-auto space-y-6">
          {prizeCohorts.map((cohort) => (
            <div key={cohort.id} className="border border-gray-700 rounded-lg bg-gray-800/50">
              {/* Cohort Header */}
              <div
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-800/70"
                onClick={() => toggleCohortExpansion(cohort.id)}
              >
                <div className="flex items-center space-x-2">
                  {cohort.expanded ? (
                    <ChevronDown className="h-4 w-4 text-blue-400" />
                  ) : (
                    <ChevronRight className="h-4 w-4 text-blue-400" />
                  )}
                  <span className="text-gray-400">{cohort.name}</span>
                </div>
                <span className="text-blue-400 text-sm">details</span>
              </div>

              {/* Cohort Details */}
              {cohort.expanded && (
                <div className="p-6 border-t border-gray-700 space-y-6">
                  {/* Prize Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Number of winners</Label>
                      <Select value={cohort.winners.toString()}>
                        <SelectTrigger className="bg-gray-800 border-gray-700">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="1">1 winner</SelectItem>
                          <SelectItem value="2">2 winners</SelectItem>
                          <SelectItem value="3">3 winners</SelectItem>
                          <SelectItem value="5">5 winners</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Prize amount for each winner</Label>
                      <Input
                        placeholder="USD/tokens per winner"
                        value={cohort.prizeAmount}
                        className="bg-gray-800 border-gray-700"
                      />
                    </div>
                  </div>

                  {/* Prize Description */}
                  <div className="space-y-2">
                    <Label>Prize cohort description</Label>
                    <Textarea
                      placeholder="Prize cohort description"
                      value={cohort.description}
                      className="bg-gray-800 border-gray-700 min-h-[120px]"
                    />
                  </div>

                  {/* Evaluation Criteria */}
                  <div className="space-y-4">
                    {cohort.evaluationCriteria.map((criteria, index) => (
                      <div key={index} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Evaluation criteria name</Label>
                            <Input
                              placeholder="Enter evaluation criteria name"
                              value={criteria.name}
                              className="bg-gray-800 border-gray-700"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Number of points</Label>
                            <Input
                              placeholder="Enter evaluation criteria name"
                              value={criteria.points}
                              className="bg-gray-800 border-gray-700"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label>Evaluation criteria description</Label>
                          <Textarea
                            placeholder="Enter evaluation criteria description"
                            value={criteria.description}
                            className="bg-gray-800 border-gray-700"
                          />
                        </div>
                      </div>
                    ))}
                    <Button
                      variant="ghost"
                      onClick={() => addEvaluationCriteria(cohort.id)}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      add evaluation criteria
                    </Button>
                  </div>

                  {/* Judging and Voting */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Judging mode</Label>
                      <Select value={cohort.judgingMode}>
                        <SelectTrigger className="bg-gray-800 border-gray-700">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="judges-only">Judges Only</SelectItem>
                          <SelectItem value="community">Community Voting</SelectItem>
                          <SelectItem value="hybrid">Hybrid</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Voting Mode</Label>
                      <Select value={cohort.votingMode}>
                        <SelectTrigger className="bg-gray-800 border-gray-700">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-700">
                          <SelectItem value="project-scoring">Project Scoring</SelectItem>
                          <SelectItem value="ranked-choice">Ranked Choice</SelectItem>
                          <SelectItem value="simple-vote">Simple Vote</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Max Votes */}
                  <div className="space-y-2">
                    <Label>Max vote per judge</Label>
                    <Select value={cohort.maxVotesPerJudge.toString()}>
                      <SelectTrigger className="w-48 bg-gray-800 border-gray-700">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700">
                        <SelectItem value="50">50 points</SelectItem>
                        <SelectItem value="100">100 points</SelectItem>
                        <SelectItem value="200">200 points</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Add Prize Cohort Button */}
          <Button variant="ghost" onClick={addPrizeCohort} className="text-blue-400 hover:text-blue-300">
            <Plus className="h-4 w-4 mr-2" />
            add another prize cohort
          </Button>
        </div>
      </main>
    </div>
  )
}
