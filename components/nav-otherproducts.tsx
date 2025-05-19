"use client"

import * as React from "react"
import { Boxes } from "lucide-react"
import { NavMain } from "@/components/nav-main"

const otherProducts = [
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
]

export function NavOtherProducts() {
  return <NavMain items={otherProducts} />
}
