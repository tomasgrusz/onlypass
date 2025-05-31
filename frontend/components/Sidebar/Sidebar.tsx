"use client";

import styles from "./Sidebar.module.scss";
import {
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  Sidebar as UISidebar,
} from "../ui/sidebar";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import {
  Book,
  ChevronDown,
  HelpCircle,
  Home,
  MessageSquareHeart,
  Phone,
  Search,
  Settings,
  ShieldUser,
  Ticket,
  Tickets,
} from "lucide-react";

const items = [
  {
    title: "Home",
    url: "/home",
    icon: <Home />,
  },
  {
    title: "Explore",
    url: "/explore",
    icon: <Search />,
    enabled: false,
  },
  {
    title: "My Passes",
    url: "/passes",
    icon: <Tickets />,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: <Settings />,
    enabled: false,
  },
];

const recentPasses = [
  {
    title: "Pass 1",
    url: "#",
    icon: <Ticket />,
    enabled: true,
  },
];

const helpItems = [
  {
    title: "Help Center",
    url: "#",
    icon: <HelpCircle />,
    enabled: false,
  },
  {
    title: "Contact Support",
    url: "#",
    icon: <Phone />,
    enabled: false,
  },
  {
    title: "Privacy Policy",
    url: "#",
    icon: <ShieldUser />,
    enabled: false,
  },
  {
    title: "Terms of Service",
    url: "#",
    icon: <Book />,
    enabled: false,
  },
  {
    title: "Feedback",
    url: "#",
    icon: <MessageSquareHeart />,
    enabled: false,
  },
];

const Sidebar = () => {
  return (
    <UISidebar className={cn(styles.Sidebar)} side="right">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>General</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className={item.enabled === false ? styles.disabled : ""}
                >
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className={item.enabled === false ? styles.disabled : ""}
                      onClick={
                        item.enabled === false
                          ? (e) => e.preventDefault()
                          : undefined
                      }
                    >
                      {item.icon}
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarGroupLabel>Recent Passes</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {recentPasses.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className={item.enabled === false ? styles.disabled : ""}
                >
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      {item.icon}
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Collapsible defaultOpen className="group/collapsible">
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Help
                <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  {helpItems.map((item) => (
                    <SidebarMenuItem
                      key={item.title}
                      className={item.enabled === false ? styles.disabled : ""}
                    >
                      <SidebarMenuButton asChild>
                        <a href={item.url}>
                          {item.icon}
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarFooter>
    </UISidebar>
  );
};

export default Sidebar;
