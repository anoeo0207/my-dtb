import {
  Activity,
  CreditCard,
  DollarSign,
  Users,
} from "lucide-react"
import React from 'react';
import RevenueChart from "@/app/ui/dashboard/revenue-chart"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  Card,
  CardContent,
  CardDescription,
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
import { fetchCardData } from "@/app/lib/data"
import { fetchLatestInvoices } from '@/app/lib/data';
import { lusitana } from '@/app/ui/fonts';

export default async function Page() {
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices, 
  } = await fetchCardData();

  const latestInvoices = await fetchLatestInvoices();
            
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card x-chunk="dashboard-01-chunk-0" className="bg-gradient-to-r from-[#EDF1F4] to-[#C3CBDC] hover:bg-gray-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Collected
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalPaidInvoices}</div>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-1" className="bg-gradient-to-r from-[#EDF1F4] to-[#C3CBDC] hover:bg-gray-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Pending
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalPendingInvoices}</div>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-2" className="bg-gradient-to-r from-[#EDF1F4] to-[#C3CBDC] hover:bg-gray-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Invoices</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{numberOfInvoices}</div>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-3" className="bg-gradient-to-r from-[#EDF1F4] to-[#C3CBDC] hover:bg-gray-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{numberOfCustomers}</div>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-2">
          <div className="w-full"> 
            <RevenueChart />
          </div>
          <Card x-chunk="dashboard-01-chunk-5" className="bg-gradient-to-r from-[#D7E1EC] to-[#FFFFFF]">
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle><h1 className={`${lusitana.className} text-xl md:text-2xl`}>
        Lastest Invoices
      </h1>
      </CardTitle>
              <CardDescription>
                Recent invoices from your company.
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <Table className="rounded-lg">
              <TableHeader>
                <TableRow>
                  <TableHead className="pl-4 hidden">Customer</TableHead>
                  <TableHead className="text-right mr-5 hidden">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="bg-gradient-to-r from-[#E9E9E9] to-[#F6F6F6]">
                {latestInvoices.map((invoice, i) => (
                  <TableRow key={i} className="border-b border-gray-300">
                    <TableCell>
                      <div className="flex">
                        <Avatar>
                          <AvatarImage src={invoice.image_url} />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="font-medium pl-2">
                          <p className="font-bold">{invoice.name}</p>
                          <div className="hidden text-sm text-muted-foreground md:inline">
                            {invoice.email}
                          </div>
                        </div>
                        </div>
                    </TableCell>
                    <TableCell className="text-right">{invoice.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        </div>
      </main>
    </div>
  )
}

