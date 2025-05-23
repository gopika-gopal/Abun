"use client";

import * as React from "react";
import "../app/globals.css";
import {
  Command,
  AudioWaveform,
  BookOpen,
  Link,
  Share2,
  CreditCard,
  LifeBuoy,
  Megaphone,
  MessageSquare,
  Package,
  Puzzle,
  Users,
  Calendar,
  BarChart3,
  Calculator,
  FileText,
  LayoutDashboard,
  PenTool,
  Search,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

import Image from "next/image";
import lightLogo from "./img/abun light mode logo.svg";
import darkLogo from "./img/abun dark mode logo.svg";
import { useTheme } from "next-themes";


const data = {
  user: {
    name: "Profile",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "samplewebsite.com",
      logo: () => (
        <img
          src="https://app.abun.com/static/media/default-competitor-logo1.405d586ecdc96f2013cc.webp"
          alt="logo"
          className="size-12 object-contain"
        />
      ),
      plan: "",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Articles",
      url: "#",
      icon: FileText,
      isActive: true,
      items: [
        { title: "Create Article", url: "/create-article" },
        { title: "Generated Articles", url: "/dashboard" },
        { title: "Keyword Projects", url: "#" },
        { title: "AI Keyword to Article", url: "/ai-keyword-to-article" },
        { title: "Steal Competitor Keyword", url: "#" },
        { title: "Import Keyword from GSC", url: "#" },
        { title: "Manual Keyword to Article", url: "#" },
        { title: "Bulk Keyword to Article", url: "#" },
        { title: "Longtail Keyword to Article", url: "#" },
        { title: "Article Settings", url: "#" },
      ],
    },
    {
      title: "Auto Blog",
      url: "#",
      icon: LayoutDashboard,
    },
    {
      title: "Programmatic SEO",
      url: "#",
      icon: PenTool,
      isActive: false,
      items: [
        { title: "Create pSEO Articles", url: "#" },
        { title: "Programmatic SEO Projects", url: "#" },
      ],
    },
    {
      title: "AI Glossary Creator",
      url: "#",
      icon: BookOpen,
      isActive: false,
      items: [
        { title: "Create AI Glossary", url: "#" },
        { title: "AI Glossary Projects", url: "#" },
      ],
    },
    {
      title: "Blog Author Finder",
      url: "#",
      icon: Users,
    },
    {
      title: "Guest Post Finder",
      url: "#",
      icon: Search,
      isActive: false,
      items: [
        { title: "Create Guest Post Finder", url: "#" },
        { title: "Guest Post Finder Projects", url: "#" },
      ],
    },
    {
      title: "Reddit SEO",
      url: "#",
      icon: MessageSquare,
      isActive: false,
      items: [
        { title: "Create Reddit SEO", url: "#" },
        { title: "Reddit SEO Projects", url: "#" },
      ],
    },
    {
      title: "Internal Links",
      url: "#",
      icon: Link,
    },
    {
      title: "Free Backlinks",
      url: "#",
      icon: Share2,
    },
    {
      title: "GSC Insights",
      url: "#",
      icon: BarChart3,
    },
    {
      title: "AI Calculator Generator",
      url: "#",
      icon: Calculator,
    },
    {
      title: "Content Calendar",
      url: "#",
      icon: Calendar,
    },

  ],

  projects: [
    {
      name: "Integrations",
      url: "#",
      icon: Puzzle,
    },
    {
      name: "What's New",
      url: "#",
      icon: Megaphone,
    },
    {
      name: "Subscription",
      url: "#",
      icon: CreditCard,
    },
    {
      name: "Help Center",
      url: "#",
      icon: LifeBuoy,
      items: [
        { title: "Knowledgebase", url: "#" },
        { title: "Live Chat Support", url: "#" },
        { title: "Tutorials", url: "#" },
      ],
    },
    {
      name: "Affiliate Program",
      url: "#",
      icon: Users,
    },
    {
      name: "Other Products",
      url: "#",
      icon: Package,
      items: [
        { title: "Deliveryman.ai", url: "#" },
        { title: "Draftss.com", url: "#" },
        { title: "AICallCenter", url: "#" },
        { title: "ClientPortalIOS", url: "#" },
      ],
    },
  ]


};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { theme } = useTheme();

  const logoSrc = theme === "dark" ? darkLogo : lightLogo;

  return (

    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="w-full flex justify-center mb-4">
          <Image src={logoSrc} alt="Logo" width={100} height={40} />
        </div>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <div className="p-1">
          <NavMain items={data.navMain} />
          <NavProjects projects={data.projects} />
        </div>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
