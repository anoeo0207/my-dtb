import DashboardSkeleton from "@/app/ui/skeletons";

export default function Loading() {
    //return <div>Loading...</div>; //SideNav is static => still can interact with SideNav
    return <DashboardSkeleton />;
}

//User dont have to wait for the page to finish loading (interruptable navigation)