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
import { lusitana } from '@/app/ui/fonts';

export default async function DashboardLI() {
  const latestInvoices = await fetchLatestInvoices();
  
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="grid gap-6 lg:grid-cols-1 xl:grid-cols-1 flex">
        <Card className="xl:col-span-2">
          <CardHeader className="flex flex-row items-center">
            <div className="grid gap-2">
              <CardTitle><h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Lastest Invoices
      </h2>
      </CardTitle>
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
                {latestInvoices.map((invoice, i) => (
                  <TableRow key={i}>
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
  );
}

 