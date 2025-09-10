import { HackathonHeader } from "@/components/hackathon-header";
import { HackathonTabs } from "@/components/hackathon-tabs";
import { HackathonSidebar } from "@/components/hackathon-sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Bell, ArrowLeft, Share } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface PageProps {
  params: {
    id: string;
  };
}

export default function HackathonPage({ params }: PageProps) {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      {/* Header */}
      <header className="border-b border-neutral-800 bg-neutral-900/95 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/60">
        <div className="flex h-16 items-center px-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Logo" width={32} height={32} />
          </Link>

          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
              <Input
                placeholder="Search for researches and audits on HackX"
                className="pl-10 bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-400"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
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
        {/* Sidebar */}
        <aside className="w-64 border-r border-neutral-800 bg-neutral-900 min-h-screen">
          <nav className="p-4 space-y-2">
            <Link
              href="#"
              className="flex items-center space-x-3 px-3 py-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg"
            >
              <span className="text-sm">🎯</span>
              <span>Quest</span>
            </Link>
            <Link
              href="#"
              className="flex items-center space-x-3 px-3 py-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg"
            >
              <span className="text-sm">🏆</span>
              <span>My Certifications</span>
            </Link>
            <Link
              href="#"
              className="flex items-center space-x-3 px-3 py-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg"
            >
              <span className="text-sm">📚</span>
              <span>Explore Course</span>
            </Link>
            <Link
              href="#"
              className="flex items-center space-x-3 px-3 py-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg"
            >
              <span className="text-sm">📊</span>
              <span>Dashboard</span>
            </Link>
            <Link
              href="/"
              className="flex items-center space-x-3 px-3 py-2 text-blue-400 bg-blue-900/20 rounded-lg"
            >
              <span className="text-sm">🚀</span>
              <span>Explore Hackathons</span>
            </Link>
            <Link
              href="#"
              className="flex items-center space-x-3 px-3 py-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg"
            >
              <span className="text-sm">📁</span>
              <span>Project Archive</span>
            </Link>
            <Link
              href="#"
              className="flex items-center space-x-3 px-3 py-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg"
            >
              <span className="text-sm">🎪</span>
              <span>Community Events</span>
            </Link>
            <Link
              href="#"
              className="flex items-center space-x-3 px-3 py-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg"
            >
              <span className="text-sm">🏕️</span>
              <span>Learning Camps</span>
            </Link>
            <Link
              href="#"
              className="flex items-center space-x-3 px-3 py-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg"
            >
              <span className="text-sm">💬</span>
              <span>Discussion & Support</span>
            </Link>
            <Link
              href="#"
              className="flex items-center space-x-3 px-3 py-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg"
            >
              <span className="text-sm">🥇</span>
              <span>Advocate Program</span>
            </Link>
            <Link
              href="#"
              className="flex items-center space-x-3 px-3 py-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-lg"
            >
              <span className="text-sm">➕</span>
              <span>More</span>
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <div className="flex">
            <div className="flex-1">
              {/* Back Navigation */}
              <div className="flex items-center justify-between p-6 border-b border-neutral-800">
                <Link
                  href="/"
                  className="flex items-center space-x-2 text-neutral-400 hover:text-white"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to Hackathons</span>
                </Link>
                <Button variant="ghost" className="text-blue-400">
                  <Share className="h-4 w-4 mr-2" />
                  Share Link
                </Button>
              </div>

              <HackathonHeader hackathonId={params.id} />
              <HackathonTabs hackathonId={params.id} />
            </div>

            <HackathonSidebar />
          </div>
        </main>
      </div>
    </div>
  );
}
