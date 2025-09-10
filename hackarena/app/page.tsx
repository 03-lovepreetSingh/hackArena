import { HackathonCard } from "@/components/hackathon-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Bell } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ResponsiveSidebar from "@/components/responsive-sidebar";

const hackathons = [
  {
    id: "chainspark",
    title: "ChainSpark Hackathon",
    subtitle: "DeFi Builders Edition",
    description:
      "ChainSpark Hackathon was born from a simple but radical belief: true innovation shouldn't be strangled by black-box algorithms or centralized gatekeepers.",
    status: "Live",
    registrationDays: 12,
    techStack: "All tech stack",
    level: "All levels accepted",
    totalPrize: "50,000.00 USD",
    participants: 405,
    image: "/blockchain-hackathon-banner.jpg",
  },
  {
    id: "web3-innovate",
    title: "Web3 Innovate Jam",
    subtitle: "AI & Blockchain Edition",
    description:
      "The Web3 Innovate Jam is designed to inspire developers, designers, and innovators to build innovative applications that integrate the MetaMask Card...",
    status: "Voting",
    registrationDays: 8,
    techStack: "All tech stack",
    level: "All levels accepted",
    totalPrize: "40,000.00 USD",
    participants: 405,
    image: "/web3-innovation-purple-banner.jpg",
  },
  {
    id: "coindora",
    title: "Coindora Hackfest",
    subtitle: "Astral Cosmos Challenge",
    description:
      "Coindora Hackfest is designed to inspire developers, designers, and innovators to build innovative applications that integrate the MetaMask Card...",
    status: "Voting",
    registrationDays: 7,
    techStack: "All tech stack",
    level: "All levels accepted",
    totalPrize: "1,000.00 USD",
    participants: 405,
    image: "/space-cosmos-hackathon-banner.jpg",
  },
  {
    id: "cryptovate",
    title: "Cryptovate Hack",
    subtitle: "Digital Identity Sprint",
    description:
      "Cryptovate Hack is designed to inspire developers, designers, and innovators to build innovative applications that integrate the MetaMask Card, LIFI, and...",
    status: "Live",
    registrationDays: 8,
    techStack: "All tech stack",
    level: "All levels accepted",
    totalPrize: "40,000.00 USD",
    participants: 405,
    image: "/digital-identity-green-banner.jpg",
  },
];

const pastHackathons = [
  {
    id: "ledgerforge",
    title: "Ledgerforge Hackathon",
    subtitle: "Chain Security Lab",
    description:
      "Ledgerforge Hackathon: Chain Security Club: Was born from a simple but radical belief: true innovation shouldn't be strangled by black-box algorithms or...",
    status: "Ended",
    winner: "Announced",
    techStack: "All tech stack",
    level: "All levels accepted",
    totalPrize: "50,000.00 USD",
    participants: 400,
    image: "/security-blockchain-banner.jpg",
  },
  {
    id: "metamask-dev",
    title: "MetaMask Card Dev Cook-Off",
    subtitle: "In-Game Dev Edition",
    description:
      "The MetaMask Card Hackathon is designed to inspire developers, designers, and innovators to build innovative applications that integrate the MetaMask...",
    status: "Ended",
    winner: "Announced",
    techStack: "All tech stack",
    level: "All levels accepted",
    totalPrize: "40,000.00 USD",
    participants: 400,
    image: "/metamask-gaming-banner.jpg",
  },
];

export default function HomePage() {
  const sidebarItems = [
    { href: "#", label: "Quest", icon: "🎯" },
    { href: "#", label: "My Certifications", icon: "🏆" },
    { href: "#", label: "Explore Course", icon: "📚" },
    { href: "#", label: "Dashboard", icon: "📊" },
    { href: "/", label: "Explore Hackathons", icon: "🚀", active: true },
    { href: "#", label: "Project Archive", icon: "📁" },
    { href: "#", label: "Community Events", icon: "🎪" },
    { href: "#", label: "Learning Camps", icon: "🏕️" },
    { href: "#", label: "Discussion & Support", icon: "💬" },
    { href: "#", label: "Advocate Program", icon: "🥇" },
    { href: "#", label: "More", icon: "➕" },
  ];

  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      {/* Header */}
      <header className="border-b border-neutral-800 bg-neutral-900/95 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/60">
        <div className="flex h-16 items-center px-4 md:px-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Logo" width={32} height={32} />
          </Link>

          <div className="flex-1 max-w-2xl mx-4 md:mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
              <Input
                placeholder="Search for researches and audits on HackX"
                className="pl-10 bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-400"
              />
            </div>
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="bg-orange-600 hover:bg-orange-700"
            >
              <span className="text-sm font-medium">C</span>
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6 md:ml-0">
          {/* Featured Banner */}
          <div className="mb-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center space-x-2 mb-2">
                <span className="bg-white/20 px-2 py-1 rounded text-xs">
                  Featured
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-2">Open Source Frontier</h2>
              <p className="text-lg mb-4">AI x WEB3 x Transparency</p>
              <div className="flex items-center space-x-6 text-sm mb-4">
                <div>
                  <span className="text-white/80">Registration close</span>
                  <div className="font-semibold">Registration 12 days left</div>
                </div>
                <div>
                  <span className="text-white/80">Tech stack</span>
                  <div className="font-semibold">All tech stacks</div>
                </div>
                <div>
                  <span className="text-white/80">Level</span>
                  <div className="font-semibold">All levels accepted</div>
                </div>
                <div>
                  <span className="text-white/80">Total prize</span>
                  <div className="font-semibold">50,000.00 USD</div>
                </div>
              </div>
              <Button className="bg-white text-blue-600 hover:bg-neutral-100">
                Start Register →
              </Button>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/3 opacity-20">
              <div className="h-full w-full bg-gradient-to-l from-white/10 to-transparent"></div>
            </div>
          </div>

          {/* Explore Hackathons */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 space-y-4 sm:space-y-0">
              <h2 className="text-2xl font-bold">Explore Hackathons</h2>
              <Link href="/admin/hackathon/new/overview">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Host a Hackathon
                </Button>
              </Link>
            </div>

            <p className="text-neutral-400 mb-6">
              Welcome to your hackathon dashboard! Manage projects, invite
              teammates, and track your hackathon journey with ease — all in one
              place.
            </p>

            {/* Filters */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-neutral-400">Total Prize</span>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-neutral-700 text-neutral-300 bg-transparent"
                >
                  All ↓
                </Button>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-neutral-400">Ecosystem</span>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-neutral-700 text-neutral-300 bg-transparent"
                >
                  All ↓
                </Button>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-neutral-400">Tech Stack</span>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-neutral-700 text-neutral-300 bg-transparent"
                >
                  All ↓
                </Button>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-neutral-400">Status</span>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-neutral-700 text-neutral-300 bg-transparent"
                >
                  Live, Upcoming ↓
                </Button>
              </div>
            </div>

            {/* Hackathon Grid */}
            <div className="grid gap-6">
              {hackathons.map((hackathon) => (
                <HackathonCard key={hackathon.id} hackathon={hackathon} />
              ))}
            </div>
          </div>

          {/* Past Hackathons */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Past Hackathons</h2>
            <div className="grid gap-6">
              {pastHackathons.map((hackathon) => (
                <HackathonCard key={hackathon.id} hackathon={hackathon} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
