"use client"

import React from 'react'; 
import { useState } from "react"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Mail, Phone, MapPin, DollarSign, Calendar, ReceiptText } from "lucide-react"
import Link from "next/link"
import { CustomerField } from "@/app/lib/definitions"
import { TotalMoney } from "@/app/lib/definitions"

interface CustomerData {
  name: string
  email: string
  phone: string
  address: string
  avatarUrl: string
  totalInvoice: number
  totalPaid: number
  totalPending: number
  recentTransactions: Array<{
    id: number
    date: string
    amount: number
    status: "paid" | "pending"
  }>
}

const customerData: CustomerData = {
  name: "Alice Johnson",
  email: "alice@example.com",
  phone: "+1 (555) 123-4567",
  address: "123 Main St, Anytown, AN 12345",
  avatarUrl: "/placeholder.svg?height=128&width=128",
  totalInvoice: 10000,
  totalPaid: 7500,
  totalPending: 2500,
  recentTransactions: [
    { id: 1, date: "2023-06-01", amount: 1500, status: "paid" },
    { id: 2, date: "2023-06-15", amount: 2000, status: "paid" },
    { id: 3, date: "2023-07-01", amount: 1500, status: "pending" },
    { id: 4, date: "2023-07-15", amount: 1000, status: "pending" },
  ],
}

export default function AnalyzeCustomer({
  invoice,
  money,
}: {
  invoice: CustomerField[];
  money: TotalMoney[]; 
}) {
  const [activeTab, setActiveTab] = useState("overview")
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount)
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/dashboard/customers/overview" className="flex items-center space-x-2">
              <ArrowLeft className="h-6 w-6" />
              <span className="font-semibold">Back to Customers</span>
            </Link>
          </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-[300px_1fr]">
          <aside>
            <Card>
            {invoice?.map((customer) => ( 
                <CardContent key={customer.id} className="p-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-32 w-32 mb-4">
                    <AvatarImage src={customer.image_url} />
                  </Avatar>
                  <h2 className="text-2xl font-bold">{customer.name}</h2>
                  <p className="text-sm text-muted-foreground mb-4 font-semibold">Customer ID: {customer.id}</p>
                  <div className="grid gap-2 text-sm">
                    <div className="flex items-center">
                      <Mail className="mr-2 h-4 w-4" />
                      {customer.email}
                    </div>
                    <div className="flex items-center">
                      <Phone className="mr-2 h-4 w-4" />
                      {customerData.phone}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4" />
                      {customerData.address}
                    </div>
                  </div>
                </div>
              </CardContent>
            ))}
            </Card>
          </aside>
          <div className="space-y-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="bg-white">
                <TabsTrigger value="overview" className="focus:bg-gray-200">Overview</TabsTrigger>
                <TabsTrigger value="transactions" className="focus:bg-gray-200">Transactions</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Financial Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                  {invoice?.map((customer) => ( 
                    <div key={customer.id} className="grid gap-4 md:grid-cols-3">
                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium">Total Invoice</CardTitle>
                          <ReceiptText className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold">{customer.total_invoices}</div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium">Total Paid</CardTitle>
                          <ReceiptText className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold text-green-600">{customer.total_paid}</div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium">Total Pending</CardTitle>
                          <ReceiptText className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold text-yellow-600">{customer.total_pending}</div>
                        </CardContent>
                      </Card>
                    </div>
                    ))}

                  {money?.map((data) => ( 
                    <div key={data.customer_id} className="grid gap-4 md:grid-cols-3">
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-bold">Total Money</CardTitle>
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">${data.total_amount}</div>
                      </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-bold">Total Money Paid</CardTitle>
                          <DollarSign className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold text-green-600">${data.total_money_paid}</div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-bold">Total Money Pending</CardTitle>
                          <DollarSign className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                          <div className="text-2xl font-bold text-yellow-600">${data.total_money_pending}</div>
                        </CardContent>
                      </Card>
                  </div>
                  ))}

                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {customerData.recentTransactions.slice(0, 3).map((transaction) => (
                        <div key={transaction.id} className="flex items-center">
                          <div className="mr-4">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                          </div>
                          <div className="flex-grow">
                            <p className="text-sm font-medium">{transaction.date}</p>
                            <p className="text-sm text-muted-foreground">
                              {transaction.status === "paid" ? "Payment received" : "Invoice sent"}
                            </p>
                          </div>
                          <div className={`text-sm font-medium ${
                            transaction.status === "paid" ? "text-green-600" : "text-yellow-600"
                          }`}>
                            {formatCurrency(transaction.amount)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="transactions">
                <Card>
                  <CardHeader>
                    <CardTitle>Transaction History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {customerData.recentTransactions.map((transaction) => (
                        <div key={transaction.id} className="flex items-center">
                          <div className="mr-4">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                          </div>
                          <div className="flex-grow">
                            <p className="text-sm font-medium">{transaction.date}</p>
                            <p className="text-sm text-muted-foreground">
                              {transaction.status === "paid" ? "Payment received" : "Invoice sent"}
                            </p>
                          </div>
                          <div className={`text-sm font-medium ${
                            transaction.status === "paid" ? "text-green-600" : "text-yellow-600"
                          }`}>
                            {formatCurrency(transaction.amount)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}