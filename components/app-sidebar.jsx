"use client";

import * as React from "react";
import {
  BookCopyIcon,
  Frame,
  HomeIcon,
  Map,
  PawPrintIcon,
  PieChart,
  TicketsIcon,
  User2Icon,
} from "lucide-react";

import { NavMain } from "@/components/admin/nav-main";
import { NavProjects } from "@/components/admin/nav-projects";
import { NavUser } from "@/components/admin/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import Image from "next/image";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },

  navMain: [
    {
      label: "Overview",
      groups: [
        {
          title: "Dashboard",
          url: "#",
          icon: HomeIcon,
          isActive: true,
          items: [
            {
              title: "Home",
              url: "/admin/dashboard",
            },
          ],
        },
      ],
    },
    {
      label: "Management",
      groups: [
        {
          title: "Pets Management",
          url: "#",
          icon: PawPrintIcon,
          items: [
            {
              title: "Pending Approval",
              url: "#",
            },
            {
              title: "All Pets",
              url: "#",
            },
            {
              title: "Accepted Pets",
              url: "#",
            },
            {
              title: "Declined Pets",
              url: "#",
            },
          ],
        },
        {
          title: "Users Management",
          url: "#",
          icon: User2Icon,
          items: [
            {
              title: "All Users",
              url: "/admin/user",
            },
            {
              title: "Admin Users",
              url: "/admin/user/admin",
            },
            {
              title: "Blocked Users (not done)",
              url: "/admin/user/blocked",
            },
          ],
        },
      ],
    },
    {
      label: "Content",
      groups: [
        {
          title: "Categories",
          url: "#",
          icon: BookCopyIcon,
          items: [
            {
              title: "Add Category",
              url: "/admin/category/add",
            },
            {
              title: "Categories",
              url: "/admin/category",
            },
          ],
        },
        {
          title: "Banners",
          url: "#",
          icon: TicketsIcon,
          items: [
            {
              title: "Add Banner",
              url: "/admin/banner/add",
            },
            {
              title: "Banners",
              url: "/admin/banner",
            },
          ],
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <div className="flex space-x-2 items-center">
          <div className="text-sidebar-primary-foreground flex aspect-square size-12 items-center justify-center rounded-lg">
            <Image src="/logo.png" width={48} height={48} alt="logo" />
          </div>
          <div className="grid flex-1 text-left leading-tight">
            <span className="truncate font-semibold font-petrona text-xl">
              Adopt<span className="text-primary">Nest</span>
            </span>
            <span className="truncate text-sm font-karla text-muted-foreground">
              Admin Panel
            </span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>{/* <NavUser user={data.user} /> */}</SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
