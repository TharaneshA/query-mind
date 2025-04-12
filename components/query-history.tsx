"use client"

import { useState } from "react"
import { Clock, Copy, Star, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

// Sample history data for demonstration
const sampleHistory = [
  {
    id: 1,
    query: "SELECT * FROM customers ORDER BY created_at DESC LIMIT 10",
    timestamp: "2023-04-10T14:30:00Z",
    database: "MySQL - Production",
    isSaved: false,
  },
  {
    id: 2,
    query:
      "SELECT products.name, inventory.quantity FROM products JOIN inventory ON products.id = inventory.product_id WHERE inventory.quantity < 10",
    timestamp: "2023-04-10T13:15:00Z",
    database: "PostgreSQL - Development",
    isSaved: true,
  },
  {
    id: 3,
    query:
      "SELECT customers.name, COUNT(orders.id) as order_count FROM customers JOIN orders ON customers.id = orders.customer_id GROUP BY customers.id ORDER BY order_count DESC LIMIT 5",
    timestamp: "2023-04-09T16:45:00Z",
    database: "MySQL - Production",
    isSaved: true,
  },
  {
    id: 4,
    query: "SELECT * FROM orders WHERE status = 'pending' AND created_at > '2023-04-01'",
    timestamp: "2023-04-09T11:20:00Z",
    database: "MySQL - Production",
    isSaved: false,
  },
  {
    id: 5,
    query:
      "SELECT order_items.*, products.name FROM order_items JOIN products ON order_items.product_id = products.id WHERE order_items.order_id = 1234",
    timestamp: "2023-04-08T09:10:00Z",
    database: "PostgreSQL - Development",
    isSaved: false,
  },
]

export function QueryHistory() {
  const [history, setHistory] = useState(sampleHistory)
  const [activeTab, setActiveTab] = useState("recent")

  const toggleSaved = (id: number) => {
    setHistory(history.map((item) => (item.id === id ? { ...item, isSaved: !item.isSaved } : item)))
  }

  const deleteQuery = (id: number) => {
    setHistory(history.filter((item) => item.id !== id))
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(date)
  }

  const recentQueries = history.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())

  const savedQueries = history.filter((item) => item.isSaved)

  return (
    <Tabs defaultValue="recent" value={activeTab} onValueChange={setActiveTab}>
      <TabsList>
        <TabsTrigger value="recent">Recent Queries</TabsTrigger>
        <TabsTrigger value="saved">Saved Queries</TabsTrigger>
      </TabsList>
      <TabsContent value="recent" className="mt-4 space-y-4">
        {recentQueries.length === 0 ? (
          <div className="flex h-40 items-center justify-center rounded-md border border-dashed">
            <div className="text-center">
              <Clock className="mx-auto h-8 w-8 text-muted-foreground" />
              <p className="mt-2 text-sm text-muted-foreground">No recent queries</p>
            </div>
          </div>
        ) : (
          recentQueries.map((item) => (
            <Card key={item.id}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">{item.database}</Badge>
                    <CardDescription>{formatDate(item.timestamp)}</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => toggleSaved(item.id)}
                      className={item.isSaved ? "text-yellow-500" : ""}
                    >
                      <Star className="h-4 w-4" />
                      <span className="sr-only">{item.isSaved ? "Unsave" : "Save"}</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Copy className="h-4 w-4" />
                      <span className="sr-only">Copy</span>
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => deleteQuery(item.id)}>
                      <Trash className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <pre className="max-h-40 overflow-auto rounded-md bg-muted p-2 text-xs">
                  <code>{item.query}</code>
                </pre>
              </CardContent>
            </Card>
          ))
        )}
      </TabsContent>
      <TabsContent value="saved" className="mt-4 space-y-4">
        {savedQueries.length === 0 ? (
          <div className="flex h-40 items-center justify-center rounded-md border border-dashed">
            <div className="text-center">
              <Star className="mx-auto h-8 w-8 text-muted-foreground" />
              <p className="mt-2 text-sm text-muted-foreground">No saved queries</p>
            </div>
          </div>
        ) : (
          savedQueries.map((item) => (
            <Card key={item.id}>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">{item.database}</Badge>
                    <CardDescription>{formatDate(item.timestamp)}</CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => toggleSaved(item.id)}
                      className="text-yellow-500"
                    >
                      <Star className="h-4 w-4" />
                      <span className="sr-only">Unsave</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Copy className="h-4 w-4" />
                      <span className="sr-only">Copy</span>
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => deleteQuery(item.id)}>
                      <Trash className="h-4 w-4" />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <pre className="max-h-40 overflow-auto rounded-md bg-muted p-2 text-xs">
                  <code>{item.query}</code>
                </pre>
              </CardContent>
            </Card>
          ))
        )}
      </TabsContent>
    </Tabs>
  )
}
