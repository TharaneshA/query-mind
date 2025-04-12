import type { Metadata } from "next"

import { DashboardShell } from "@/components/dashboard-shell"
import { ChatInterface } from "@/components/chat-interface"

export const metadata: Metadata = {
  title: "Dashboard - QueryMind",
  description: "Query your databases with natural language",
}

export default function DashboardPage() {
  return (
    <DashboardShell>
      <ChatInterface />
    </DashboardShell>
  )
}
