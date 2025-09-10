import ResponsiveSidebar from "@/components/responsive-sidebar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
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

const projects = [
  {
    id: "init-club-pro",
    name: "Init Club Pro",
    description: "Init Club Pro was born from a simple but radical belief: true innovation shouldn't ...",
    lastEdited: "6 days ago",
    builder: "John McKenzie",
    tags: ["DeFi", "Infra"],
  },
  {
    id: "ward",
    name: "Ward",
    description: "Ward was born from a simple but radical belief: true innovation shouldn't ...",
    lastEdited: "6 days ago",
    builder: "John McKenzie",
    tags: ["DeFi", "Infra"],
    logo: "ward",
  },
  {
    id: "wiral",
    name: "Wiral",
    description: "Wiral was born from a simple but radical belief: true innovation shouldn't ...",
    lastEdited: "6 days ago",
    builder: "John McKenzie",
    tags: ["DeFi", "Infra"],
  },
]

export default function JudgeProjects() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex">
      <ResponsiveSidebar items={sidebarItems} />

      <main className="flex-1 p-6 md:ml-0">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/judge/dashboard">
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </Button>
            <span className="text-gray-400">Back to Hackathons to judge</span>
          </div>

          <h1 className="text-2xl font-bold mb-8">ChainSpark Hackathon Projects</h1>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.id} className="bg-gray-900 border-gray-800">
                <CardContent className="p-6">
                  <div className="mb-4">
                    {project.logo === "ward" ? (
                      <div className="w-12 h-12 bg-white rounded flex items-center justify-center mb-3">
                        <span className="text-black font-bold text-sm">ward</span>
                      </div>
                    ) : (
                      <div className="w-12 h-12 bg-blue-600 rounded mb-3"></div>
                    )}
                    <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Last edited</span>
                      <span>{project.lastEdited}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Builder</span>
                      <span>{project.builder}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-blue-600 hover:bg-blue-700">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button className="w-full" asChild>
                    <Link href={`/judge/dashboard/chainspark/projects/${project.id}`}>Review Project</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
