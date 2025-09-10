import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ScheduleTabProps {
  hackathonId: string
}

export function ScheduleTab({ hackathonId }: ScheduleTabProps) {
  const scheduleItems = [
    {
      date: "Jun 17, 2025 19:00 -",
      endDate: "Jul 19, 2025 19:00",
      isActive: true,
    },
    {
      date: "Jun 26, 2025 15:00",
      isActive: false,
    },
    {
      date: "Jun. 28, 2025; 15:00",
      isActive: false,
    },
    {
      date: "Jun. 30, 2025; 15:00",
      isActive: false,
    },
    {
      date: "Jul 19, 2025 19:00 -",
      endDate: "Jul 30, 2025 19:00",
      isActive: false,
    },
    {
      date: "Aug 3, 2025 19:00",
      isActive: false,
    },
  ]

  const selectedEvent = {
    title: "Online Course 1: How to Build a Web3 Project from 0 to 1",
    description:
      "Learn how to plan, design, and launch your own Web3 project from scratch, covering everything from smart contracts and tokenomics to community building and go-to-market strategy.",
    speaker: {
      name: "Wizzy",
      handle: "@WizzyOnChain",
      realName: "Tom White Adressen",
      position: "Founder & CEO at A16Z",
    },
    dateTime: "Jun 26, 2025 20:00 (EST)",
  }

  return (
    <div className="flex gap-8">
      {/* Schedule List */}
      <div className="w-96">
        <h2 className="text-2xl font-bold mb-6">ChainSpark Hackathon</h2>
        <div className="space-y-2">
          {scheduleItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className={`w-full justify-start p-4 h-auto ${
                item.isActive ? "bg-blue-600 text-white hover:bg-blue-700" : "text-gray-300 hover:bg-gray-800"
              }`}
            >
              <div className="text-left">
                <div>{item.date}</div>
                {item.endDate && <div>{item.endDate}</div>}
              </div>
            </Button>
          ))}
        </div>
      </div>

      {/* Event Details */}
      <div className="flex-1">
        <div className="mb-6">
          <div className="flex items-center justify-center mb-4">
            <span className="bg-green-600 text-white px-3 py-1 rounded text-sm">Live</span>
          </div>
          <h3 className="text-2xl font-bold text-center mb-8">Registration</h3>
        </div>

        {/* Selected Event Card */}
        <Card className="bg-gray-800 border-gray-700 p-6">
          <h4 className="text-xl font-semibold mb-4">{selectedEvent.title}</h4>
          <p className="text-gray-300 mb-6">{selectedEvent.description}</p>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-sm">👤</span>
                <span className="text-sm font-medium">Speaker</span>
              </div>
              <div className="ml-6">
                <div className="font-semibold">{selectedEvent.speaker.name}</div>
                <div className="text-sm text-gray-400">{selectedEvent.speaker.handle}</div>
                <div className="text-sm text-gray-300 mt-2">
                  <div>Name: {selectedEvent.speaker.realName}</div>
                  <div>Position: {selectedEvent.speaker.position}</div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-sm">🕐</span>
                <span className="text-sm font-medium">Date & Time</span>
              </div>
              <div className="ml-6">
                <div className="font-semibold">{selectedEvent.dateTime}</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
