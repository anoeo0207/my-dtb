'use client'
import Link from "next/link"
import { CircleUser, Menu, Package2, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Input from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from 'react'
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Dashboard() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    alert('Account updated successfully!')
  }
  return (
    <div className="flex min-h-screen w-full flex-col">
          <div className="grid gap-6 mb-4">
              <Card className="w-full max-w-2xl mx-auto">
          <CardHeader>
            <div className="flex items-center">
              <CircleUser />
              <CardTitle className="ml-2">Account Center</CardTitle>
            </div>
            <CardDescription>Manage your account settings here.</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="profile">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
              </TabsList>
              <form onSubmit={handleSubmit}>
                <TabsContent value="profile" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-username">Current Username</Label>
                    <Input id="current-username" placeholder="Current username" disabled />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-username">New Username</Label>
                    <Input id="new-username" placeholder="Enter new username" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Confirm</Label>
                    <Input id="email" type="password" />
                  </div>
                </TabsContent>
                <TabsContent value="security" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" placeholder="Enter current password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" placeholder="Enter new password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input id="confirm-password" type="password" placeholder="Confirm new password" />
                  </div>
                </TabsContent>
                <CardFooter className="mt-4">
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Updating...' : 'Update Account'}
                  </Button>
                </CardFooter>
              </form>
            </Tabs>
          </CardContent>
        </Card>
          </div>
        </div>
  )
}
