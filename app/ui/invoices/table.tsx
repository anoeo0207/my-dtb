// import Image from 'next/image';
// import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
// import InvoiceStatus from '@/app/ui/invoices/status';
// import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
// import { fetchFilteredInvoices } from '@/app/lib/data';

// export default async function InvoicesTable({
//   query,
//   currentPage,
// }: {
//   query: string;
//   currentPage: number;
// }) {
//   const invoices = await fetchFilteredInvoices(query, currentPage);

//   return (
//     <div className="mt-6 flow-root">
//       <div className="inline-block min-w-full align-middle">
//         <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
//           <div className="md:hidden">
//             {invoices?.map((invoice) => (
//               <div
//                 key={invoice.id}
//                 className="mb-2 w-full rounded-md bg-white p-4"
//               >
//                 <div className="flex items-center justify-between border-b pb-4">
//                   <div>
//                     <div className="mb-2 flex items-center">
//                       <Image
//                         src={invoice.image_url}
//                         className="mr-2 rounded-full"
//                         width={28}
//                         height={28}
//                         alt={`${invoice.name}'s profile picture`}
//                       />
//                       <p>{invoice.name}</p>
//                     </div>
//                     <p className="text-sm text-gray-500">{invoice.email}</p>
//                   </div>
//                   <InvoiceStatus status={invoice.status} />
//                 </div>
//                 <div className="flex w-full items-center justify-between pt-4">
//                   <div>
//                     <p className="text-xl font-medium">
//                       {formatCurrency(invoice.amount)}
//                     </p>
//                     <p>{formatDateToLocal(invoice.date)}</p>
//                   </div>
//                   <div className="flex justify-end gap-2">
//                     <UpdateInvoice id={invoice.id} />
//                     <DeleteInvoice id={invoice.id} />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <table className="hidden min-w-full text-gray-900 md:table">
//             <thead className="rounded-lg text-left text-sm font-normal">
//               <tr>
//                 <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
//                   Customer
//                 </th>
//                 <th scope="col" className="px-3 py-5 font-medium">
//                   Email
//                 </th>
//                 <th scope="col" className="px-3 py-5 font-medium">
//                   Amount
//                 </th>
//                 <th scope="col" className="px-3 py-5 font-medium">
//                   Date
//                 </th>
//                 <th scope="col" className="px-3 py-5 font-medium">
//                   Status
//                 </th>
//                 <th scope="col" className="relative py-3 pl-6 pr-3">
//                   <span className="sr-only">Edit</span>
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white">
//               {invoices?.map((invoice) => (
//                 <tr
//                   key={invoice.id}
//                   className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
//                 >
//                   <td className="whitespace-nowrap py-3 pl-6 pr-3">
//                     <div className="flex items-center gap-3">
//                       <Image
//                         src={invoice.image_url}
//                         className="rounded-full"
//                         width={28}
//                         height={28}
//                         alt={`${invoice.name}'s profile picture`}
//                       />
//                       <p>{invoice.name}</p>
//                     </div>
//                   </td>
//                   <td className="whitespace-nowrap px-3 py-3">
//                     {invoice.email}
//                   </td>
//                   <td className="whitespace-nowrap px-3 py-3">
//                     {formatCurrency(invoice.amount)}
//                   </td>
//                   <td className="whitespace-nowrap px-3 py-3">
//                     {formatDateToLocal(invoice.date)}
//                   </td>
//                   <td className="whitespace-nowrap px-3 py-3">
//                     <InvoiceStatus status={invoice.status} />
//                   </td>
//                   <td className="whitespace-nowrap py-3 pl-6 pr-3">
//                     <div className="flex justify-end gap-3">
//                       <UpdateInvoice id={invoice.id} />
//                       <DeleteInvoice id={invoice.id} />
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from "next/image"
import Link from "next/link"
import {
  File,
  Home,
  LineChart,
  ListFilter,
  MoreHorizontal,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Input from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
import InvoiceStatus from '@/app/ui/invoices/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredInvoices } from '@/app/lib/data';

export const description =
  "An products dashboard with a sidebar navigation. The sidebar has icon navigation. The content area has a breadcrumb and search in the header. It displays a list of products in a table with actions."

export default async function Page ({
        query,
        currentPage,
    }: {
        query: string;
        currentPage: number;
    }) {
    const invoices = await fetchFilteredInvoices(query, currentPage);
  
    return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs defaultValue="all">
            <TabsContent value="all">
              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader className="text-center">
                  <CardTitle>Products</CardTitle>
                  <CardDescription>
                    Manage your products and view their sales performance.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="hidden w-[100px] sm:table-cell">
                          <span className="sr-only">Image</span>
                        </TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead className="hidden md:table-cell">
                          Email
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Created at
                        </TableHead>
                        <TableHead>
                          <span className="sr-only">Actions</span>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                    {invoices?.map((invoice) => (
                      <TableRow>
                        <TableCell className="hidden sm:table-cell">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={invoice.image_url} />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                        </TableCell>
                        <TableCell className="font-medium">
                          <div className="block">{invoice.name}</div>
                        </TableCell>
                        <TableCell>
                          <InvoiceStatus status={invoice.status} />
                        </TableCell>
                        <TableCell>{invoice.amount}$</TableCell>
                        <TableCell className="hidden md:table-cell">
                          {invoice.email}
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {formatDateToLocal(invoice.date)}
                        </TableCell>
                        <TableCell>
                        <div className="flex space-x-4">
                          <UpdateInvoice id={invoice.id} />
                          <DeleteInvoice id={invoice.id} />
                        </div>
                        </TableCell>
                      </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter>
                  <div className="text-xs text-muted-foreground">
                    Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                    products
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}


