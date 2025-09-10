"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

const sidebarItems = [
  { href: "#", label: "Quest", icon: "🎯" },
  { href: "#", label: "My Certifications", icon: "🏆" },
  { href: "#", label: "Explore Course", icon: "📚" },
  { href: "#", label: "Dashboard", icon: "📊" },
  { href: "/", label: "Explore Hackathons", icon: "🚀" },
  { href: "#", label: "Project Archive", icon: "📁" },
  { href: "#", label: "Community Events", icon: "🎪" },
  { href: "#", label: "Learning Camps", icon: "🏕️" },
  { href: "#", label: "Discussion & Support", icon: "💬" },
  { href: "#", label: "Advocate Program", icon: "🥇" },
  { href: "#", label: "More", icon: "➕" },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <div className="bg-neutral-900 min-h-screen flex">
      <Sidebar className="bg-neutral-950 text-neutral-200 border-r border-neutral-800">
        {/* Header with Logo */}
        <SidebarHeader className="flex items-center gap-2 px-3 py-4 border-b border-neutral-800">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png" // 👉 replace with your logo file
              alt="HackX Logo"
              width={32}
              height={32}
              priority
            />
            <span className="font-bold text-lg text-white">HackX</span>
          </Link>
        </SidebarHeader>

        {/* Menu Items */}
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <Link href={item.href} passHref legacyBehavior>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === item.href}
                      className="hover:bg-neutral-800 hover:text-white 
                               data-[active=true]:bg-neutral-700 
                               data-[active=true]:text-white 
                               rounded-lg transition-colors"
                    >
                      <a className="flex items-center gap-2 px-2 py-2">
                        <span className="text-lg">{item.icon}</span>
                        <span>{item.label}</span>
                      </a>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>

        {/* Footer */}
        <SidebarFooter className="px-3 py-2 border-t border-neutral-800">
          <p className="text-xs text-neutral-500">© 2025 HackX</p>
        </SidebarFooter>
      </Sidebar>
    </div>
  );
}
