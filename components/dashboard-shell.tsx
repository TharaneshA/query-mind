"use client"

import { type ReactNode, useState } from "react"
import {
  Database,
  History,
  Home,
  LayoutDashboard,
  Moon,
  Settings,
  Sun,
  Sparkles,
  FileText,
  BarChart,
  LogOut,
  User,
  CreditCard,
  HelpCircle,
} from "lucide-react"

import { useIsMobile } from "@/hooks/use-mobile"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import { ConnectionManager } from "@/components/connection-manager"
import { useTheme } from "next-themes"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

interface DashboardShellProps {
  children: ReactNode
}

export function DashboardShell({ children }: DashboardShellProps) {
  const [showConnectionManager, setShowConnectionManager] = useState(false)
  const { theme, setTheme } = useTheme()
  const isMobile = useIsMobile()
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SidebarProvider defaultOpen={!sidebarCollapsed} onOpenChange={setSidebarCollapsed}>
        <div className="flex min-h-screen w-full">
          <Sidebar variant="floating" collapsible="icon">
            <SidebarHeader>
              <div className="flex items-center space-x-2 px-2 py-2">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-yellow opacity-70 blur-sm dark:bg-gradient-yellow-dark"></div>
                  <Database className="relative h-6 w-6" />
                </div>
                <span className="font-bold text-lg gradient-text">QueryMind</span>
              </div>
              <Button
                variant="outline"
                className="w-full justify-start bg-gradient-card hover:bg-primary/10 transition-all duration-300 border-primary/20 group"
                onClick={() => setShowConnectionManager(true)}
              >
                <Database className="mr-2 h-4 w-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                Connect Database
              </Button>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild isActive className="transition-all duration-200">
                        <Link href="/dashboard">
                          <LayoutDashboard className="h-4 w-4" />
                          <span>Dashboard</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild className="transition-all duration-200">
                        <Link href="/">
                          <Home className="h-4 w-4" />
                          <span>Home</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild className="transition-all duration-200">
                        <Link href="/analytics">
                          <BarChart className="h-4 w-4" />
                          <span>Analytics</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild className="transition-all duration-200">
                        <Link href="/documentation">
                          <FileText className="h-4 w-4" />
                          <span>Documentation</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
              <SidebarSeparator />
              <SidebarGroup>
                <SidebarGroupLabel>Recent Connections</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton className="transition-all duration-200">
                        <Database className="h-4 w-4 text-primary" />
                        <span>PostgreSQL - Production</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton className="transition-all duration-200">
                        <Database className="h-4 w-4 text-amber-500" />
                        <span>MySQL - Development</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton className="transition-all duration-200">
                        <Database className="h-4 w-4 text-green-500" />
                        <span>MongoDB - Analytics</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton className="transition-all duration-200">
                        <Database className="h-4 w-4 text-red-500" />
                        <span>Oracle - Finance</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton className="transition-all duration-200">
                        <Database className="h-4 w-4 text-blue-500" />
                        <span>SQL Server - HR</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
              <SidebarSeparator />
              <SidebarGroup>
                <SidebarGroupLabel>History</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild className="transition-all duration-200">
                        <Link href="/history/recent">
                          <History className="h-4 w-4" />
                          <span>Recent Queries</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild className="transition-all duration-200">
                        <Link href="/history/saved">
                          <History className="h-4 w-4" />
                          <span>Saved Queries</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild className="transition-all duration-200">
                    <Link href="/settings">
                      <Settings className="h-4 w-4" />
                      <span>Settings</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="transition-all duration-200"
                  >
                    {theme === "dark" ? (
                      <Sun className="h-4 w-4 text-primary" />
                    ) : (
                      <Moon className="h-4 w-4 text-primary" />
                    )}
                    <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarFooter>
          </Sidebar>
          <div className="flex flex-1 flex-col">
            <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 lg:px-6">
              <SidebarTrigger />
              <div className="w-full flex-1 flex items-center justify-between">
                <h1 className="text-lg font-semibold">Dashboard</h1>
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="hidden md:flex gap-2 transition-all duration-200 hover:bg-primary/10 border-primary/20"
                    asChild
                  >
                    <Link href="/pricing">
                      <Sparkles className="h-4 w-4 text-primary" />
                      <span>Upgrade Pro</span>
                    </Link>
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg" alt="User" />
                          <AvatarFallback className="bg-primary/10 text-primary">JD</AvatarFallback>
                        </Avatar>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link href="/profile">
                          <User className="mr-2 h-4 w-4" />
                          <span>Profile</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/settings">
                          <Settings className="mr-2 h-4 w-4" />
                          <span>Settings</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/billing">
                          <CreditCard className="mr-2 h-4 w-4" />
                          <span>Billing</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/support">
                          <HelpCircle className="mr-2 h-4 w-4" />
                          <span>Support</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link href="/">
                          <LogOut className="mr-2 h-4 w-4" />
                          <span>Log out</span>
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </header>
            <main className="flex flex-1 flex-col">{children}</main>
          </div>
          <ConnectionManager open={showConnectionManager} onOpenChange={setShowConnectionManager} />
        </div>
      </SidebarProvider>
    </ThemeProvider>
  )
}
