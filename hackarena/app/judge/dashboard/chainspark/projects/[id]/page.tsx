import ResponsiveSidebar from "@/components/responsive-sidebar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Play, ExternalLink } from "lucide-react"
import Link from "next/link"

const sidebarItems = [
  { href: "/judge/dashboard", label: "Judge Dashboard", icon: "⚖️", active: true },
  { href: "/quest", label: "Quest", icon: "🎯" },
  { href: "/my-certifications", label: "My Certifications", icon: "🏆" },
  { href: "/explore-course", label: "Explore Course", icon: "📚" },
  { href: "/explore-hackathons", label: "Explore Hackathons", icon: "💻" },
  { href: "/project-archive", label: "Project Archive", icon: "📁" },
  { href: "/community-events", label: "Community Events", icon: "👥" },
  { href: "/learning-camps", label: "Learning Camps", icon: "🎓" },
  { href: "/discussion-support", label: "Discussion & Support", icon: "💬" },
  { href: "/advocate-program", label: "Advocate Program", icon: "🌟" },
  { href: "/more", label: "More", icon: "⋯" },
]

const evaluationCriteria = [
  {
    name: "Originality",
    description: "Is the idea novel and imaginative? Does it offer a new take on an old problem?",
    maxScore: 20,
  },
  {
    name: "Relevance to Tech Fairness",
    description:
      "Does the project address core fairness challenges (algorithm transparency, data sovereignty, sustainable income, etc.)?",
    maxScore: 25,
  },
  {
    name: "Functionality & Implementation",
    description: "How well is the project executed? Is there a working demo or prototype?",
    maxScore: 20,
  },
  {
    name: "Impact & Usefulness",
    description: "Can this project be applied to real communities or users? Is it scalable or integrable?",
    maxScore: 20,
  },
  {
    name: "Design & Clarity",
    description:
      "Is the presentation intuitive? Is the design and documentation clear enough to be understood and used?",
    maxScore: 15,
  },
]

const submittedHackathons = [
  {
    name: "Ledgerforge Hackathon, Chain Security Club",
    status: "Ended",
    description:
      "Ledgerforge Hackathon, Chain Security Club. Was born from a simple but radical belief: true innovation shouldn't be strangled by black-box algorithms",
    winner: "Announced",
    techStack: "All tech stack",
    level: "All levels accepted",
    totalPrize: "50,000.00 USD",
    participants: "405 Participants",
    image: "/placeholder.svg?height=200&width=300&text=LEDGERFORGE+HACKATHON",
  },
  {
    name: "Cryptovate Hack",
    status: "Live",
    description:
      "Cryptovate Hack is designed to inspire developers, designers, and innovators to build innovative applications that integrate the MetaMask Card, LI.FI, and...",
    votingClose: "Voting 8 days left",
    techStack: "All tech stack",
    level: "All levels accepted",
    totalPrize: "40,000.00 USD",
    participants: "405 Participants",
    image: "/placeholder.svg?height=200&width=300&text=CRYPTOVATE+HACK",
  },
]

export default function JudgeProjectDetail() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex">
      <ResponsiveSidebar items={sidebarItems} />

      <main className="flex-1 p-6 md:ml-0">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/judge/dashboard/chainspark/projects">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <span className="text-gray-400">Back to ChainSpark Hackathon Projects</span>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gray-800">
              <TabsTrigger value="overview">Project Overview</TabsTrigger>
              <TabsTrigger value="hackathon">Hackathon</TabsTrigger>
              <TabsTrigger value="judging">Judging</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6">
              <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h1 className="text-3xl font-bold mb-4">Init Club Pro</h1>
                    <p className="text-gray-400 leading-relaxed">
                      Dunk Verse is an innovative blockchain-based sports engagement platform designed to revolutionize
                      the fan experience. Leveraging Mantle's Layer 2 infrastructure, the platform combines GameFi,
                      SocialFi, and NFT to offer unique features like AI-generated quizzes, live NFT auctions tied to
                      Top Shots NBA sports events, and leaderboard competitions. Fans can upload videos that are
                      automatically minted into NFTs, participate in AI quizzes
                    </p>
                  </div>

                  <div>
                    <div className="flex gap-4 mb-4">
                      <Button className="bg-blue-600 hover:bg-blue-700">Demo Video</Button>
                      <Button variant="outline">Pitch Video</Button>
                    </div>

                    <div className="bg-gray-900 rounded-lg aspect-video flex items-center justify-center">
                      <Button size="lg" className="rounded-full w-16 h-16">
                        <Play className="h-6 w-6" />
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Progress During Hackathon</h3>
                    <p className="text-gray-400 leading-relaxed">
                      During hackathon, we accomplished following: - Frontend Development: Built a user-friendly
                      interface for NFT auctions, AI quizzes, and Social Interaction. - Smart Contracts: Deployed key
                      smart contracts for the token and Betting Pool on the Mantle Testnet. - AI Quiz Integration:
                      Implemented AIGC DALL-E3 GPT models that generate dynamic quizzes based on live sports events.
                      Developed a functional NFT auction system that allows users to bid using our tokens. - Testing and
                      Deployment: Conducted rigorous testing to ensure seamless operations and deployed the project with
                      all features integrated.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Fundraising Status</h3>
                    <p className="text-gray-400">Not raised any funds, but actively looking to raise.</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <Card className="bg-gray-900 border-gray-800">
                    <CardContent className="p-4 space-y-4">
                      <div>
                        <div className="text-sm text-gray-400">Team Leader</div>
                        <div className="font-semibold">Amaan Sayyad</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">Github link</div>
                        <Link href="#" className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
                          github.com/a
                          <ExternalLink className="h-3 w-3" />
                        </Link>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-2">Sector</div>
                        <div className="flex flex-wrap gap-2">
                          <Badge className="bg-blue-600 hover:bg-blue-700">SocialFi</Badge>
                          <Badge className="bg-blue-600 hover:bg-blue-700">Infra</Badge>
                          <Badge className="bg-blue-600 hover:bg-blue-700">GameFi</Badge>
                          <Badge className="bg-blue-600 hover:bg-blue-700">NFT</Badge>
                          <Badge className="bg-blue-600 hover:bg-blue-700">AI</Badge>
                          <Badge className="bg-blue-600 hover:bg-blue-700">DeFi</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="hackathon" className="mt-6">
              <div>
                <h2 className="text-2xl font-bold mb-6">Submitted Hackathon</h2>
                <div className="space-y-6">
                  {submittedHackathons.map((hackathon, index) => (
                    <Card key={index} className="bg-gray-900 border-gray-800">
                      <CardContent className="p-6">
                        <div className="flex gap-6">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-4">
                              <h3 className="text-lg font-semibold">{hackathon.name}</h3>
                              <Badge className={hackathon.status === "Live" ? "bg-green-600" : "bg-gray-600"}>
                                {hackathon.status}
                              </Badge>
                            </div>

                            <p className="text-gray-400 mb-4">{hackathon.description}</p>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                              <div>
                                <div className="text-sm text-gray-400">
                                  {hackathon.winner ? "Winner" : "Voting close"}
                                </div>
                                <div className="font-semibold">{hackathon.winner || hackathon.votingClose}</div>
                              </div>
                              <div>
                                <div className="text-sm text-gray-400">Tech stack</div>
                                <div className="font-semibold">{hackathon.techStack}</div>
                              </div>
                              <div>
                                <div className="text-sm text-gray-400">Level</div>
                                <div className="font-semibold">{hackathon.level}</div>
                              </div>
                              <div>
                                <div className="text-sm text-gray-400">Total prize</div>
                                <div className="font-semibold">{hackathon.totalPrize}</div>
                              </div>
                            </div>

                            <div className="flex gap-2">
                              <Badge variant="secondary">Online</Badge>
                              <Badge variant="secondary">{hackathon.participants}</Badge>
                            </div>
                          </div>

                          <div className="w-64 h-32 bg-gradient-to-br from-blue-600 to-purple-700 rounded-lg flex-shrink-0">
                            {/* Hackathon image placeholder */}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="judging" className="mt-6">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Select A Prize Cohort</h2>
                  <Select defaultValue="tech-fairness">
                    <SelectTrigger className="w-full max-w-md bg-gray-900 border-gray-700">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tech-fairness">Tech Fairness Exploration Awards</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Evaluation Criteria</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-700">
                          <th className="text-left py-3 px-4 text-gray-400 font-medium">Name</th>
                          <th className="text-left py-3 px-4 text-gray-400 font-medium">Description</th>
                          <th className="text-center py-3 px-4 text-gray-400 font-medium">Max Score</th>
                          <th className="text-center py-3 px-4 text-gray-400 font-medium">Your Score</th>
                        </tr>
                      </thead>
                      <tbody>
                        {evaluationCriteria.map((criteria, index) => (
                          <tr key={index} className="border-b border-gray-800">
                            <td className="py-4 px-4 font-medium">{criteria.name}</td>
                            <td className="py-4 px-4 text-gray-400 max-w-md">{criteria.description}</td>
                            <td className="py-4 px-4 text-center font-semibold">{criteria.maxScore}</td>
                            <td className="py-4 px-4 text-center">
                              <Input
                                type="number"
                                max={criteria.maxScore}
                                min="0"
                                className="w-20 mx-auto bg-gray-900 border-gray-700 text-center"
                                placeholder="0"
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
