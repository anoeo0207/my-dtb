'use client';

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

export default function Form({ customers }: { customers: CustomerField[] }) {
  const initialState: State = {message: null, errors: {}};
  const [state, formAction] = useActionState(createInvoice, initialState);
  return (<form action={formAction}> 
  <div className="rounded-md bg-gray-50 p-4 md:p-6 bg-gray-300">
    {/* Customer Name */}
    <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-l font-medium flex">
              <UserIcon className="h-5 w-5 mr-2 text-gray-600" />
              <b>Choose a customer</b>
          </label>    
      
      <div className="relative">
      {/* <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" /> */}
      <Select id="customer" name="customerId" defaultValue="" aria-describedby="customer-error">

  <SelectTrigger className="w-[180px] bg-white-200 w-full h-[60px]">
    <SelectValue placeholder="Select a customer" />
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

        {/* <select
          id="customer"
          name="customerId"
          className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
          defaultValue=""
          aria-describedby="customer-error"
        >
          <option value="" disabled>
            Select a customer
          </option>
          {customers.map((name) => (
            <option key={name.id} value={name.id}>
              {name.name}
            </option>
          ))}
        </select> */}
      </div>
      <div id="customer-error" aria-live="polite" aria-atomic="true">
        {state.errors?.customerId &&
          state.errors.customerId.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
    </div>

        {/* Invoice Amount */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-l font-medium flex">
          <CurrencyDollarIcon className="h-5 w-5 mr-2 text-gray-600" />
            <b>Choose an amount</b>
          </label>

          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <Input
                id="amount"
                name="amount"
                type="number"
                step="0.01"
                placeholder="Enter USD amount"
                className="peer block w-full rounded-md border border-gray-200 focus:bg-gray-200 hover:bg-gray-200 py-2 text-sm outline-2 placeholder:text-gray-500"
                required
              />
            </div>
          </div>
        </div>

        

        {/* Invoice Status */}
        <fieldset>
          <legend className="mb-2 block text-l font-medium flex">
            <AdjustmentsHorizontalIcon className="h-5 w-5 mr-2 text-gray-600" />
            <b>Set the invoice status</b>
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">

              <RadioGroup defaultValue="paid" name="status">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="paid" id="paid" />
            <div className="flex w-[120%] items-center bg-green-300 rounded-lg">
              <CheckIcon className="h-4 w-4 mr-2" />
              <Label htmlFor="paid">Paid</Label>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="pending" id="pending" />
            <div className="flex w-[120%] items-center bg-gray-200 rounded-lg">
            <ClockIcon className="h-4 w-4 mr-2" />
            <Label htmlFor="pending">Pending</Label>
            </div>
          </div>
        </RadioGroup>
              {/* <div className="flex items-center">
                <input
                  id="pending"
                  name="status"
                  type="radio"
                  value="pending"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="pending"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Pending <ClockIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="paid"
                  name="status"
                  type="radio"
                  value="paid"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="paid"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Paid <CheckIcon className="h-4 w-4" />
                </label>
              </div> */}
            </div>
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
        {/* <Button type="submit">Create Invoice</Button> */}
        <Button className="bg-purple-500 hover:bg-purple-300" variant="default" onClick={() =>
        Toast()
      }
    >Create Invoice</Button>
      </div>

      <div className="pt-12 text-center">
            <HoverCard>
        <HoverCardTrigger><b>@Acme_2024</b></HoverCardTrigger>
        <HoverCardContent className="bg-white">
          <b>@acme_2024 </b>
        Lorem ipsum dolor sit amet consectetur adipiscing elit.
        </HoverCardContent>
      </HoverCard>
      </div>
    </form>
  );
}
