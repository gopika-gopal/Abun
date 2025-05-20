"use client"
import * as React from "react"
import "../app/globals.css";
import {
  FileText,
  Boxes,
  Bot,
  Command,
  HelpCircle,
  Link2,
  ShoppingCart,
  Handshake,
  RefreshCcw,
  MessageCircle,
  SquarePen,
  AudioWaveform,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

import Image from 'next/image';
import abunLogo from "./img/New-Abun-logo.png";
import { title } from "process";
// This is sample data.
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
    // {
    //   name: "Acme Inc",
    //   logo: GalleryVerticalEnd,
    //   plan: "Enterprise",
    // },
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
  //  teams: [
  //   {
  //     name: "samplewebsite.com",
  //     logo: () => (
  //       <img
  //         src="https://app.abun.com/static/media/default-competitor-logo1.405d586ecdc96f2013cc.webp"
  //         alt="logo"
  //         className="size-12 object-contain"
  //       />
  //     ),
  //     plan: "",
  //   },
  //   {
  //     name: "samplewebsite.com",
  //     logo: GalleryVerticalEnd,
  //     plan: "",
  //   },
  //   {
  //     name: "Acme Corp.",
  //     logo: AudioWaveform,   
  //     plan: "Startup",
  //   },
  //   {
  //     name: "Evil Corp.",
  //     logo: Command,        
  //     plan: "Free",
  //   },
  // ],

  navMain: [
    {
      title: "Articles",
      url: "#",
      icon: FileText,
      isActive: false,
      items: [
        {
          title: "Create Article",
          url: "#",
        },
        {
          title: "Generated Articles",
          url: "#",
        },
        {
          title: "Keyword Projects",
          url: "#",
        },
        {
          title: "AI Keyword to Article",
          url: "#",
        },
        {
          title: "Steal Competitor Keyword",
          url: "#",
        },
        {
          title: "Import Keyword from GSC",
          url: "#",
        },
        {
          title: "Manual Keyword to Article",
          url: "#",
        },
        {
          title: "Bulk Keyword to Article",
          url: "#",
        },
        {
          title: "Longtail Keyword to Article",
          url: "#",
        },
        {
          title: "Article Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Other Products",
      url: "#",
      icon: Boxes,
      items: [
        {
          title: "Deliveryman.ai",
          url: "#",
        },
        {
          title: "Draftss.com",
          url: "#",
        },
        {
          title: "AICallCenter",
          url: "#",
        },
        {
          title: "ClientPortalIOS",
          url: "#",
        },
      ],
      
    },
    // {
    //   title: "Documentation",
    //   url: "#",
    //   icon: BookOpen,
    //   items: [
    //     {
    //       title: "Introduction",
    //       url: "#",
    //     },
    //     {
    //       title: "Get Started",
    //       url: "#",
    //     },
    //     {
    //       title: "Tutorials",
    //       url: "#",
    //     },
    //     {
    //       title: "Changelog",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "Settings",
    //   url: "#",
    //   icon: Settings2,
    //   items: [
    //     {
    //       title: "General",
    //       url: "#",
    //     },
    //     {
    //       title: "Team",
    //       url: "#",
    //     },
    //     {
    //       title: "Billing",
    //       url: "#",
    //     },
    //     {
    //       title: "Limits",
    //       url: "#",
    //     },
    //   ],
    // },
  ],
  projects: [
    {
      name: "Auto Blog",
      url: "#",
      icon: SquarePen,
    },
    {
      name: "Internal Links",
      url: "#",
      icon: Link2,
    },
    {
      name: "Free Backlinks",
      url: "#",
      icon: Handshake,
    },
    {
      name: "Integrations",
      url: "#",
      icon: Command,
    },
    {
      name: "Subscription",
      url: "#",
      icon: ShoppingCart,
    },
    {
      name: "Affiliate Program",
      url: "#",
      icon: Bot,
    },
    {
      name: "Help Center",
      url: "#",
      icon: HelpCircle,
    },
    {
      name: "Updates",
      url: "#",
      icon: RefreshCcw,
    },
    {
      name: "Live Chat Support",
      url: "#",
      icon: MessageCircle,
    },
  ],
  otherProducts: [
    {
      title: "Other Products",
      url: "#",
      icon: Boxes,
      items: [
        { title: "Deliveryman.ai", url: "#" },
        { title: "Draftss.com", url: "#" },
        { title: "AICallCenter", url: "#" },
        { title: "ClientPortalIOS", url: "#" },
      ],
    },
  ],

}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="w-full flex justify-center mb-4">
          <Image src={abunLogo} alt="Logo" width={100} height={40} />
        </div>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )

}
