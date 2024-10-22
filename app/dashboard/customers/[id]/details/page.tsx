import AnalyzeCustomer from '@/app/ui/invoices/analyze-form';
import { fetchTotalMoney, fetchCustomersById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import React from 'react';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: PageProps): Promise<JSX.Element> {
  const { id } = params;

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
