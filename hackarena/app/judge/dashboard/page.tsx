import ResponsiveSidebar from "@/components/responsive-sidebar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const sidebarItems = [
  {
    href: "/judge/dashboard",
    label: "Judge Dashboard",
    icon: "⚖️",
    active: true,
  },
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
];

export default function JudgeDashboard() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white flex">
      <ResponsiveSidebar items={sidebarItems} />

      <main className="flex-1 p-6 md:ml-0">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold mb-8">Hackathons to judge</h1>

          <div className="grid gap-6">
            <Card className="bg-neutral-900 border-neutral-800">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-xl font-semibold">
                        ChainSpark Hackathon
                      </h3>
                      <Badge className="bg-green-600 hover:bg-green-700">
                        Live
                      </Badge>
                    </div>

                    <p className="text-neutral-400 mb-6 max-w-2xl">
                      ChainSpark Hackathon was born from a simple but radical
                      belief: true innovation shouldn't be strangled by
                      black-box algorithms or centralized gatekeepers.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div>
                        <div className="text-sm text-neutral-400">
                          Participants
                        </div>
                        <div className="text-2xl font-bold">405</div>
                      </div>
                      <div>
                        <div className="text-sm text-neutral-400">
                          Projects Submitted
                        </div>
                        <div className="text-2xl font-bold">3</div>
                      </div>
                      <div>
                        <div className="text-sm text-neutral-400">
                          Prize Cohorts
                        </div>
                        <div className="text-2xl font-bold">2</div>
                      </div>
                      <div>
                        <div className="text-sm text-neutral-400">
                          Tech stack
                        </div>
                        <div className="text-lg font-semibold">
                          All tech stack
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button asChild>
                        <Link href="/judge/dashboard/chainspark/projects">
                          Go to judging →
                        </Link>
                      </Button>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="ml-6 flex-shrink-0">
                    <div className="w-64 h-48 bg-gradient-to-br from-blue-600 to-purple-700 rounded-lg flex flex-col items-center justify-center text-center p-4">
                      <Image
                        src="/logo.png"
                        alt="ChainSpark"
                        width={40}
                        height={40}
                        className="mb-2"
                      />
                      <div className="text-lg font-bold">ChainSpark</div>
                      <div className="text-xl font-bold">HACKATHON</div>
                      <div className="text-sm text-blue-200">
                        DeFi Builders Edition
                      </div>
                      <div className="text-xs text-blue-200 mt-1">
                        Smart Contracts
                      </div>
                      <div className="text-xs text-blue-200">
                        & Financial Inclusion
                      </div>
                      <div className="text-xs text-blue-200 mt-2">PRIZE:</div>
                      <div className="text-2xl font-bold">$38,000</div>
                      <div className="text-xs text-blue-200">
                        OCTOBER 12-16, 2024
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
