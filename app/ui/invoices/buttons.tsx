import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { deleteInvoice } from '@/app/lib/action';
import { Button, buttonVariants } from '@/components/ui/button';
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

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import Input from "@/components/ui/input"
 
const formSchema = z.object({
  username: z.string().min(2).max(50),
})

export function ProfileForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)

    return (
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    )
  }
}


export function CreateInvoice() {
  return (
    <Button variant="default" className="bg-blue-400 hover:bg-blue-300">
      <Link href="/dashboard/invoices/create" >Create Invoice</Link><PlusIcon className="h-5 md:ml-2" />
    </Button>
    // <Link
    //   href="/dashboard/invoices/create"
    //   className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    // >
    //   <span className="hidden md:block">Create Invoice</span>{' '}
    //   <PlusIcon className="h-5 md:ml-4" />
    // </Link>
  );
}

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <Button variant="default" className="bg-yellow-300 rounded-md border p-2 hover:bg-yellow-400">
      <Link href={`/dashboard/invoices/${id}/edit`}><PencilIcon className="w-5" /></Link>
    </Button>
    // <Link
    //   href={`/dashboard/invoices/${id}/edit`}
    //   className="rounded-md border p-2 hover:bg-gray-100"
    // >
    //   <PencilIcon className="w-5" /> 
    // </Link>
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
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>
      <Button type="submit" >
        Continue
      </Button>
      </AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
      {/* <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button> */}
    </form>
    
  );
}
