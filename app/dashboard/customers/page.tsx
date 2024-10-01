import { Metadata } from 'next';
import CustomersTable from '@/app/ui/customers/table';
import { CustomerField, FormattedCustomersTable } from '@/app/lib/definitions';
import { fetchCustomers } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'Customer',
};

export default async function Page() {
  const customerFields: CustomerField[] = await fetchCustomers();

  // Chuyển đổi từ CustomerField sang FormattedCustomersTable
  const formattedCustomers: FormattedCustomersTable[] = customerFields.map(customer => ({
    id: customer.id,
    name: customer.name,
    email: customer.email || 'No email provided',   
    image_url: customer.image_url || '/default.png',
    total_invoices: customer.total_invoices || 0,
    total_pending: (customer.total_pending || '0').toString(),
    total_paid: (customer.total_paid || '0').toString(),
  }));

  return (
    <main>
      <CustomersTable customers={formattedCustomers} /> {/* Truyền dữ liệu đã chuyển đổi */}
    </main>
  );
}