import { useState } from "react";
import { 
  Home, 
  FileText, 
  Settings, 
  Users, 
  Cloud, 
  BookOpen, 
  Layers,
  Database,
  Shield,
  Zap,
  ChevronRight,
  ChevronDown
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Home", url: "/", icon: Home },
  { 
    title: "Getting Started", 
    icon: BookOpen,
    children: [
      { title: "Quick Start Guide", url: "/getting-started/quick-start" },
      { title: "Installation", url: "/getting-started/installation" },
      { title: "Configuration", url: "/getting-started/configuration" },
    ]
  },
  {
    title: "Cloud Services",
    icon: Cloud,
    children: [
      { title: "Infrastructure", url: "/cloud/infrastructure" },
      { title: "Deployment", url: "/cloud/deployment" },
      { title: "Monitoring", url: "/cloud/monitoring" },
    ]
  },
  {
    title: "APIs & Integration",
    icon: Layers,
    children: [
      { title: "REST APIs", url: "/api/rest" },
      { title: "GraphQL", url: "/api/graphql" },
      { title: "Webhooks", url: "/api/webhooks" },
    ]
  },
  {
    title: "Database",
    icon: Database,
    children: [
      { title: "Schema Design", url: "/database/schema" },
      { title: "Queries", url: "/database/queries" },
      { title: "Backup & Recovery", url: "/database/backup" },
    ]
  },
  {
    title: "Security",
    icon: Shield,
    children: [
      { title: "Authentication", url: "/security/auth" },
      { title: "Authorization", url: "/security/authz" },
      { title: "Encryption", url: "/security/encryption" },
    ]
  },
  {
    title: "Performance",
    icon: Zap,
    children: [
      { title: "Optimization", url: "/performance/optimization" },
      { title: "Caching", url: "/performance/caching" },
      { title: "Load Testing", url: "/performance/load-testing" },
    ]
  },
  { title: "Team Management", url: "/team", icon: Users },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [expandedGroups, setExpandedGroups] = useState<string[]>(['Getting Started']);
  const [collapsed, setCollapsed] = useState(false);

  const isActive = (path: string) => currentPath === path;
  const isGroupActive = (children: any[]) => children?.some(child => isActive(child.url));
  
  const toggleGroup = (title: string) => {
    setExpandedGroups(prev => 
      prev.includes(title) 
        ? prev.filter(g => g !== title)
        : [...prev, title]
    );
  };

  const getNavClassName = (isActive: boolean) =>
    `flex items-center w-full text-left transition-colors ${
      isActive 
        ? "bg-primary text-primary-foreground font-medium" 
        : "hover:bg-doc-nav-hover text-foreground"
    }`;

  return (
    <Sidebar className={`${collapsed ? "w-16" : "w-64"} border-r bg-doc-nav transition-all duration-200`} collapsible="icon">
      <SidebarContent className="px-2">
        {/* Header */}
        <div className="flex items-center gap-2 p-4 border-b">
          <div className="flex items-center justify-center w-8 h-8 bg-gradient-primary rounded-lg text-white font-bold text-sm">
            ∞
          </div>
          {!collapsed && (
            <div>
              <h1 className="font-semibold text-sm text-foreground">INFINITY CLOUD LABS</h1>
              <p className="text-xs text-muted-foreground">Documentation</p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="mt-4">
          <SidebarGroup>
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.children ? (
                    <div>
                      <SidebarMenuButton
                        onClick={() => toggleGroup(item.title)}
                        className={`${getNavClassName(isGroupActive(item.children))} justify-between`}
                      >
                        <div className="flex items-center gap-2">
                          <item.icon className="h-4 w-4 shrink-0" />
                          {!collapsed && <span className="text-sm">{item.title}</span>}
                        </div>
                        {!collapsed && (
                          expandedGroups.includes(item.title) ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )
                        )}
                      </SidebarMenuButton>
                      
                      {!collapsed && expandedGroups.includes(item.title) && (
                        <div className="mt-1 ml-6 space-y-1">
                          {item.children.map((child) => (
                            <SidebarMenuButton key={child.url} asChild>
                              <NavLink
                                to={child.url}
                                className={getNavClassName(isActive(child.url))}
                              >
                                <span className="text-sm">{child.title}</span>
                              </NavLink>
                            </SidebarMenuButton>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.url!}
                        className={getNavClassName(isActive(item.url!))}
                      >
                        <item.icon className="h-4 w-4 shrink-0" />
                        {!collapsed && <span className="text-sm">{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}