import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Database, History, Star } from "lucide-react"

export const metadata = {
  title: "Profile - QueryMind",
  description: "View and manage your profile",
}

export default function ProfilePage() {
  return (
    <div className="container max-w-6xl py-10">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <Card>
            <CardHeader className="flex flex-col items-center">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/placeholder.svg" alt="User" />
                <AvatarFallback className="text-2xl bg-primary/10 text-primary">JD</AvatarFallback>
              </Avatar>
              <CardTitle className="mt-4">John Doe</CardTitle>
              <CardDescription>john@example.com</CardDescription>
              <div className="flex gap-2 mt-2">
                <Badge variant="outline">Free Plan</Badge>
                <Badge variant="outline">50 queries/month</Badge>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <Button variant="outline" className="w-full" asChild>
                <a href="/settings">Edit Profile</a>
              </Button>
              <Button className="w-full bg-gradient-yellow hover:opacity-90 transition-opacity dark:bg-gradient-yellow-dark">
                Upgrade to Pro
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="md:w-2/3">
          <Tabs defaultValue="activity">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="connections">Connections</TabsTrigger>
              <TabsTrigger value="saved">Saved Queries</TabsTrigger>
            </TabsList>

            <TabsContent value="activity" className="mt-6 space-y-6">
              <h2 className="text-xl font-bold">Recent Activity</h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4 rounded-lg border p-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <History className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">Ran query on PostgreSQL - Production</h3>
                      <Badge variant="outline" className="text-xs">
                        2 hours ago
                      </Badge>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      SELECT * FROM customers ORDER BY created_at DESC LIMIT 10
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-lg border p-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Star className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">Saved a query</h3>
                      <Badge variant="outline" className="text-xs">
                        Yesterday
                      </Badge>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      SELECT products.name, inventory.quantity FROM products JOIN inventory ON products.id =
                      inventory.product_id WHERE inventory.quantity &lt; 10
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-lg border p-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Database className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium">Connected to a new database</h3>
                      <Badge variant="outline" className="text-xs">
                        3 days ago
                      </Badge>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">Connected to MySQL - Development</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="connections" className="mt-6 space-y-6">
              <h2 className="text-xl font-bold">Database Connections</h2>

              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">PostgreSQL - Production</CardTitle>
                      <Badge className="bg-green-500 hover:bg-green-600">Connected</Badge>
                    </div>
                    <CardDescription>Last used: 2 hours ago</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm">
                      <div className="flex justify-between py-1">
                        <span className="text-muted-foreground">Host:</span>
                        <span>db.example.com</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-muted-foreground">Database:</span>
                        <span>production_db</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-muted-foreground">User:</span>
                        <span>db_user</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">MySQL - Development</CardTitle>
                      <Badge className="bg-green-500 hover:bg-green-600">Connected</Badge>
                    </div>
                    <CardDescription>Last used: 3 days ago</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm">
                      <div className="flex justify-between py-1">
                        <span className="text-muted-foreground">Host:</span>
                        <span>localhost</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-muted-foreground">Database:</span>
                        <span>dev_db</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-muted-foreground">User:</span>
                        <span>root</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="saved" className="mt-6 space-y-6">
              <h2 className="text-xl font-bold">Saved Queries</h2>

              <div className="space-y-4">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">Low Inventory Products</CardTitle>
                      <Badge variant="outline">PostgreSQL</Badge>
                    </div>
                    <CardDescription>Created: Yesterday</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-muted p-2 rounded-md text-xs overflow-x-auto">
                      <code>
                        SELECT products.name, inventory.quantity FROM products JOIN inventory ON products.id =
                        inventory.product_id WHERE inventory.quantity &lt; 10
                      </code>
                    </pre>
                    <div className="flex justify-end mt-2">
                      <Button variant="outline" size="sm">
                        Run Query
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">Top Customers</CardTitle>
                      <Badge variant="outline">MySQL</Badge>
                    </div>
                    <CardDescription>Created: 1 week ago</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-muted p-2 rounded-md text-xs overflow-x-auto">
                      <code>
                        SELECT customers.name, SUM(orders.total) as total_spent FROM customers JOIN orders ON
                        customers.id = orders.customer_id GROUP BY customers.id ORDER BY total_spent DESC LIMIT 10
                      </code>
                    </pre>
                    <div className="flex justify-end mt-2">
                      <Button variant="outline" size="sm">
                        Run Query
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
