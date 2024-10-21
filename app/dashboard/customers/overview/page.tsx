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
  Users2
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

import Search from '@/app/ui/search';
import { fetchCustomers } from "@/app/lib/data"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { fetchTotalMoney } from "@/app/lib/data"

import { RemoveCustomer } from "@/app/ui/invoices/buttons"

export const description =
  "An products dashboard with a sidebar navigation. The sidebar has icon navigation. The content area has a breadcrumb and search in the header. It displays a list of products in a table with actions."

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
                  <div className="mb-5">
                    <Search placeholder="Search invoices..." />
                  </div>
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



