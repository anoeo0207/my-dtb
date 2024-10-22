import Form from '@/app/ui/invoices/edit-form';
import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data';
import {notFound} from 'next/navigation';
import React from 'react';

export default async function Page({ params }: { params: { id: string } }) {
    const id = await params.id;
    const [invoice, customers] = await Promise.all([
        fetchInvoiceById(id),
        fetchCustomers(),
      ]);
      if (!invoice) {
        notFound();
      }
    return (
    <main>
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}