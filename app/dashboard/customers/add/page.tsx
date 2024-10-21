'use client'
import { useState } from "react"
import { startTransition } from 'react';
import { useActionState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Input from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { UserCircle, UserRoundPlus, Mail, Image, Upload } from "lucide-react"
import { CustomerField } from "@/app/lib/definitions"
import { DataForm, AddCustomer } from "@/app/lib/action"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Checkbox } from "@/components/ui/checkbox";

export default function AddCustomerForm() {
    const initialState: DataForm = {message: null, errors: {}};
    const [state, formAction] = useActionState(AddCustomer, initialState);
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br p-4">
            <Card className="w-full max-w-4xl mx-auto bg-white/90 backdrop-blur-sm shadow-xl rounded-lg">
                <CardHeader className="text-center bg-blue-300">
                    <CardTitle className="text-3xl font-bold text-blue-800">Add New Customer</CardTitle>
                    <CardDescription className="text-blue-600">Enter the details of the new customer below.</CardDescription>
                </CardHeader>
                <form action={formAction}>
                    <CardContent className="space-y-6 pt-6">
                        <div className="space-y-2">
                            <Label htmlFor="customer-name" className="text-sm font-medium text-gray-700 font-semibold flex">
                                <UserCircle className="h-5 w-5 mr-2" />
                                Name:
                            </Label>
                            <Input 
                                id="customerName"
                                name="customerName"
                                type="text" 
                                placeholder="Enter customer's name here" 
                                className="border-blue-300 focus:border-blue-500 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="customer-email" className="text-sm font-medium text-gray-700 font-semibold flex">
                                <Mail className="h-5 w-5 mr-2" />
                                Email:
                            </Label>
                            <Input 
                                id="customerEmail"
                                name="customerEmail"
                                type="email" 
                                placeholder="Enter customer's email here" 
                                className="border-blue-300 focus:border-blue-500 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="customer-image" className="text-sm font-medium text-gray-700 font-semibold flex">
                                <Image className="h-5 w-5 mr-2" />
                                Image:
                            </Label>
                            <Input 
                                id="customerImageUrl"
                                name="customerImageUrl"
                                type="text" 
                                className="border-blue-300 focus:border-blue-500 focus:ring-blue-500"
                                placeholder="Enter customer's image URL here" 
                            />
                            <p className="text-gray-400">or</p>
                            <div className="border-2 border-dashed border-blue-300 rounded-md p-6 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition-colors">
                                <Upload className="h-12 w-12 text-blue-500 mb-2" />
                                <p className="text-sm text-blue-600 text-center">
                                    Drag and drop an image file here, or click to select a file"
                                </p>
                                <Input
                                    type="file"
                                    className="hidden"
                                    accept="image/*"
                                />
                            </div>
                        </div>
                    </CardContent>
            
                    <CardContent>
                        <div className="flex items-center">
                            <Checkbox
                                className="border-blue-400 focus:border-blue-500 focus:ring-blue-500"
                                required
                            />
                            <div className="grid-cols-1 mt-5">
                                <p className="ml-2 font-semibold text-sm">Accept terms and policy</p>
                                <p className="ml-2 text-sm">You agree to our Terms of Service and Privacy Policy.</p>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between bg-blue-50 rounded-b-lg">
                        <Button 
                            type="button" 
                            variant="outline" 
                            className="w-[45%] border-blue-300 text-blue-600 hover:bg-blue-100 mt-5"
                        >
                            Cancel
                        </Button>
                        <Button 
                            type="submit" 
                            className="w-[45%] bg-gradient-to-r from-blue-600 to-blue-400 text-white hover:from-blue-700 hover:to-blue-500 mt-5"
                        >
                            Add customer
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}
