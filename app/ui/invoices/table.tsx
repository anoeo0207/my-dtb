import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Card,
  CardContent,
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
import React from 'react'; 
import { Filter } from "lucide-react";
import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
import InvoiceStatus from '@/app/ui/invoices/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredInvoices } from '@/app/lib/data';
import Search from '@/app/ui/search';
import { CreateInvoice } from "@/app/ui/invoices/buttons";
import { Button } from "@/components/ui/button";

export default async function Page({
        query,
        currentPage,
    }: {
        query: string;
        currentPage: number; 
    }) {
    const invoices = await fetchFilteredInvoices(query, currentPage);
  
    return (
    <div className="flex w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs defaultValue="all">
            <TabsContent value="all">
              <Card x-chunk="dashboard-06-chunk-0">
                <CardContent>
                  <div className="grid grid-cols-2">
                    <div className="grid grid-cols-1 items-center text-lg font-bold">
                      <div className="flex gap-2">
                      <Button className="bg-white border border-black">
                        <Filter className="h-5 w-5 mr-2" />
                        Filter
                      </Button>
                        <Search placeholder="Search invoices..." />
                      </div>
                    </div>
                    <div className="mb-5 flex justify-end">
                      <div className="flex gap-2 md:mt-8">
                        <CreateInvoice />
                      </div>
                    </div>
                  </div>
                  <Table>
                    <TableHeader>
                      <TableRow className="rounded-lg bg-gradient-to-r from-[#EDF1F4] to-[#C3CBDC]">
                        <TableHead className="hidden w-[100px] sm:table-cell">
                          <span className="sr-only">Image</span>
                        </TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Amount</TableHead>
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
                      <TableRow key={invoice.id} className="hover:bg-gray-100">
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
                        <TableCell>{formatCurrency(invoice.amount)}</TableCell>
                        <TableCell className="hidden md:table-cell">
                          {invoice.email}
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {formatDateToLocal(invoice.date)}
                        </TableCell>
                        <TableCell>
                          <div className="flex justify-end gap-3 mr-10">
                            <UpdateInvoice id={invoice.id} />
                            <DeleteInvoice id={invoice.id} />
                          </div>
                        </TableCell>
                      </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}


