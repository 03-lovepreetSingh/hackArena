import { Sidebar } from "../components/Sidebar"
import { Header } from "../components/Header"
import { ActiveProjects } from "../components/ActiveProjects"
import { RegisteredHackathons } from "../components/RegisteredHackathons"
import { OpenVoting } from "../components/OpenVoting"

export default function HomePage() {
  return (
    <div className="flex min-h-screen bg-[#1b1b1e] text-white">
      <Sidebar />
      <main className="flex-1">
        <div className="px-8 py-4">
          <Header />
          <div className="mt-6 space-y-10">
            <ActiveProjects />
            <RegisteredHackathons />
            <OpenVoting />
          </div>
        </div>
      </main>
    </div>
  )
}
