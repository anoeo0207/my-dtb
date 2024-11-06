import React from 'react'; 
import { Toaster } from "@/components/ui/sonner";
import SideNav2 from '../ui/dashboard/sidenav-shadcn';

export const experimental_ppr = true;

export default function Layout ({children} : {children : React.ReactNode}) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#283048] to-[#859398]">
            <div>
                <SideNav2 />
                <Toaster />
            </div>
            <div>{children}</div>
        </div>
    );
}


