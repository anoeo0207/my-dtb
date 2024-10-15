import AnalyzeCustomer from '@/app/ui/invoices/analyze-form';
import { fetchCustomers, fetchCustomersById } from '@/app/lib/data';
import {notFound} from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [invoice, customers] = await Promise.all([
        fetchCustomersById(id),
        fetchCustomers(),
      ]);
      if (!invoice) {
        notFound();
      }
    return (
    <main>
      <AnalyzeCustomer invoice={invoice} customers={customers} />
    </main>
  );
}