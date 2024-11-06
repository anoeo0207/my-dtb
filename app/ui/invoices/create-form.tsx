'use client'

import React from 'react'
import Link from 'next/link'
import { toast } from "sonner"
import { useActionState } from 'react'
import { Users, DollarSign, Check, Clock } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Input from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { CustomerField } from '@/app/lib/definitions'
import { createInvoice, State} from '@/app/lib/action'

const handleClick = () => {
  toast("Invoice created successfully", {
    className: 'bg-green-500 text-white p-4 rounded-lg shadow-lg'
  });
};

export default function AddInvoiceForm({ customers }: { customers: CustomerField[] }) {
  const initialState: State = { message: null, errors: {} };
  const [, formAction] = useActionState(createInvoice, initialState);

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen mt-10">
      <Card className="max-w-2xl mx-auto border-gray-700 bg-gray-800 shadow-xl">
        <CardHeader className="bg-gray-900 rounded-t-lg">
          <CardTitle className="text-2xl font-bold flex items-center justify-center text-white">
            <DollarSign className="mr-2" />
            Create Invoice
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <form action={formAction}>
            <div className="rounded-md bg-gray-800 p-4 md:p-6 space-y-6">
              <div>
                <Label htmlFor="customer" className="text-blue-300 font-bold text-lg flex items-center mb-2">
                  <Users className="mr-2 h-5 w-5" />
                  Customer
                </Label>
                <Select name="customerId">
                  <SelectTrigger className="w-full bg-gray-700 border-gray-600 h-42 text-gray-500">
                    <SelectValue placeholder="Select a customer" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-700 border-gray-600 h-42">
                    {customers.map((customer) => (
                      <SelectItem key={customer.id} value={customer.id} className="hover:bg-gray-600">
                        <div className="flex items-center space-x-2">
                          <Avatar>
                            <AvatarImage src={customer.image_url} />
                            <AvatarFallback>{customer.name.charAt(0)}</AvatarFallback>
                          </Avatar> 
                          <span className="text-gray-100">{customer.name}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Invoice Amount */}
              <div>
                <Label htmlFor="amount" className="text-blue-300 font-bold text-lg flex items-center mb-2">
                  <DollarSign className="mr-2 h-5 w-5" />
                  Amount
                </Label>
                <div className="relative mt-2 rounded-md">
                  <Input
                    id="amount"
                    name="amount"
                    type="number"
                    step="0.01"
                    min="0.01"
                    placeholder="Enter USD amount"
                    required
                    className="pl-10 w-full bg-gray-700 border-gray-600 text-gray-100 focus:ring-blue-400 focus:border-blue-400"
                  />
                  <DollarSign className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              {/* Invoice Status */}
              <fieldset>
                <legend className="text-blue-300 font-bold text-lg flex items-center mb-2">
                  <Clock className="mr-2 h-5 w-5" />
                  Set the invoice status
                </legend>
                <RadioGroup defaultValue="pending" name="status" className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="paid" id="paid" className="border-gray-600 text-blue-400" />
                    <Label htmlFor="paid" className="flex items-center space-x-2 cursor-pointer">
                      <div className="w-full p-2 bg-green-800 rounded-lg flex items-center">
                        <Check className="h-4 w-4 mr-2 text-green-300" />
                        <span className="text-green-100">Paid</span>
                      </div>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="pending" id="pending" className="border-gray-600 text-blue-400" />
                    <Label htmlFor="pending" className="flex items-center space-x-2 cursor-pointer">
                      <div className="w-full p-2 bg-yellow-800 rounded-lg flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-yellow-300" />
                        <span className="text-yellow-100">Pending</span>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </fieldset>
            </div>
            <div className="mt-6 flex justify-end gap-4">
              <Link
                href="/dashboard/invoices"
                className="flex h-10 items-center rounded-lg bg-gray-700 px-4 text-sm font-medium text-gray-300 transition-colors hover:bg-gray-600"
              >
                Cancel
              </Link>
              <Button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={handleClick}
              >
                Create Invoice
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="mt-8 text-center text-sm text-gray-600">
        <p>Need help? Contact our support team.</p>
      </div>
    </div>
  )
}