import React from 'react';
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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
  TabsContent
} from "@/components/ui/tabs"
import { fetchCustomers } from "@/app/lib/data"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { RemoveCustomer } from "@/app/ui/invoices/buttons"

export default async function Page () {
    const invoices = await fetchCustomers();
    return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs defaultValue="all">
            <TabsContent value="all">
              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader className="">
                  <CardTitle>Customers</CardTitle>
                  <CardDescription>
                    Overview about your customers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* <div className="mb-5">
                    <searchCustomers />
                  </div> */}
                  <div className="overflow-auto max-h-2/3">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="hidden w-[100px] sm:table-cell">
                          <span className="sr-only">Image</span>
                        </TableHead>
                        <TableHead className="text-lg font-bold">Name</TableHead>
                        <TableHead className="text-lg font-bold">Email</TableHead>
                        <TableHead className="text-lg font-bold">Total Invoices</TableHead>
                        <TableHead className="hidden md:table-cell text-lg font-bold">
                          Total Paid
                        </TableHead>
                        <TableHead className="hidden md:table-cell text-lg font-bold">
                          Total Pending
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
                          {invoice.email}
                        </TableCell>
                        <TableCell className="hidden pl-14 md:table-cell font-semibold text-lg">
                          {invoice.total_invoices}
                        </TableCell>
                        <TableCell className="hidden pl-12 md:table-cell text-green-500 font-semibold text-lg">
                        {invoice.total_paid}
                        </TableCell>
                        <TableCell className="hidden pl-14 md:table-cell text-yellow-400 font-semibold text-lg">
                        {invoice.total_pending}
                        </TableCell>
                        <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger>...</DropdownMenuTrigger>
                          <DropdownMenuContent className="bg-white border-black">
                            <DropdownMenuItem className="hover:bg-gray-300">
                              <Link href={`/dashboard/customers/${invoice.id}/details`}>
                                Analyze
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="hover:bg-gray-300">
                              <RemoveCustomer id={invoice.id} />
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                        </TableCell>
                      </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="text-xs text-muted-foreground">
                    <strong>Recent invoices from your customer</strong>
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




