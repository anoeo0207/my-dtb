// import SideNav from '@/app/ui/dashboard/sidenav';
import { Toaster } from "@/components/ui/sonner";
import SideNav2 from '../ui/dashboard/sidenav-shadcn';
import Footer1 from "@/block/footer";

export const experimental_ppr = true;

export default function Layout ({children} : {children : React.ReactNode}) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 ">
            <div>
                <SideNav2 />
                <Toaster />
            </div>
            <div>{children}</div>
        </div>
    );
}


