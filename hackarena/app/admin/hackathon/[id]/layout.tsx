import type React from "react";
import { AdminSidebar } from "@/components/admin-sidebar";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Link from "next/link";

export default function AdminLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      {/* Header */}
      <header className="border-b border-neutral-800 bg-neutral-900/95 backdrop-blur">
        <div className="flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="flex items-center space-x-2 text-neutral-400 hover:text-white"
            >
              <X className="h-4 w-4" />
              <span className="text-sm">Save hackathon draft & quit</span>
            </Link>
          </div>

          <h1 className="text-lg font-semibold">Add hackathon info</h1>

          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              className="border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white bg-transparent"
            >
              Preview publication
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Publish Hackathon
            </Button>
          </div>
        </div>
      </header>
      <AdminSidebar activeTab="" hackathonId={params.id} />
      <div className="flex">
        <main className="flex-1 md:ml-0 ml-0">{children}</main>
      </div>
    </div>
  );
}
