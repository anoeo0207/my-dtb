'use client'
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteInvoice } from '@/app/lib/action';
import { Button} from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { PlusCircle } from 'lucide-react';
import { deleteCustomer } from '@/app/lib/action'; 

export function CreateInvoice() {
  return (
    <Button size="sm" className="h-7 gap-1 bg-black text-white hover:bg-gray-400">
    <PlusCircle className="h-3.5 w-3.5" />
      <Link href="/dashboard/invoices/create">Create Invoice</Link>
    </Button>
  );
}

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <Button variant="default" className="bg-yellow-300 rounded-md border p-2 hover:bg-yellow-400">
      <Link href={`/dashboard/invoices/${id}/edit`}><PencilIcon className="w-5" /></Link>
    </Button>
  );
}

export function DeleteInvoice({ id }: { id: string }) {
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);
  return (
    <form onSubmit={deleteInvoiceWithId}>
    <AlertDialog>
  <AlertDialogTrigger>
  <div className="bg-red-300 rounded-md border p-2 hover:bg-red-500" >
      <TrashIcon className="w-5" />
    </div>
  </AlertDialogTrigger>
  <AlertDialogContent className="bg-white">
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel className="hover:bg-gray-300">Cancel</AlertDialogCancel>
          <AlertDialogAction className="hover:bg-red-500" onClick={() => deleteInvoiceWithId()}>
        Continue
    </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
    </form>
  );
}

export function RemoveCustomer({ id }: { id: string }) {
  const deleteCustomerWithId = () => {
      deleteCustomer(id);
  };

  return (
    <p className="text-red-600 font-semibold" onClick={deleteCustomerWithId}>
      Delete Customer
    </p>
  );
}