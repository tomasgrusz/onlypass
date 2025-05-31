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
import { ChevronDown } from "lucide-react";

const items = [
  {
    title: "Home",
    url: "#",
    icon: <></>,
  },
  {
    title: "Explore",
    url: "#",
    icon: <></>,
  },
  {
    title: "My Passes",
    url: "#",
    icon: <></>,
  },
  {
    title: "Search",
    url: "#",
    icon: <></>,
  },
  {
    title: "Settings",
    url: "#",
    icon: <></>,
  },
];

const recentPasses = [
  {
    title: "Pass 1",
    url: "#",
    icon: <></>,
  },
];

const helpItems = [
  {
    title: "Help Center",
    url: "#",
    icon: <></>,
  },
  {
    title: "Contact Support",
    url: "#",
    icon: <></>,
  },
  {
    title: "Privacy Policy",
    url: "#",
    icon: <></>,
  },
  {
    title: "Terms of Service",
    url: "#",
    icon: <></>,
  },
  {
    title: "Feedback",
    url: "#",
    icon: <></>,
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
                <SidebarMenuItem key={item.title}>
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
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarGroupLabel>Recent Passes</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {recentPasses.map((item) => (
                <SidebarMenuItem key={item.title}>
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
                    <SidebarMenuItem key={item.title}>
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
