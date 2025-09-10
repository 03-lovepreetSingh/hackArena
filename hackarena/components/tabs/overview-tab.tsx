interface OverviewTabProps {
  hackathonId: string
}

export function OverviewTab({ hackathonId }: OverviewTabProps) {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">ChainSpark Hackathon</h2>
        <p className="text-lg font-semibold mb-4">Calling All Builders, Dreamers, and Rule-Breakers!</p>
        <p className="text-gray-300 leading-relaxed mb-6">
          The crypto world is a wild ride—full of chaos, opportunity, and endless what-ifs. But one thing's for sure:
          innovation thrives where builders and storytellers collide. That's why FAIR3 and CARV are teaming up to launch
          the Tech Fairness Hackathon, a high-octane sprint to redefine the future of AI, Data, and Web3.
        </p>
        <p className="text-gray-300 leading-relaxed">
          This isn't just another hackathon. It's a battlefield for fairness, a playground for disruptors, and a
          launchpad for the next wave of decentralized innovation. Whether you're an AI wizard
        </p>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Why ChainSpark Hackathon?</h3>
          <h4 className="text-lg font-semibold mb-3">Saluting the Early Rebels—Redefining Data & Collaboration</h4>
          <p className="text-gray-300 leading-relaxed">
            ChainSpark Hackathon was born from a simple but radical belief: true innovation shouldn't be strangled by
            black-box algorithms or centralized gatekeepers. In an era of platform monopolies and diluted creator value,
            Chainspark is rallying builders to forge a transparent, platform-agnostic, and verifiable future for data
            governance and the creator economy.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Why ChainSpark Hackathon?</h3>
          <h4 className="text-lg font-semibold mb-3">Saluting the Early Rebels—Redefining Data & Collaboration</h4>
          <p className="text-gray-300 leading-relaxed">
            ChainSpark Hackathon was born from a simple but radical belief: true innovation shouldn't be strangled by
            black-box algorithms or centralized gatekeepers. In an era of platform monopolies and diluted creator value,
            Chainspark is rallying builders to forge a transparent, platform-agnostic, and verifiable future for data
            governance and the creator economy.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Why ChainSpark Hackathon?</h3>
          <h4 className="text-lg font-semibold mb-3">Saluting the Early Rebels—Redefining Data & Collaboration</h4>
          <p className="text-gray-300 leading-relaxed">
            ChainSpark Hackathon was born from a simple but radical belief: true innovation shouldn't be strangled by
            black-box algorithms or centralized gatekeepers. In an era of platform monopolies and diluted creator value,
            Chainspark is rallying builders to forge a transparent, platform-agnostic, and verifiable future for data
            governance and the creator economy.
          </p>
        </div>
      </div>
    </div>
  )
}
