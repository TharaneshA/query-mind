"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function LoginModal() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Sign In</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="login" className="mt-4">
            <DialogHeader>
              <DialogTitle>Sign In</DialogTitle>
              <DialogDescription>Enter your credentials to access your account.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="name@example.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input id="password" type={showPassword ? "text" : "password"} placeholder="••••••••" />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 py-2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="remember" className="h-4 w-4 rounded border-gray-300" />
                  <Label
                    htmlFor="remember"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Remember me
                  </Label>
                </div>
                <Button variant="link" className="px-0 font-normal">
                  Forgot password?
                </Button>
              </div>
            </div>
            <DialogFooter>
              <Button
                type="submit"
                className="w-full bg-gradient-yellow hover:opacity-90 transition-opacity dark:bg-gradient-yellow-dark"
              >
                Sign In
              </Button>
            </DialogFooter>
          </TabsContent>
          <TabsContent value="register" className="mt-4">
            <DialogHeader>
              <DialogTitle>Create Account</DialogTitle>
              <DialogDescription>Register for a new account to get started.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="register-email">Email</Label>
                <Input id="register-email" type="email" placeholder="name@example.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="register-password">Password</Label>
                <div className="relative">
                  <Input id="register-password" type={showPassword ? "text" : "password"} placeholder="••••••••" />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 py-2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
                  </Button>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="terms" className="h-4 w-4 rounded border-gray-300" />
                <Label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the{" "}
                  <Button variant="link" className="px-0 font-normal">
                    Terms of Service
                  </Button>{" "}
                  and{" "}
                  <Button variant="link" className="px-0 font-normal">
                    Privacy Policy
                  </Button>
                </Label>
              </div>
            </div>
            <DialogFooter>
              <Button
                type="submit"
                className="w-full bg-gradient-yellow hover:opacity-90 transition-opacity dark:bg-gradient-yellow-dark"
              >
                Create Account
              </Button>
            </DialogFooter>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
