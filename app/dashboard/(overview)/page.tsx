// //import { Card } from '@/app/ui/dashboard/cards';
// import RevenueChart from '@/app/ui/dashboard/revenue-chart';
// import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
// import { lusitana } from '@/app/ui/fonts';
// import { fetchCardData } from '@/app/lib/data'; // Remove fetchLatestInvoices
// import { Suspense } from 'react';
// //import CardWrapper from '@/app/ui/dashboard/cards';
// import {
//   RevenueChartSkeleton,
//   LatestInvoicesSkeleton,
//   CardsSkeleton
// } from '@/app/ui/skeletons';
// import CustomCard from '@/components/ui/customCard';

// import {
//   HoverCard,
//   HoverCardContent,
//   HoverCardTrigger,
// } from "@/components/ui/hover-card"

// import DashboardLI from '@/app/ui/dashboard/lastest-invoices-shadcn';
// import { Chart } from '@/app/ui/dashboard/chart';


// export default async function Page() {
//     //const revenue = await fetchRevenue();
//     //const latestInvoices = await fetchLatestInvoices(); // wait for fetchRevenue() to finish
//     const {
//         numberOfInvoices,
//         numberOfCustomers,
//         totalPaidInvoices,
//         totalPendingInvoices,
//     } = await fetchCardData(); // wait for fetchLatestInvoices() to finish
//   return (
//     <main>
//       <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
//         Dashboard
//       </h1>
//       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//         <Suspense fallback={<CardsSkeleton/>}>

//         <CustomCard 
//         title="Collected" 
//         description="" 
//         content={totalPaidInvoices}
//         footer="" 
//       />

//         <CustomCard 
//         title="Pending" 
//         description="" 
//         content={totalPendingInvoices}
//         footer="" 
//       />

//       <CustomCard 
//         title="Total Invoices" 
//         description="" 
//         content={numberOfInvoices}
//         footer="" 
//       />

//       <CustomCard 
//         title="Total Customers" 
//         description="" 
//         content={numberOfCustomers}
//         footer="" 
//       />

//         </Suspense>
//       </div>
      
//       <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
//       <Suspense fallback={<RevenueChartSkeleton />}>
//           <RevenueChart />
//         </Suspense>

//       <Suspense fallback={<LatestInvoicesSkeleton />}>
//           <DashboardLI />
//         </Suspense>
//       </div>

//       <div className="pt-12">
//             <HoverCard>
//         <HoverCardTrigger><b>@Acme_2024</b></HoverCardTrigger>
//         <HoverCardContent className="bg-white">
//           <b>@acme_2024 </b>
//         Lorem ipsum dolor sit amet consectetur adipiscing elit.
//         </HoverCardContent>
//             </HoverCard>
//       </div>

//       <div>
//         <DashboardLI />
//       </div>

//       <Chart />
//     </main>
//   );
// }

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
import { fetchCardData } from '@/app/lib/data';
import DashboardLI from "@/app/ui/dashboard/lastest-invoices-shadcn";
import {
    RevenueChartSkeleton,
    LatestInvoicesSkeleton,
    CardsSkeleton
  } from '@/app/ui/skeletons';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import { Suspense } from 'react';
import { Component } from "@/app/ui/dashboard/chart";

export const description =
  "An application shell with a header and main content area. The header has a navbar, a search input and and a user nav dropdown. The user nav is toggled by a button with an avatar image."

export default async function Page() {
  const {
            numberOfInvoices,
            numberOfCustomers,
            totalPaidInvoices,
            totalPendingInvoices,
        } = await fetchCardData();
        
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Collected
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalPaidInvoices}</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Pending
              </CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalPendingInvoices}</div>
              <p className="text-xs text-muted-foreground">
                +180.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Invoices</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{numberOfInvoices}</div>
              <p className="text-xs text-muted-foreground">
                +19% from last month
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{numberOfCustomers}</div>
              <p className="text-xs text-muted-foreground">
                +201 since last hour
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-1">
        <div className="w-full">
          <Suspense fallback={<RevenueChartSkeleton />}>
            <RevenueChart />
          </Suspense>
        </div>

        <div className="mt-4 w-full" >
          <Suspense fallback={<LatestInvoicesSkeleton />}>
            <DashboardLI />
          </Suspense>
        </div>
      </div>

    <Component />

    </div>
  )
}
