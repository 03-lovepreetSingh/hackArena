"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarItem {
  href: string;
  label: string;
  icon: string;
  active?: boolean;
}

interface ResponsiveSidebarProps {
  items: SidebarItem[];
  className?: string;
}

export default function ResponsiveSidebar({
  items,
  className,
}: ResponsiveSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden fixed top-4 left-4 z-50 bg-neutral-800 hover:bg-neutral-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed md:static inset-y-0 left-0 z-40 w-64 border-r border-neutral-800 bg-neutral-900 transform transition-transform duration-200 ease-in-out md:transform-none",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
          className
        )}
      >
        <nav className="p-4 space-y-2 mt-16 md:mt-0">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors",
                item.active
                  ? "text-blue-400 bg-blue-900/20"
                  : "text-neutral-400 hover:text-white hover:bg-neutral-800"
              )}
              onClick={() => setIsOpen(false)}
            >
              <span className="text-sm">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
