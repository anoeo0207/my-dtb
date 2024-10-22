import React from 'react'; 
import Link from "next/link"
import {
  CircleUser,
  Menu,
  Package2,
  ChevronDown,
  TableOfContents,
  Plus
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { signOut} from '@/auth';
// import SEARCH from "@/components/ui/AI-searchbar"

export default async function SideNav2() {
  return (
    <div className=" flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 sticky top-0 bg-blue-400 text-white">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="/dashboard/acme"
            className="flex items-center gap-2 text-lg font-semibold md:text-base focus:bg-gray-300 font-bold"
          >
            <Package2 className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Link
            href="/dashboard"
            className="text-foreground transition-colors hover:text-foreground focus:bg-gray-300 font-bold"
          >
            Dashboard
          </Link>
          <Link
            href="/dashboard/invoices"
            className="text-muted-foreground transition-colors hover:text-foreground focus:bg-gray-300 font-bold"
          >
            Invoices
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-muted-foreground transition-colors hover:text-foreground focus:bg-gray-300 font-bold">
              <div className="flex">
                Customers 
                <ChevronDown className="h-5 w-5 justify-center" />
              </div>
              </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white">
              <DropdownMenuItem className="hover:bg-gray-300 font-semibold">
                <Link href="/dashboard/customers/overview" className="flex" ><TableOfContents className="h-5 w-5 mr-2" />Overview</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-300 font-semibold">
                <Link href="/dashboard/customers/add" className="flex"><Plus className="h-5 w-5 mr-2" />Add customer</Link>
              </DropdownMenuItem>

            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href="/dashboard/setting/account"
            className="text-muted-foreground transition-colors hover:text-foreground focus:bg-gray-300 font-bold"
          >
            Settings
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <Link href="#" className="hover:text-foreground">
                Dashboard
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Orders
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Products
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Customers
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Analytics
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              {/* <SEARCH /> */}
            </div>
          </form>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="hover:bg-gray-200"><Link href="/dashboard/setting/general">Settings</Link></DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-200"><Link href="/dashboard/setting/support">Support</Link></DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="hover:bg-gray-200">
                <form action ={async() => {
                    'use server';
                    await signOut();
                  } }>
                    <button>
                      Log out
                    </button>
                </form>
        </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
  )
}

