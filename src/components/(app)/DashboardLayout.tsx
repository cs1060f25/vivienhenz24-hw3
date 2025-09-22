"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useSidebar } from "@/components/ui/sidebar";
import { Clock, MessageSquare, CheckSquare, Search, User, Settings, LogOut, Shield, Brain } from "lucide-react";
import MeetingSimulation from "./MeetingSimulation";
import VibesSearch from "./VibesSearch";
import ConsentManager from "./ConsentManager";
import MemoryInsights from "./MemoryInsights";

export type DashboardView = "meeting" | "search" | "consent" | "insights";

function DashboardContent() {
  const [activeView, setActiveView] = useState<DashboardView>("meeting");
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  const router = useRouter();

  const handleLogout = () => {
    // Clear any stored authentication data here if needed
    // For now, just navigate to the root page
    router.push('/');
  };

  const renderContent = () => {
    switch (activeView) {
      case "meeting":
        return <MeetingSimulation />;
      case "search":
        return <VibesSearch />;
      case "consent":
        return <ConsentManager />;
      case "insights":
        return <MemoryInsights />;
      default:
        return <MeetingSimulation />;
    }
  };

  const menuItems = [
    {
      id: "meeting" as DashboardView,
      label: "Meeting Simulation",
      icon: MessageSquare
    },
    {
      id: "search" as DashboardView,
      label: "Vibes Search",
      icon: Search
    },
    {
      id: "insights" as DashboardView,
      label: "Memory Insights",
      icon: Brain
    },
    {
      id: "consent" as DashboardView,
      label: "Privacy & Consent",
      icon: Shield
    }
  ];

  return (
    <TooltipProvider>
      <SidebarProvider>
        <Sidebar className="w-64" collapsible="icon">
          {!isCollapsed && (
            <SidebarHeader className="p-6">
              <h1 className="text-lg font-normal text-slate-900">Hi, Mary</h1>
            </SidebarHeader>
          )}
          
          <SidebarContent className="p-2">
            <SidebarMenu>
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeView === item.id;
                
                const button = (
                  <SidebarMenuButton
                    onClick={() => setActiveView(item.id)}
                    className={`w-full justify-start h-12 ${
                      isActive ? 'bg-slate-100 text-slate-900 border-r-2 border-slate-900' : 'hover:bg-slate-50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-normal">{item.label}</span>
                  </SidebarMenuButton>
                );

                return (
                  <SidebarMenuItem key={item.id}>
                    {isCollapsed ? (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          {button}
                        </TooltipTrigger>
                        <TooltipContent side="right">
                          <p>{item.label}</p>
                        </TooltipContent>
                      </Tooltip>
                    ) : (
                      button
                    )}
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarContent>
        
          <SidebarFooter className="p-4">
            <Separator className="mb-4" />
            <SidebarMenu>
              <SidebarMenuItem>
                {(() => {
                  const settingsButton = (
                    <SidebarMenuButton className="w-full justify-start h-10 hover:bg-slate-50">
                      <Settings className="w-4 h-4" />
                      <span className="font-normal">Settings</span>
                    </SidebarMenuButton>
                  );
                  return isCollapsed ? (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        {settingsButton}
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        <p>Settings</p>
                      </TooltipContent>
                    </Tooltip>
                  ) : (
                    settingsButton
                  );
                })()}
              </SidebarMenuItem>
              <SidebarMenuItem>
                {(() => {
                  const signOutButton = (
                    <SidebarMenuButton 
                      onClick={handleLogout}
                      className="w-full justify-start h-10 hover:bg-slate-50"
                    >
                      <LogOut className="w-4 h-4" />
                      <span className="font-normal">Sign Out</span>
                    </SidebarMenuButton>
                  );
                  return isCollapsed ? (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        {signOutButton}
                      </TooltipTrigger>
                      <TooltipContent side="right">
                        <p>Sign Out</p>
                      </TooltipContent>
                    </Tooltip>
                  ) : (
                    signOutButton
                  );
                })()}
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
      </Sidebar>
      
      <SidebarInset className="flex-1 bg-gradient-to-br from-slate-50 to-blue-50">
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {renderContent()}
        </div>
      </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
}

export default function DashboardLayout() {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <DashboardContent />
      </SidebarProvider>
    </TooltipProvider>
  );
}
