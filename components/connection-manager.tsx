"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ConnectionManagerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ConnectionManager({ open, onOpenChange }: ConnectionManagerProps) {
  const [connectionType, setConnectionType] = useState("mysql")

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Connect to Database</DialogTitle>
          <DialogDescription>Enter your database connection details to start querying.</DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="mysql" onValueChange={setConnectionType}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="mysql">MySQL</TabsTrigger>
            <TabsTrigger value="postgresql">PostgreSQL</TabsTrigger>
            <TabsTrigger value="mongodb">MongoDB</TabsTrigger>
          </TabsList>
          <TabsContent value="mysql" className="space-y-4 pt-4">
            <div className="grid gap-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="mysql-host" className="text-right">
                  Host
                </Label>
                <Input id="mysql-host" placeholder="localhost" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="mysql-port" className="text-right">
                  Port
                </Label>
                <Input id="mysql-port" placeholder="3306" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="mysql-database" className="text-right">
                  Database
                </Label>
                <Input id="mysql-database" placeholder="my_database" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="mysql-username" className="text-right">
                  Username
                </Label>
                <Input id="mysql-username" placeholder="root" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="mysql-password" className="text-right">
                  Password
                </Label>
                <Input id="mysql-password" type="password" className="col-span-3" />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="postgresql" className="space-y-4 pt-4">
            <div className="grid gap-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="pg-host" className="text-right">
                  Host
                </Label>
                <Input id="pg-host" placeholder="localhost" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="pg-port" className="text-right">
                  Port
                </Label>
                <Input id="pg-port" placeholder="5432" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="pg-database" className="text-right">
                  Database
                </Label>
                <Input id="pg-database" placeholder="postgres" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="pg-username" className="text-right">
                  Username
                </Label>
                <Input id="pg-username" placeholder="postgres" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="pg-password" className="text-right">
                  Password
                </Label>
                <Input id="pg-password" type="password" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="pg-ssl" className="text-right">
                  SSL Mode
                </Label>
                <Select defaultValue="prefer">
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select SSL mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="disable">Disable</SelectItem>
                    <SelectItem value="prefer">Prefer</SelectItem>
                    <SelectItem value="require">Require</SelectItem>
                    <SelectItem value="verify-ca">Verify CA</SelectItem>
                    <SelectItem value="verify-full">Verify Full</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="mongodb" className="space-y-4 pt-4">
            <div className="grid gap-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="mongo-uri" className="text-right">
                  Connection URI
                </Label>
                <Input id="mongo-uri" placeholder="mongodb://localhost:27017/mydatabase" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label className="text-right">Or connect with:</Label>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="mongo-host" className="text-right">
                  Host
                </Label>
                <Input id="mongo-host" placeholder="localhost" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="mongo-port" className="text-right">
                  Port
                </Label>
                <Input id="mongo-port" placeholder="27017" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="mongo-database" className="text-right">
                  Database
                </Label>
                <Input id="mongo-database" placeholder="mydatabase" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="mongo-username" className="text-right">
                  Username
                </Label>
                <Input id="mongo-username" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="mongo-password" className="text-right">
                  Password
                </Label>
                <Input id="mongo-password" type="password" className="col-span-3" />
              </div>
            </div>
          </TabsContent>
        </Tabs>
        <div className="space-y-2">
          <Label htmlFor="connection-name">Connection Name</Label>
          <Input
            id="connection-name"
            placeholder={`My ${
              connectionType === "mysql" ? "MySQL" : connectionType === "postgresql" ? "PostgreSQL" : "MongoDB"
            } Connection`}
          />
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button type="submit">Connect</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
