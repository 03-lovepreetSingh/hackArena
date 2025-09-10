import Image from "next/image"

interface HackathonHeaderProps {
  hackathonId: string
}

export function HackathonHeader({ hackathonId }: HackathonHeaderProps) {
  return (
    <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 p-12 text-center">
      <div className="relative z-10">
        <div className="flex items-center justify-center mb-4">
          <Image src="/logo.png" alt="ChainSpark" width={40} height={40} className="mr-3" />
          <span className="text-2xl font-bold">ChainSpark</span>
        </div>

        <h1 className="text-5xl font-bold mb-2">HACKATHON</h1>
        <p className="text-2xl text-orange-400 mb-2">DeFi Builders Edition</p>
        <p className="text-lg mb-2">Smart Contracts</p>
        <p className="text-lg mb-6">& Financial Inclusion</p>

        <div className="mb-6">
          <p className="text-lg mb-2">PRIZE:</p>
          <p className="text-5xl font-bold">$38,000</p>
        </div>

        <p className="text-xl">OCTOBER 12–16, 2024</p>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute right-0 top-0 w-1/2 h-full">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <path d="M100,100 L300,100 L300,300 L100,300 Z" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="200" cy="200" r="50" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M150,150 L250,250 M250,150 L150,250" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  )
}
