'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { toast } from "sonner"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import Input from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CustomerField, InvoiceForm } from '@/app/lib/definitions';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Loader2, Users, DollarSign, Tag, X } from "lucide-react"
import { useActionState } from 'react'
import { updateInvoice, State } from '@/app/lib/action'

export default function EditInvoiceForm({
invoice,
customers,
}: {
invoice: InvoiceForm;
customers: CustomerField[];
}) {
const initialState: State = { message: null, errors: {} };
const updateInvoiceWithId = updateInvoice.bind(null, invoice.id);
const [, formAction] = useActionState(updateInvoiceWithId, initialState);
const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsLoading(false)
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50 min-h-screen mt-20">
      <Card className="max-w-2xl mx-auto shadow-lg border-blue-400">
        <CardHeader className="bg-blue-600 text-white rounded-t-lg">
          <CardTitle className="text-2xl font-bold flex items-center justify-center">
            <DollarSign className="mr-2" />
            Edit Invoice
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
        <form action={formAction}>
           <div className="rounded-md bg-gray-50 p-4 md:p-6">
             {/* Customer Name */}
             <div className="mb-4">
              <Label htmlFor="customer" className="text-blue-600 font-bold text-lg flex items-center mb-2">
                  <Users className="mr-2 h-5 w-5" />
                  Customer
              </Label>
               <div className="relative">
                 <Select id="customerId" name="customerId" defaultValue={invoice.customer_id} aria-describedby="customer-error">
                   <SelectTrigger className="h-[120%] border-blue-400 focus:ring-blue-600 focus:border-blue-600">
                     <SelectValue defaultValue={invoice.customer_id} />
                   </SelectTrigger>
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
                </Select>
              </div>
            </div>

            {/* Invoice Amount */}
            <div className="mb-4">
              <Label htmlFor="amount" className="text-blue-600 font-bold text-lg flex items-center mb-5">
                <DollarSign className="mr-2 h-5 w-5" />
                  Amount
              </Label>
              <div className="relative mt-2 rounded-md">
                <Input
                  id="amount"
                  name="amount"
                  type="number"
                  step="0.01"
                  defaultValue={invoice.amount}
                  placeholder="Enter USD amount"
                  className="pl-10 w-full border-blue-400 focus:ring-blue-500 focus:border-blue-500"
                />
                <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>

            {/* Invoice Status */}
            <fieldset>
              <legend className="text-blue-600 font-bold text-lg flex items-center">
                <DollarSign className="mr-2 h-5 w-5" />
                Set the invoice status
              </legend>
              <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
                <RadioGroup defaultValue="paid" name="status">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="paid" id="paid" className="border-blue-400" />
                    <div className="flex w-[120%] items-center bg-green-300 rounded-lg">
                      <CheckIcon className="h-4 w-4 mr-2" />
                      <Label htmlFor="paid">Paid</Label>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="pending" id="pending" className="border-blue-400" />
                    <div className="flex w-[120%] items-center bg-gray-200 rounded-lg">
                      <ClockIcon className="h-4 w-4 mr-2" />
                      <Label htmlFor="pending">Pending</Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>
            </fieldset>
          </div>
          <div className="mt-6 flex justify-end gap-4">
            <Link
              href="/dashboard/invoices"
              className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
            >
              Cancel
            </Link>

            {/* Set the button type to submit */}
            <Button type="submit" variant="default" onClick={() => toast("Invoice edited successfully")}>
              Apply changes
            </Button>
          </div>
        </form>
        </CardContent>
        {/* <CardFooter className="bg-gray-50 rounded-b-lg p-6 flex flex-col sm:flex-row gap-4">
          <Button 
              type="button" 
              className="w-full sm:w-1/2 bg-gray-200 hover:bg-gray-300 text-gray-800 transition-colors duration-300"
            >
              <X className="mr-2 h-4 w-4" />
              Cancel
          </Button>
          <Button 
            type="submit" 
            className="w-full sm:w-1/2 bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Updating...
              </>
            ) : (
              'Update Invoice'
            )}
          </Button>
        </CardFooter> */}
      </Card>
      <div className="mt-8 text-center text-sm text-gray-500">
        <p>Need help? Contact our support team.</p>
      </div>
    </div>
  )
}