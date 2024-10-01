import Link from "next/link"
import {
  Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Menu,
  Package2,
  Search,
  Users,
} from "lucide-react"

import Image from 'next/image';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
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
import { fetchLatestInvoices } from '@/app/lib/data';

export default async function DashboardLI() {
    const latestInvoices = await fetchLatestInvoices();
  return (
     <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-0 md:gap-0 lg:grid-cols-2 xl:grid-cols-3 ">
        <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Lastest Invoices</CardTitle>
                <CardDescription>
                  Recent invoices from your company.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="pl-4">Customer</TableHead>
                    <TableHead className="text-right mr-5">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    {latestInvoices.map((invoice, i) => {
                        return (
                          <TableRow key={i}>
                            <div className="flex bg-black-300">
                        <TableCell>
                            <Avatar>
                                <AvatarImage src={invoice.image_url} />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </TableCell>

                        <TableCell>
                            <div className="font-medium font-bold"><p className="font-bold">{invoice.name}</p></div>
                            <div className="hidden text-sm text-muted-foreground md:inline">
                                {invoice.email}
                            </div>
                        </TableCell>

                        <TableCell className="text-right pt-4">{invoice.amount}</TableCell>
                            </div>
                          </TableRow>
                            );
                        })}
                  {/* <TableCell>
                      <div className="font-medium">
                        <Avatar>
                            <AvatarImage src={invoice.image_url} />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">{invoice.name}</div>
                      <div className="hidden text-sm text-muted-foreground md:inline">
                        {invoice.email}
                      </div>
                    </TableCell>
                    <TableCell className="hidden xl:table-column">
                      Sale
                    </TableCell>
                    <TableCell className="text-right">{invoice.amount}</TableCell> */}
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
  )
}
 