import Link from "next/link"
import { Calendar, Users, Trophy } from "lucide-react"

export const RegisteredHackathons = () => {
  const hackathons = [
    {
      id: "web3-jam",
      name: "Web3 Jam 2024",
      date: "Dec 15-17, 2024",
      participants: 1250,
      prize: "$50,000",
      status: "Active",
    },
    {
      id: "eth-global",
      name: "ETH Global Hackathon",
      date: "Jan 20-22, 2025",
      participants: 2100,
      prize: "$100,000",
      status: "Upcoming",
    },
  ]

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Registered Hackathons</h2>
        <Link href="/hackathon/web3-jam" className="text-[#0092ff] hover:text-[#0080e6] text-sm">
          View All
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {hackathons.map((hackathon) => (
          <Link key={hackathon.id} href={`/hackathon/${hackathon.id}`}>
            <div className="bg-[#16161b] border border-[#2a2a2e] rounded-lg p-6 hover:border-[#0092ff] transition-colors cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">{hackathon.name}</h3>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    hackathon.status === "Active" ? "bg-green-900 text-green-300" : "bg-blue-900 text-blue-300"
                  }`}
                >
                  {hackathon.status}
                </span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2 text-[#949fa8]">
                  <Calendar className="h-4 w-4" />
                  <span>{hackathon.date}</span>
                </div>
                <div className="flex items-center space-x-2 text-[#949fa8]">
                  <Users className="h-4 w-4" />
                  <span>{hackathon.participants} participants</span>
                </div>
                <div className="flex items-center space-x-2 text-[#949fa8]">
                  <Trophy className="h-4 w-4" />
                  <span>{hackathon.prize} prize pool</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
