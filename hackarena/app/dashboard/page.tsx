import ResponsiveSidebar from "@/components/responsive-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, ExternalLink, MoreHorizontal } from "lucide-react"
import Image from "next/image"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-900 flex">
      <ResponsiveSidebar />

      <main className="flex-1 lg:ml-64 p-6">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Active Projects */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Active Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Create New Project Card */}
              <Card className="bg-gray-800 border-gray-700 border-dashed border-2 hover:border-blue-500 transition-colors cursor-pointer">
                <CardContent className="flex flex-col items-center justify-center h-48 text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Plus className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Create New Project</h3>
                </CardContent>
              </Card>

              {/* Existing Project */}
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                      <div className="w-8 h-8 bg-blue-400 rounded" />
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <h3 className="text-white font-semibold mb-2">Init Club Pro</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    FAIR3 was born from a simple but radical belief: true innovation shouldn't...
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>Last edited</span>
                    <span>6 days ago</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Registered Hackathons */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Registered Hackathons</h2>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-white font-semibold">ChainSpark Hackathon</h3>
                      <Badge className="bg-green-600 text-white">Live</Badge>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">
                      ChainSpark Hackathon was born from a simple but radical belief: true innovation shouldn't be
                      strangled by black-box algorithms or centralized gatekeepers.
                    </p>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm mb-4">
                      <div>
                        <div className="text-gray-500">Registration close</div>
                        <div className="text-white">Registration 12 days left</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Tech stack</div>
                        <div className="text-white">All tech stack</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Level</div>
                        <div className="text-white">All levels accepted</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Total prize</div>
                        <div className="text-white">50,000.00 USD</div>
                      </div>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700">Submit Project →</Button>
                  </div>
                  <div className="lg:w-80">
                    <Image
                      src="/placeholder-piyab.png"
                      alt="ChainSpark Hackathon"
                      width={320}
                      height={200}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Open Voting */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">Open Voting</h2>
            <div className="space-y-6">
              {[
                {
                  name: "Web3 Innovate Jam",
                  status: "Voting",
                  description:
                    "The Web3 Innovate Jam is designed to inspire developers, designers, and innovators to build innovative applications that integrate the MetaMask Card...",
                  votingClose: "Voting 8 days left",
                  techStack: "All tech stack",
                  level: "All levels accepted",
                  totalPrize: "40,000.00 USD",
                  badges: ["Online", "405 Participants", "Judges Only"],
                  image: "/placeholder-ha6pb.png",
                },
                {
                  name: "Coindora Hackfest",
                  status: "Voting",
                  description:
                    "Coindora Hackfest is designed to inspire developers, designers, and innovators to build innovative applications that integrate the MetaMask Card...",
                  votingClose: "Voting 7 days left",
                  techStack: "All tech stack",
                  level: "All levels accepted",
                  totalPrize: "1,000.00 USD",
                  badges: ["Online", "405 Participants", "Judges Only"],
                  image: "/placeholder-eahgi.png",
                },
                {
                  name: "Moca Network Identity",
                  status: "Live",
                  description:
                    "The MetaMask Card Hackathon is designed to inspire developers, designers, and innovators to build innovative applications that integrate the MetaMask...",
                  votingClose: "Voting 8 days left",
                  techStack: "All tech stack",
                  level: "All levels accepted",
                  totalPrize: "40,000.00 USD",
                  badges: ["Online", "405 Participants", "Judges Only"],
                  image: "/placeholder-dlodw.png",
                },
              ].map((hackathon, index) => (
                <Card key={index} className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-white font-semibold">{hackathon.name}</h3>
                          <Badge className={hackathon.status === "Live" ? "bg-green-600" : "bg-blue-600"}>
                            {hackathon.status}
                          </Badge>
                        </div>
                        <p className="text-gray-400 text-sm mb-4">{hackathon.description}</p>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm mb-4">
                          <div>
                            <div className="text-gray-500">Voting close</div>
                            <div className="text-white">{hackathon.votingClose}</div>
                          </div>
                          <div>
                            <div className="text-gray-500">Tech stack</div>
                            <div className="text-white">{hackathon.techStack}</div>
                          </div>
                          <div>
                            <div className="text-gray-500">Level</div>
                            <div className="text-white">{hackathon.level}</div>
                          </div>
                          <div>
                            <div className="text-gray-500">Total prize</div>
                            <div className="text-white">{hackathon.totalPrize}</div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          {hackathon.badges.map((badge, badgeIndex) => (
                            <Badge key={badgeIndex} variant="secondary" className="bg-gray-700 text-gray-300">
                              {badge}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="lg:w-80">
                        <Image
                          src={hackathon.image || "/placeholder.svg"}
                          alt={hackathon.name}
                          width={320}
                          height={200}
                          className="rounded-lg"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
