import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Input from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UserRound, LockIcon } from 'lucide-react';


export const description =
  "A login form with email and password. There's an option to login with Google and a link to sign up if you don't have an account."

export function LoginForm() {
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Login</CardTitle>
        <CardDescription className="text-center">
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2 flex">
            <div className="flex items-center">
            <UserRound className="h-6 w-6" />
            <Label htmlFor="email" className="pl-2">Email </Label>
            </div>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
                <div className="flex items-center">
                    <LockIcon className="h-6 w-6" />
                    <Label htmlFor="password" className="pl-2">Password</Label>
                </div>
              <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
            </div>
            <Input id="password" type="password" minLength={6} placeholder="Enter your password" required />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="#" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
