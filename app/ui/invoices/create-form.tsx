'use client';
import React from 'react'; 
import { useActionState } from 'react';
import { CustomerField } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CurrencyDollarIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon
} from '@heroicons/react/24/outline';
import { createInvoice, State } from '@/app/lib/action';
import { Button} from '@/components/ui/button';
import Input from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner"

function Toast() {
  return toast("Invoice created successfully");
}
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { UserCircle, DollarSign, CheckCircle, Clock } from "lucide-react"

export default function AddInvoiceForm({ customers }: { customers: CustomerField[] }) {
    const initialState: State = {message: null, errors: {}};
    const [, formAction] = useActionState(createInvoice, initialState);
  return (
    <div className="flex items-center justify-center mt-20">
      <Card className="w-full max-w-md shadow-lg mb-12">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-t-lg">
          <CardTitle className="text-2xl font-bold flex items-center">
            <UserCircle className="mr-2" />
            Create Invoice
          </CardTitle>
        </CardHeader>
        <form action={formAction}>
          <CardContent className="space-y-6 pt-6">
            <div className="space-y-2">
              <Label htmlFor="customer" className="text-base font-bold text-gray-700">
                <div className="flex items-center">
                  <UserIcon className="mr-2 h-5 w-5" />
                  Select Customer
                </div>
              </Label>
              <Select name="customerId" defaultValue="" aria-describedby="customer-error">
              <SelectTrigger className="w-[180px] bg-white w-full h-[60px]">
                <SelectValue placeholder="Select a customer"/>
              </SelectTrigger>
              <SelectContent className="bg-white">
              <SelectContent className="bg-white">
                    {customers.map((customer) => (
                      <SelectItem key={customer.id} value={customer.id} className="hover:bg-gray-300">
                        <div className="flex items-center justify-center">
                        <Avatar>
                          <AvatarImage src={customer.image_url} />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar> 
                        <div className="pl-2 text-sm">
                          {customer.name}
                        </div>
                        </div>
                        
                      </SelectItem>
                    ))}
                  </SelectContent>
              </SelectContent>
            </Select>
            </div>

            <div className="space-y-2">
            <Label htmlFor="amount" className="text-base font-bold text-gray-700">
                <div className="flex items-center">
                  <CurrencyDollarIcon className="mr-2 h-5 w-5" />
                  Amount
                </div>
              </Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" />
                <Input
                  id="amount"
                  name="amount"
                  type="number"
                  step="0.01"
                  placeholder="Enter USD amount"
                  required
                  className="pl-10 border-blue-200 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="space-y-2">
            <Label htmlFor="customer" className="text-base font-bold text-gray-700">
                <div className="flex items-center">
                  <EllipsisHorizontalCircleIcon className="mr-2 h-5 w-5" />
                  Status
                </div>
              </Label>
              <RadioGroup defaultValue="paid" name="status" className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="pending" id="pending" className="text-blue-600 focus:ring-blue-500" />
                  <Label htmlFor="pending" className="flex items-center">
                    <Clock className="mr-1 h-4 w-4 text-blue-500" />
                    Pending
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="paid" id="paid" className="text-blue-600 focus:ring-blue-500" />
                  <Label htmlFor="paid" className="flex items-center">
                    <CheckCircle className="mr-1 h-4 w-4 text-blue-500" />
                    Paid
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between bg-blue-50 rounded-b-lg">
            <Button 
              type="button" 
              variant="outline" 
              className="w-[45%] border-blue-300 text-blue-600 hover:bg-blue-100 mt-5"
            >
              <Link href="/dashboard/invoices"> Cancel </Link>
            </Button>
            <Button 
              type="submit" 
              className="w-[45%] bg-gradient-to-r from-blue-600 to-blue-400 text-white hover:from-blue-700 hover:to-blue-500 mt-5"
              onClick={() => Toast()}
            >
              Create Invoice
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}