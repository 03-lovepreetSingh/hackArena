import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function HackathonSubmissionPage() {
  const hackathons = [
    {
      name: "Web3 Innovate Jam",
      status: "Live",
      description:
        "The Web3 Innovate Jam is designed to inspire developers, designers, and innovators to build innovative applications that integrate the MetaMask Card...",
      registrationClose: "Registration 12 days left",
      techStack: "All tech stack",
      level: "All levels accepted",
      totalPrize: "50,000.00 USD",
      image: "/placeholder-ha6pb.png",
    },
    {
      name: "Coindora Hackfest",
      status: "Live",
      description:
        "Coindora Hackfest was born from a simple but radical belief: true innovation shouldn't be strangled by black-box algorithms or centralized gatekeepers. In an era...",
      registrationClose: "Registration 12 days left",
      techStack: "All tech stack",
      level: "All levels accepted",
      totalPrize: "50,000.00 USD",
      image: "/placeholder-eahgi.png",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-4">Submit Project to Hackathon</h2>
        <p className="text-gray-400 mb-8">
          Select an existing hackathon to submit your project to.
          <br />
          This way your project will appear in hackathon project gallery
          <br />
          early. You can always submit your project to hackathon later
        </p>
      </div>

      <div className="space-y-6">
        {hackathons.map((hackathon, index) => (
          <Card key={index} className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-white font-semibold text-lg">{hackathon.name}</h3>
                    <Badge className="bg-green-600 text-white">{hackathon.status}</Badge>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{hackathon.description}</p>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm mb-6">
                    <div>
                      <div className="text-gray-500">Registration close</div>
                      <div className="text-white">{hackathon.registrationClose}</div>
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
                  <Button className="bg-blue-600 hover:bg-blue-700">Submit to this Hackathon →</Button>
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
    </div>
  )
}
