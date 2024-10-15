'use client';

import { useState } from 'react';
import { useActionState } from 'react';
import { CustomerField } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserIcon,
  AdjustmentsHorizontalIcon,
} from '@heroicons/react/24/outline';
//import { Button } from '@/app/ui/button';
import { createInvoice, State } from '@/app/lib/action';
import { Button, buttonVariants } from '@/components/ui/button';
import Input from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import AcmeLogo from '@/app/ui/acme-logo'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

function Toast() {
  return toast("Invoice created successfully");
}

// export default function Form({ customers }: { customers: CustomerField[] }) {
//   const initialState: State = {message: null, errors: {}};
//   const [state, formAction] = useActionState(createInvoice, initialState);
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault()
//     setIsSubmitting(true)
//     await new Promise(resolve => setTimeout(resolve, 1000))
//     setIsSubmitting(false)
//   }
//   return (<form action={formAction} className="flex justify-center"> 
//   <div className="rounded-md mt-10 w-3/4 justify-center p-4 md:p-6 bg-gray-300">
//       <AcmeLogo />
//     <div className="mb-10 text-center text-3xl font-bold">Create Invoice</div>
//     {/* Customer Name */}
//     <div className="mb-4">
//           <label htmlFor="customer" className="mb-2 block text-l font-medium flex">
//               <UserIcon className="h-5 w-5 mr-2 text-gray-600" />
//               <b>Choose a customer</b>
//           </label>    
      
//       <div className="relative">
//       {/* <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" /> */}
//       <Select name="customerId" defaultValue="" aria-describedby="customer-error">

//   <SelectTrigger className="w-[180px] bg-white w-full h-[60px]">
//     <SelectValue placeholder="Select a customer"/>
//   </SelectTrigger>
//   <SelectContent className="bg-white">
//   <SelectContent className="bg-white">
//         {customers.map((customer) => (
//           <SelectItem key={customer.id} value={customer.id} className="hover:bg-gray-300">
//             <div className="flex items-center justify-center">
//             <Avatar>
//               <AvatarImage src={customer.image_url} />
//               <AvatarFallback>CN</AvatarFallback>
//             </Avatar> 
//             <div className="pl-2 text-sm">
//               {customer.name}
//             </div>
//             </div>
            
//           </SelectItem>
//         ))}
//       </SelectContent>
//   </SelectContent>
// </Select>
//       </div>
//       <div id="customer-error" aria-live="polite" aria-atomic="true">
//         {state.errors?.customerId &&
//           state.errors.customerId.map((error: string) => (
//             <p className="mt-2 text-sm text-red-500" key={error}>
//               {error}
//             </p>
//           ))}
//       </div>
//     </div>

//         {/* Invoice Amount */}
//         <div className="mb-4">
//           <label htmlFor="amount" className="mb-2 block text-l font-medium flex">
//           <CurrencyDollarIcon className="h-5 w-5 mr-2 text-gray-600" />
//             <b>Choose an amount</b>
//           </label>

//           <div className="relative mt-2 rounded-md">
//             <div className="relative">
//               <Input
//                 id="amount"
//                 name="amount"
//                 type="number"
//                 step="0.01"
//                 placeholder="Enter USD amount"
//                 className="peer block w-full rounded-md border border-gray-200 focus:bg-gray-200 hover:bg-gray-200 py-2 text-sm outline-2 placeholder:text-gray-500"
//                 required
//               />
//             </div>
//           </div>
//         </div>

        

//         {/* Invoice Status */}
//         <fieldset>
//           <legend className="mb-2 block text-l font-medium flex">
//             <AdjustmentsHorizontalIcon className="h-5 w-5 mr-2 text-gray-600" />
//             <b>Set the invoice status</b>
//           </legend>
//           <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
//             <div className="flex gap-4">

//               <RadioGroup defaultValue="paid" name="status">
//           <div className="flex items-center space-x-2">
//             <RadioGroupItem value="paid" id="paid" />
//             <div className="flex w-[120%] items-center bg-green-300 rounded-lg">
//               <CheckIcon className="h-4 w-4 mr-2" />
//               <Label htmlFor="paid">Paid</Label>
//             </div>
//           </div>
//           <div className="flex items-center space-x-2">
//             <RadioGroupItem value="pending" id="pending" />
//             <div className="flex w-[120%] items-center bg-gray-200 rounded-lg">
//             <ClockIcon className="h-4 w-4 mr-2" />
//             <Label htmlFor="pending">Pending</Label>
//             </div>
//           </div>
//         </RadioGroup>
//             </div>
//           </div>
//         </fieldset>
//         <div className="mt-6 flex justify-end gap-4">
//         <Link
//           href="/dashboard/invoices"
//           className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
//         >
//           Cancel
//         </Link>
//         {/* <Button type="submit">Create Invoice</Button> */}
//         <Button type="submit" disabled={isSubmitting}>
//                     {isSubmitting ? 'Creating...' : 'Create Invoice'}
//                   </Button>
//       </div>
//       </div>
//     </form>
//   );
// }

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { UserCircle, DollarSign, CheckCircle, Clock } from "lucide-react"

export default function AddInvoiceForm({ customers }: { customers: CustomerField[] }) {
    const initialState: State = {message: null, errors: {}};
    const [state, formAction] = useActionState(createInvoice, initialState);
    const [isSubmitting, setIsSubmitting] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
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
              <Label htmlFor="customer" className="text-sm font-medium text-gray-700">
                Select Customer
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
              <Label htmlFor="amount" className="text-sm font-medium text-gray-700">
                Amount
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
              <Label className="text-sm font-medium text-gray-700">Status</Label>
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