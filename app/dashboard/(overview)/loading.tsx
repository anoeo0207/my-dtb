//import DashboardSkeleton from "@/app/ui/skeletons";
import { Skeleton } from "@/components/ui/skeleton"
export default function Loading() {
    //return <div>Loading...</div>; //SideNav is static => still can interact with SideNav
    //return <DashboardSkeleton />;
    return <Skeleton className="w-[100px] h-[20px] rounded-full" />;
}

//User dont have to wait for the page to finish loading (interruptable navigation)