'use client';

import { updateInvoice, State } from '@/app/lib/action';
import { useActionState } from 'react';

import { CustomerField, InvoiceForm } from '@/app/lib/definitions';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
//import { Button } from '@/app/ui/button';
import { Button, buttonVariants } from '@/components/ui/button';
import Input from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio";
import { toast } from "sonner"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

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
  
  return (
    <Sheet>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent className="bg-white">
        <SheetHeader>
          <SheetTitle className="text-center">Edit Invoices</SheetTitle>
        </SheetHeader>

        {/* Wrap the form content */}
        <form action={formAction}>
          <div className="rounded-md bg-gray-50 p-4 md:p-6">
            {/* Customer Name */}
            <div className="mb-4">
              <label htmlFor="customer" className="mb-2 block text-sm font-medium">
                Choose customer
              </label>
              <div className="relative">
                <Select name="customerId" defaultValue="" aria-describedby="customer-error">
                  <SelectTrigger className="w-[180px] bg-white-200 w-full">
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
              <label htmlFor="amount" className="mb-2 block text-sm font-medium">
                Choose an amount
              </label>
              <div className="relative mt-2 rounded-md">
                <Input
                  id="amount"
                  name="amount"
                  type="number"
                  step="0.01"
                  defaultValue={invoice.amount}
                  placeholder="Enter USD amount"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                />
                <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>

            {/* Invoice Status */}
            <fieldset>
              <legend className="mb-2 block text-sm font-medium">
                Set the invoice status
              </legend>
              <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
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
      </SheetContent>
    </Sheet>
  );
}