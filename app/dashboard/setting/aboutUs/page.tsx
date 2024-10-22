import { CircleUser, Menu, Package2, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import Input from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col">
          <div className="grid gap-6 mb-4">
          <article className="prose prose-sm mx-auto pt-8">
            <h1 className="font-bold text-3xl mb-4">About Us</h1>
            <h2 className="font-bold">Lorem ipsum</h2>
            <p className="mb-4 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed nisi metus. Phasellus gravida venenatis neque vel congue. 
            Donec varius, urna sed bibendum faucibus, velit tortor malesuada sapien, non tincidunt purus justo vitae nisi. 
            Curabitur vel gravida eros. Etiam placerat sagittis arcu, sit amet vehicula urna vestibulum id. 
            Nulla tincidunt sit amet nisl a elementum. Aliquam erat volutpat. Pellentesque eget orci sit amet enim scelerisque tincidunt. 
            Phasellus aliquam, mauris vitae posuere laoreet, felis odio gravida orci, ac consectetur libero lectus sit amet mi. 
            Cras non vulputate purus, eget tempor lectus.
            </p>
            <h2 className="font-bold">Lorem ipsum</h2>
            <p className="mb-4 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed nisi metus. Phasellus gravida venenatis neque vel congue. 
            Donec varius, urna sed bibendum faucibus, velit tortor malesuada sapien, non tincidunt purus justo vitae nisi. 
            Curabitur vel gravida eros. Etiam placerat sagittis arcu, sit amet vehicula urna vestibulum id. 
            Nulla tincidunt sit amet nisl a elementum.
            </p>

            <h2 className="font-bold">Lorem ipsum</h2>
            <p className="mb-4 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed nisi metus. Phasellus gravida venenatis neque vel congue. 
            Donec varius, urna sed bibendum faucibus, velit tortor malesuada sapien, non tincidunt purus justo vitae nisi. 
            Curabitur vel gravida eros.
            </p>
            
          </article>
          </div>
        </div>
  )
}

