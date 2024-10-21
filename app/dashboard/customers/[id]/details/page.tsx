import AnalyzeCustomer from '@/app/ui/invoices/analyze-form';
import { fetchTotalMoney, fetchCustomersById } from '@/app/lib/data';
import {notFound} from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [invoice, money] = await Promise.all([
        fetchCustomersById(id),
        fetchTotalMoney(id),
      ]);
      if (!invoice) {
        notFound();
      }
    return (
    <main>
      <AnalyzeCustomer invoice={invoice} money={money} />
    </main>
  );
}