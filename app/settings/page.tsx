"use client"

import { useState } from "react"
import { Bell, CreditCard, Key, Lock, Mail, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"

export default function SettingsPage() {
  const [name, setName] = useState("John Doe")
  const [email, setEmail] = useState("john@example.com")

  return (
    <div className="container max-w-6xl py-10">
      <div className="mx-auto flex max-w-[58rem] flex-col gap-4">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your account settings and preferences.</p>
      </div>

      <div className="mt-8">
        <Tabs defaultValue="profile">
          <div className="border-b">
            <TabsList className="flex h-10 w-full max-w-md items-center rounded-none bg-transparent p-0">
              <TabsTrigger
                value="profile"
                className="data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none border-b-2 border-transparent px-4"
              >
                Profile
              </TabsTrigger>
              <TabsTrigger
                value="account"
                className="data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none border-b-2 border-transparent px-4"
              >
                Account
              </TabsTrigger>
              <TabsTrigger
                value="notifications"
                className="data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none border-b-2 border-transparent px-4"
              >
                Notifications
              </TabsTrigger>
              <TabsTrigger
                value="billing"
                className="data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none border-b-2 border-transparent px-4"
              >
                Billing
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="profile" className="mt-8 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile</CardTitle>
                <CardDescription>Update your personal information.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <textarea
                    id="bio"
                    className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tell us about yourself"
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="bg-gradient-yellow hover:opacity-90 transition-opacity dark:bg-gradient-yellow-dark">
                  Save Changes
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Profile Picture</CardTitle>
                <CardDescription>Upload a new profile picture.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-8 w-8 text-primary" />
                  </div>
                  <Button variant="outline">Upload New Picture</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="account" className="mt-8 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Account Security</CardTitle>
                <CardDescription>Update your password and security settings.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="bg-gradient-yellow hover:opacity-90 transition-opacity dark:bg-gradient-yellow-dark">
                  Update Password
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Two-Factor Authentication</CardTitle>
                <CardDescription>Add an extra layer of security to your account.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Lock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Two-Factor Authentication</p>
                      <p className="text-sm text-muted-foreground">Secure your account with 2FA.</p>
                    </div>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>API Keys</CardTitle>
                <CardDescription>Manage your API keys for programmatic access.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Key className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Production API Key</p>
                      <p className="text-sm text-muted-foreground">Last used: 2 days ago</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Regenerate
                  </Button>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Key className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Development API Key</p>
                      <p className="text-sm text-muted-foreground">Last used: 5 hours ago</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Regenerate
                  </Button>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Create New API Key</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="mt-8 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Choose how you want to be notified.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Bell className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Email Notifications</p>
                      <p className="text-sm text-muted-foreground">Receive notifications via email.</p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Bell className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Browser Notifications</p>
                      <p className="text-sm text-muted-foreground">Receive notifications in your browser.</p>
                    </div>
                  </div>
                  <Switch />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Marketing Emails</p>
                      <p className="text-sm text-muted-foreground">Receive emails about new features and updates.</p>
                    </div>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="billing" className="mt-8 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Subscription Plan</CardTitle>
                <CardDescription>Manage your subscription and billing information.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Free Plan</p>
                      <p className="text-sm text-muted-foreground">50 queries per month</p>
                    </div>
                    <Button className="bg-gradient-yellow hover:opacity-90 transition-opacity dark:bg-gradient-yellow-dark">
                      Upgrade to Pro
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
                <CardDescription>Add or update your payment method.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <CreditCard className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">No payment method added</p>
                      <p className="text-sm text-muted-foreground">Add a payment method to upgrade your plan.</p>
                    </div>
                  </div>
                  <Button variant="outline">Add Payment Method</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Billing History</CardTitle>
                <CardDescription>View your past invoices and billing history.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  <p>No billing history available.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
