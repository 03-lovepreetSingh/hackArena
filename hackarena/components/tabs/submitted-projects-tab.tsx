import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";

interface SubmittedProjectsTabProps {
  hackathonId: string;
}

export function SubmittedProjectsTab({
  hackathonId,
}: SubmittedProjectsTabProps) {
  const projects = [
    {
      id: 1,
      name: "Init Club Pro",
      description:
        "Init Club Pro was born from a simple but radical belief: true innovation shouldn't...",
      likes: 5,
      lastEdited: "6 days ago",
      builder: "John McKenzie",
      tags: ["DeFi", "Infra"],
    },
    {
      id: 2,
      name: "Ward",
      description:
        "Ward was born from a simple but radical belief: true innovation shouldn't...",
      likes: 10,
      lastEdited: "6 days ago",
      builder: "John McKenzie",
      tags: ["DeFi", "Infra"],
      featured: true,
    },
    {
      id: 3,
      name: "Wiral",
      description:
        "Wiral was born from a simple but radical belief: true innovation shouldn't...",
      likes: 5,
      lastEdited: "6 days ago",
      builder: "John McKenzie",
      tags: ["DeFi", "Infra"],
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Submitted Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="bg-neutral-800 border-neutral-700 p-6 relative"
          >
            {/* Project Image Placeholder */}
            <div className="w-full h-32 bg-neutral-700 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-neutral-500">
                {project.name.charAt(0)}
              </span>
            </div>

            {/* Like Button */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 bg-neutral-900/80 hover:bg-neutral-900"
            >
              <Heart
                className={`h-4 w-4 mr-1 ${
                  project.featured
                    ? "fill-blue-500 text-blue-500"
                    : "text-neutral-400"
                }`}
              />
              <span
                className={
                  project.featured ? "text-blue-500" : "text-neutral-400"
                }
              >
                {project.likes}
              </span>
            </Button>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p className="text-neutral-400 text-sm line-clamp-2">
                {project.description}
              </p>

              <div className="text-xs text-neutral-500">
                <div>Last edited: {project.lastEdited}</div>
                <div>Builder: {project.builder}</div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-blue-900/30 text-blue-400 border-blue-700"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
