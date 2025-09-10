import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

interface Hackathon {
  id: string
  title: string
  subtitle: string
  description: string
  status: string
  registrationDays?: number
  techStack: string
  level: string
  totalPrize: string
  participants: number
  image: string
  winner?: string
}

interface HackathonCardProps {
  hackathon: Hackathon
}

export function HackathonCard({ hackathon }: HackathonCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-green-600"
      case "Voting":
        return "bg-yellow-600"
      case "Ended":
        return "bg-gray-600"
      default:
        return "bg-blue-600"
    }
  }

  return (
    <Card className="bg-gray-800 border-gray-700 overflow-hidden">
      <div className="flex">
        <div className="flex-1 p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="text-xl font-bold text-white">{hackathon.title}</h3>
                <Badge className={`${getStatusColor(hackathon.status)} text-white`}>{hackathon.status}</Badge>
              </div>
              <p className="text-gray-400 mb-3">{hackathon.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 text-sm mb-4">
            <div>
              <span className="text-gray-400 block">Registration close</span>
              <span className="text-white">
                {hackathon.registrationDays
                  ? `Registration ${hackathon.registrationDays} days left`
                  : hackathon.winner || "Announced"}
              </span>
            </div>
            <div>
              <span className="text-gray-400 block">Tech stack</span>
              <span className="text-white">{hackathon.techStack}</span>
            </div>
            <div>
              <span className="text-gray-400 block">Level</span>
              <span className="text-white">{hackathon.level}</span>
            </div>
            <div>
              <span className="text-gray-400 block">Total prize</span>
              <span className="text-white">{hackathon.totalPrize}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 bg-transparent">
                Online
              </Button>
              <span className="text-sm text-gray-400">{hackathon.participants} Participants</span>
            </div>
            {hackathon.status === "Live" && (
              <Link href={`/hackathon/${hackathon.id}`}>
                <Button className="bg-blue-600 hover:bg-blue-700">Register to Hackathon</Button>
              </Link>
            )}
          </div>
        </div>

        <div className="w-80 relative">
          <Image
            src={hackathon.image || "/placeholder.svg"}
            alt={hackathon.title}
            width={320}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Card>
  )
}
