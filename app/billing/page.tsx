import { CreditCard, Download, Receipt } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export const metadata = {
  title: "Billing - QueryMind",
  description: "Manage your billing and subscription",
}

export default function BillingPage() {
  return (
    <div className="container max-w-6xl py-10">
      <div className="mx-auto flex max-w-[58rem] flex-col gap-4">
        <h1 className="text-3xl font-bold">Billing</h1>
        <p className="text-muted-foreground">Manage your subscription and billing information.</p>
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Current Plan</CardTitle>
            <CardDescription>You are currently on the Free plan.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg border p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Free Plan</p>
                  <p className="text-sm text-muted-foreground">50 queries per month</p>
                </div>
                <Badge variant="outline">Current Plan</Badge>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Queries used this month</span>
                  <span className="font-medium">32 / 50</span>
                </div>
                <Progress value={64} className="h-2" />
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Included in Free Plan:</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Connect to 1 database</li>
                <li>50 queries per month</li>
                <li>Basic query history</li>
                <li>Community support</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-gradient-yellow hover:opacity-90 transition-opacity dark:bg-gradient-yellow-dark">
              Upgrade to Pro
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
            <CardDescription>Manage your payment methods.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary/10 p-2">
                  <CreditCard className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">No payment method added</p>
                  <p className="text-sm text-muted-foreground">Add a payment method to upgrade your plan.</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Add Payment Method
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-8">
        <Tabs defaultValue="invoices">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="invoices">Invoices</TabsTrigger>
            <TabsTrigger value="usage">Usage</TabsTrigger>
          </TabsList>

          <TabsContent value="invoices" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Billing History</CardTitle>
                <CardDescription>View your past invoices and billing history.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  <Receipt className="mx-auto h-12 w-12 opacity-50" />
                  <p className="mt-2">No billing history available.</p>
                  <p className="text-sm">Invoices will appear here once you upgrade to a paid plan.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="usage" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Usage Statistics</CardTitle>
                <CardDescription>Monitor your query usage over time.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <h3 className="font-medium">Current Month</h3>
                    <span className="text-sm text-muted-foreground">April 2023</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Queries used</span>
                      <span className="font-medium">32 / 50</span>
                    </div>
                    <Progress value={64} className="h-2" />
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Usage History</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">March 2023</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">45 / 50</span>
                        <Progress value={90} className="h-2 w-24" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">February 2023</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">38 / 50</span>
                        <Progress value={76} className="h-2 w-24" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">January 2023</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">27 / 50</span>
                        <Progress value={54} className="h-2 w-24" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download Usage Report
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
