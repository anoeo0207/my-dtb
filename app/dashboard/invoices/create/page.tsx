import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
import { Metadata} from 'next';
import { Slash } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const metadata: Metadata = {
  title: 'Create Invoices',
};
 
export default async function Page() {
  const customers = await fetchCustomers();
 
  return (
    <main>
      <Breadcrumb className="mb-5">
      <BreadcrumbList>

        <BreadcrumbItem>
          <BreadcrumbLink href="/dashboard/invoices" className="font-bold text-base hover:text-gray-600">Invoices</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className="text-2xl">
          <Slash />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage className="text-xl">Create Invoice</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
      
      {/* <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true, // danh dau no la trang nguoi dung hien dang dung (va la trang cuoi)
          },
          {label:'Mohamed Salah (Move back to Invoice)', href:'/dashboard/invoices'},
        ]}
      /> */}
      <Form customers={customers} />
    </main>
  );
}