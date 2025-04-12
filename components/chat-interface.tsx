"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Send, Settings, Copy, Download, Sparkles, Database, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface Message {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
}

interface ProcessStep {
  id: string
  status: "pending" | "complete" | "error"
  message: string
  timestamp: Date
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [processSteps, setProcessSteps] = useState<ProcessStep[]>([])
  const [temperature, setTemperature] = useState(1)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isProcessing) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsProcessing(true)
    setProcessSteps([])

    // Simulate processing steps with timeouts
    setTimeout(() => {
      setProcessSteps((prev) => [
        ...prev,
        {
          id: "1",
          status: "pending",
          message: "Analyzing your query...",
          timestamp: new Date(),
        },
      ])

      setTimeout(() => {
        setProcessSteps((prev) => prev.map((step) => (step.id === "1" ? { ...step, status: "complete" } : step)))

        setProcessSteps((prev) => [
          ...prev,
          {
            id: "2",
            status: "pending",
            message: "Connecting to database...",
            timestamp: new Date(),
          },
        ])

        setTimeout(() => {
          setProcessSteps((prev) => prev.map((step) => (step.id === "2" ? { ...step, status: "complete" } : step)))

          setProcessSteps((prev) => [
            ...prev,
            {
              id: "3",
              status: "pending",
              message: "Generating SQL query...",
              timestamp: new Date(),
            },
          ])

          setTimeout(() => {
            setProcessSteps((prev) => prev.map((step) => (step.id === "3" ? { ...step, status: "complete" } : step)))

            setProcessSteps((prev) => [
              ...prev,
              {
                id: "4",
                status: "pending",
                message: "Executing query...",
                timestamp: new Date(),
              },
            ])

            setTimeout(() => {
              setProcessSteps((prev) => prev.map((step) => (step.id === "4" ? { ...step, status: "complete" } : step)))

              // Add assistant message with response
              const assistantMessage: Message = {
                id: Date.now().toString(),
                content: generateResponse(input),
                role: "assistant",
                timestamp: new Date(),
              }

              setMessages((prev) => [...prev, assistantMessage])
              setIsProcessing(false)
            }, 1000)
          }, 1200)
        }, 800)
      }, 600)
    }, 500)
  }

  const generateResponse = (query: string) => {
    // This is a simple simulation - in a real app, this would call an API
    if (query.toLowerCase().includes("customer") && query.toLowerCase().includes("order")) {
      return `I've found the top customers by order value:

\`\`\`sql
SELECT 
  customers.name, 
  customers.email,
  COUNT(orders.id) as order_count,
  SUM(orders.total) as total_spent
FROM 
  customers
JOIN 
  orders ON customers.id = orders.customer_id
GROUP BY 
  customers.id
ORDER BY 
  total_spent DESC
LIMIT 10;
\`\`\`

**Results:**
| name | email | order_count | total_spent |
|------|-------|-------------|-------------|
| John Smith | john@example.com | 12 | $2,450.00 |
| Sarah Johnson | sarah@example.com | 8 | $1,875.50 |
| Michael Brown | michael@example.com | 5 | $1,340.25 |
| Emily Davis | emily@example.com | 15 | $3,200.75 |
| David Wilson | david@example.com | 3 | $750.00 |`
    } else if (query.toLowerCase().includes("product") && query.toLowerCase().includes("inventory")) {
      return `Here are the products with low inventory:

\`\`\`sql
SELECT 
  products.name,
  products.sku,
  inventory.quantity,
  inventory.last_updated
FROM 
  products
JOIN 
  inventory ON products.id = inventory.product_id
WHERE 
  inventory.quantity < 10
ORDER BY 
  inventory.quantity ASC;
\`\`\`

**Results:**
| name | sku | quantity | last_updated |
|------|-----|----------|-------------|
| Wireless Earbuds | SKU-1234 | 2 | 2023-04-10 09:30:00 |
| Smart Watch | SKU-5678 | 5 | 2023-04-09 14:15:00 |
| Bluetooth Speaker | SKU-9012 | 8 | 2023-04-08 11:45:00 |`
    } else {
      return `I've run a query based on your request:

\`\`\`sql
SELECT * FROM ${query.toLowerCase().includes("user") ? "users" : "products"} LIMIT 10;
\`\`\`

**Results:**
${
  query.toLowerCase().includes("user")
    ? `| id | name | email | created_at |
|------|-------|-------------|-------------|
| 1 | John Smith | john@example.com | 2023-01-15 |
| 2 | Sarah Johnson | sarah@example.com | 2023-01-20 |
| 3 | Michael Brown | michael@example.com | 2023-02-05 |`
    : `| id | name | price | category | stock |
|------|-------|-------------|-------------|-------------|
| 1 | Smartphone | $899.99 | Electronics | 45 |
| 2 | Laptop | $1299.99 | Electronics | 32 |
| 3 | Headphones | $149.99 | Electronics | 78 |`
}`
    }
  }

  const clearChat = () => {
    setMessages([])
    setProcessSteps([])
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] bg-background">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-2">
          <h2 className="text-lg font-semibold">QueryMind Chat</h2>
          <Badge variant="outline" className="text-xs">
            Beta
          </Badge>
        </div>
        <div className="flex items-center space-x-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" onClick={clearChat}>
                  <X className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Clear chat</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[240px]">
              <DropdownMenuLabel>Chat Settings</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="px-2 py-1.5">
                <div className="mb-1 text-sm font-medium">Temperature</div>
                <div className="flex items-center space-x-2">
                  <Slider
                    value={[temperature]}
                    min={0}
                    max={2}
                    step={0.1}
                    onValueChange={(value) => setTemperature(value[0])}
                    className="flex-1"
                  />
                  <span className="w-8 text-center text-sm">{temperature}</span>
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Lower values are more focused, higher values more creative
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Database className="mr-2 h-4 w-4" />
                <span>Change Database</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Download className="mr-2 h-4 w-4" />
                <span>Export Chat</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-4 space-y-6">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="mb-4 p-4 rounded-full bg-primary/10">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Query Your Database</h3>
            <p className="text-muted-foreground max-w-md mb-8">
              Ask questions about your data in natural language and get instant insights.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl">
              <Button
                variant="outline"
                className="flex justify-start p-4 h-auto"
                onClick={() => setInput("Show me the top 10 customers by total order value")}
              >
                <div className="flex flex-col items-start text-left">
                  <span className="font-medium mb-1">Top customers</span>
                  <span className="text-xs text-muted-foreground">
                    Show me the top 10 customers by total order value
                  </span>
                </div>
              </Button>
              <Button
                variant="outline"
                className="flex justify-start p-4 h-auto"
                onClick={() => setInput("Which products have low inventory?")}
              >
                <div className="flex flex-col items-start text-left">
                  <span className="font-medium mb-1">Inventory check</span>
                  <span className="text-xs text-muted-foreground">Which products have low inventory?</span>
                </div>
              </Button>
              <Button
                variant="outline"
                className="flex justify-start p-4 h-auto"
                onClick={() => setInput("Show me sales trends for the last 6 months")}
              >
                <div className="flex flex-col items-start text-left">
                  <span className="font-medium mb-1">Sales trends</span>
                  <span className="text-xs text-muted-foreground">Show me sales trends for the last 6 months</span>
                </div>
              </Button>
              <Button
                variant="outline"
                className="flex justify-start p-4 h-auto"
                onClick={() => setInput("Find users who signed up but haven't made a purchase")}
              >
                <div className="flex flex-col items-start text-left">
                  <span className="font-medium mb-1">User analysis</span>
                  <span className="text-xs text-muted-foreground">
                    Find users who signed up but haven't made a purchase
                  </span>
                </div>
              </Button>
            </div>
          </div>
        ) : (
          <>
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-3xl rounded-lg p-4 ${
                    message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}
                >
                  {message.role === "assistant" ? (
                    <div className="prose dark:prose-invert prose-sm max-w-none">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: message.content
                            .replace(/\n/g, "<br>")
                            .replace(/```(.*?)```/gs, (match, code) => {
                              return `<pre class="bg-muted-foreground/10 p-2 rounded-md overflow-x-auto"><code>${code}</code></pre>`
                            })
                            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                            .replace(/\|(.*?)\|/g, '<span class="font-mono">$1</span>'),
                        }}
                      />
                      <div className="flex justify-end mt-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 px-2"
                          onClick={() => copyToClipboard(message.content)}
                        >
                          <Copy className="h-3.5 w-3.5 mr-1" />
                          <span className="text-xs">Copy</span>
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div>{message.content}</div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      {isProcessing && processSteps.length > 0 && (
        <div className="px-4 py-2 border-t">
          <div className="flex flex-wrap gap-2">
            {processSteps.map((step) => (
              <Badge
                key={step.id}
                variant={step.status === "complete" ? "outline" : "default"}
                className={`animate-fade-in transition-all ${
                  step.status === "complete" ? "bg-green-500/10 text-green-500" : "bg-primary"
                }`}
              >
                {step.status === "complete" ? "✓ " : ""}
                {step.message}
              </Badge>
            ))}
          </div>
        </div>
      )}

      <div className="p-4 border-t">
        <form onSubmit={handleSubmit} className="flex space-x-2">
          <div className="relative flex-1">
            <Input
              placeholder="Ask a question about your data..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isProcessing}
              className="pr-10"
            />
            {input && (
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full px-3 py-2"
                onClick={() => setInput("")}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Clear input</span>
              </Button>
            )}
          </div>
          <Button type="submit" disabled={!input.trim() || isProcessing}>
            {isProcessing ? "Processing..." : <Send className="h-4 w-4" />}
          </Button>
        </form>
      </div>
    </div>
  )
}
