import { Plus, ExternalLink } from "lucide-react"

export const ActiveProjects = () => {
  const projects = [
    {
      id: 1,
      name: "DeFi Trading Bot",
      status: "In Progress",
      progress: 75,
      hackathon: "Web3 Jam 2024",
    },
    {
      id: 2,
      name: "NFT Marketplace",
      status: "Review",
      progress: 90,
      hackathon: "ETH Global",
    },
  ]

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Active Projects</h2>
        <button className="flex items-center space-x-2 bg-[#0092ff] text-white px-4 py-2 rounded-md hover:bg-[#0080e6] transition-colors">
          <Plus className="h-4 w-4" />
          <span>New Project</span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-[#16161b] border border-[#2a2a2e] rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">{project.name}</h3>
              <ExternalLink className="h-4 w-4 text-[#949fa8] hover:text-white cursor-pointer" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-[#949fa8]">Status</span>
                <span className={project.status === "In Progress" ? "text-yellow-400" : "text-green-400"}>
                  {project.status}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#949fa8]">Hackathon</span>
                <span>{project.hackathon}</span>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-[#949fa8]">Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="w-full bg-[#2a2a2e] rounded-full h-2">
                  <div className="bg-[#0092ff] h-2 rounded-full" style={{ width: `${project.progress}%` }}></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
