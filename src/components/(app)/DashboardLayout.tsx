"use client";

import { useState } from "react";
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
import { Clock, MessageSquare, CheckSquare, Search, User, Settings, LogOut } from "lucide-react";
import PreMeetingBrief from "./PreMeetingBrief";
import InMeetingWhisper from "./InMeetingWhisper";
import PostMeetingWrap from "./PostMeetingWrap";
import VibesSearch from "./VibesSearch";

export type DashboardView = "brief" | "whisper" | "wrap" | "search";

function DashboardContent() {
  const [activeView, setActiveView] = useState<DashboardView>("brief");
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  const renderContent = () => {
    switch (activeView) {
      case "brief":
        return <PreMeetingBrief />;
      case "whisper":
        return <InMeetingWhisper />;
      case "wrap":
        return <PostMeetingWrap />;
      case "search":
        return <VibesSearch />;
      default:
        return <PreMeetingBrief />;
    }
  };

  const menuItems = [
    {
      id: "brief" as DashboardView,
      label: "Pre-Meeting Brief",
      icon: Clock
    },
    {
      id: "whisper" as DashboardView,
      label: "In-Meeting Whisper",
      icon: MessageSquare
    },
    {
      id: "wrap" as DashboardView,
      label: "Post-Meeting Wrap",
      icon: CheckSquare
    },
    {
      id: "search" as DashboardView,
      label: "Vibes Search",
      icon: Search
    }
  ];

  return (
    <TooltipProvider>
      <SidebarProvider>
        <Sidebar className="w-64" collapsible="icon">
          <SidebarHeader className="p-6">
            {!isCollapsed && <h1 className="text-xl font-normal text-slate-900">perfct.io</h1>}
          </SidebarHeader>
          
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
                    <SidebarMenuButton className="w-full justify-start h-10 hover:bg-slate-50">
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
