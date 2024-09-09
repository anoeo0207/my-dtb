import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
import { Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Create Invoices',
};
 
export default async function Page() {
  const customers = await fetchCustomers();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true, // danh dau no la trang nguoi dung hien dang dung (va la trang cuoi)
          },
          {label:'Mohamed Salah (Move back to Invoice)', href:'/dashboard/invoices'},
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}