'use client'

import React from 'react'
import { useState } from 'react'
import { useActionState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Input from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { UserCircle, Mail, Image, Upload } from "lucide-react"
import { DataForm, AddCustomer } from "@/app/lib/action"
import { Checkbox } from "@/components/ui/checkbox"

export default function AddCustomerForm() {
    const initialState: DataForm = {message: null, errors: {}};
    const [,formAction] = useActionState(AddCustomer, initialState);
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            setFile(selectedFile);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <Card className="w-full max-w-4xl mx-auto bg-gradient-to-br from-gray-600 to-gray-800 shadow-xl rounded-lg overflow-hidden border border-gray-700">
                <CardHeader className="text-center bg-gray-800">
                    <CardTitle className="text-3xl font-bold text-white">Add New Customer</CardTitle>
                    <CardDescription className="text-gray-300">Enter the details of the new customer below.</CardDescription>
                </CardHeader>
                <form action={formAction}>
                    <CardContent className="space-y-6 pt-6 bg-white">
                        <div className="space-y-2">
                            <Label htmlFor="customerName" className="text-sm font-medium text-gray-700 flex items-center">
                                <UserCircle className="h-5 w-5 mr-2 text-blue-600" />
                                Name
                            </Label>
                            <Input 
                                id="customerName"
                                name="customerName"
                                type="text" 
                                placeholder="Enter customer's name here" 
                                className="bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="customerEmail" className="text-sm font-medium text-gray-700 flex items-center">
                                <Mail className="h-5 w-5 mr-2 text-blue-600" />
                                Email
                            </Label>
                            <Input 
                                id="customerEmail"
                                name="customerEmail"
                                type="email" 
                                placeholder="Enter customer's email here" 
                                className="bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                        <Label htmlFor="customerImage" className="text-sm font-medium text-gray-700 flex items-center">
                                <Image className="h-5 w-5 mr-2 text-blue-600" />
                                Customer Image
                            </Label>
                            <Input 
                                id="customerImageUrl"
                                name="customerImageUrl"
                                type="text" 
                                className="bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
                                placeholder="Enter customer's image URL here" 
                            />
                            <p className="text-gray-400">or</p>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    {preview ? (
                                        <div className="mb-4">
                                            <img src={preview} alt="Preview" className="mx-auto h-32 w-32 object-cover rounded-full" />
                                        </div>
                                    ) : (
                                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                                    )}
                                    <div className="flex text-sm text-gray-600">
                                        <label htmlFor="customerImage" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                                            <span>{file ? 'Change file' : 'Upload a file'}</span>
                                            <input 
                                                id="customerImage" 
                                                name="customerImage" 
                                                type="file" 
                                                className="sr-only" 
                                                onChange={handleFileChange}
                                                accept="image/*"
                                            />
                                        </label>
                                        {!file && <p className="pl-1">or drag and drop</p>}
                                    </div>
                                    <p className="text-xs text-gray-500">
                                        PNG, JPG, GIF up to 10MB
                                    </p>
                                    {file && (
                                        <p className="text-sm text-gray-500">
                                            {file.name}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </CardContent>
            
                    <CardContent className="bg-white">
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="terms"
                                className="border-gray-300 text-blue-600 focus:ring-blue-500"
                                required
                            />
                            <div className="grid gap-1.5 leading-none">
                                <label
                                    htmlFor="terms"
                                    className="mt-6 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700"
                                >
                                    Accept terms and policy
                                </label>
                                <p className="text-sm text-gray-600">
                                    You agree to our Terms of Service and Privacy Policy.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between bg-gray-100">
                        <Button 
                            type="button" 
                            variant="outline" 
                            className="w-[45%] border-gray-300 text-gray-700 hover:bg-gray-200 mt-6"
                        >
                            Cancel
                        </Button>
                        <Button 
                            type="submit" 
                            className="w-[45%] bg-blue-600 text-white hover:bg-blue-700 mt-6"
                        >
                            Add customer
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    )
}