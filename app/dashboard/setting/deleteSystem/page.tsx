'use client'
import { useState } from 'react'
import { AlertTriangle } from 'lucide-react'
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Input from "@/components/ui/input"

import { deleteSystem } from '@/app/lib/action'
import { redirect } from 'next/dist/server/api-utils'

const confirm = 'I AGREE TO DELETE ALL INFORMATION';

export default function Dashboard() {
  const [password, setPassword] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [message, setMessage] = useState('')

  const handleDelete = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsDeleting(true)

    if (password !== confirm) {
      setMessage('Incorrect password. Please try again.');
      setIsDeleting(false);
      return;
    }

    const response = await deleteSystem(password);
    
    setMessage(response.message);

    setPassword('');
    setIsDeleting(false);
  }

  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="grid gap-6 mb-4">
        <Card className="w-full rounded-none max-w-md mx-auto border-red-500">
          <CardHeader className="bg-red-100 text-red-700">
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Warning: Delete All Information
            </CardTitle>
          </CardHeader>
          <form onSubmit={handleDelete}>
            <CardContent className="space-y-4 pt-6">
              <div className="text-center text-sm text-muted-foreground">
                <p>You are about to delete all your information.</p>
                <p className="font-semibold">This action cannot be undone.</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-red-700">
                  Enter "I AGREE TO DELETE ALL INFORMATION" to confirm deletion
                </Label>
                <Input
                  id="password"
                  type="default"
                  placeholder="Enter confirmation here"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="border-red-300 focus:border-red-500 focus:ring-red-500"
                />
              </div>
              {message && (
                <div className="text-center text-red-600">
                  <p>{message}</p>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" type="button">
                Cancel
              </Button>
              <Button
                variant="destructive"
                type="submit"
                disabled={!password || isDeleting}
              >
                {isDeleting ? 'Deleting...' : 'Delete All Information'}
                
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  )
}
