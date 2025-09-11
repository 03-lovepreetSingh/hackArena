import { ThumbsUp, Eye, MessageCircle } from "lucide-react"

export const OpenVoting = () => {
  const projects = [
    {
      id: 1,
      name: "Decentralized Social Network",
      author: "Alice Johnson",
      votes: 234,
      views: 1520,
      comments: 45,
      description: "A privacy-focused social platform built on blockchain technology.",
    },
    {
      id: 2,
      name: "AI-Powered DeFi Analytics",
      author: "Bob Smith",
      votes: 189,
      views: 980,
      comments: 32,
      description: "Machine learning tools for analyzing DeFi market trends and opportunities.",
    },
  ]

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Open Voting</h2>
        <button className="text-[#0092ff] hover:text-[#0080e6] text-sm">View All Projects</button>
      </div>
      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-[#16161b] border border-[#2a2a2e] rounded-lg p-6">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-semibold mb-1">{project.name}</h3>
                <p className="text-[#949fa8] text-sm">by {project.author}</p>
              </div>
              <button className="flex items-center space-x-1 bg-[#0092ff] text-white px-3 py-1 rounded-md hover:bg-[#0080e6] transition-colors">
                <ThumbsUp className="h-3 w-3" />
                <span className="text-sm">Vote</span>
              </button>
            </div>
            <p className="text-[#949fa8] text-sm mb-4">{project.description}</p>
            <div className="flex items-center space-x-6 text-sm text-[#949fa8]">
              <div className="flex items-center space-x-1">
                <ThumbsUp className="h-4 w-4" />
                <span>{project.votes}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Eye className="h-4 w-4" />
                <span>{project.views}</span>
              </div>
              <div className="flex items-center space-x-1">
                <MessageCircle className="h-4 w-4" />
                <span>{project.comments}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
