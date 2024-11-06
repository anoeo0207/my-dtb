import Pagination from '@/app/ui/invoices/pagination';
import Table from '@/app/ui/invoices/table';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchInvoicesPages } from '@/app/lib/data';
import { Metadata } from 'next';
import React from 'react';
 
export const metadata: Metadata = {
  title: 'Invoices',
};
 
export default async function Page({
  searchParams,
}: {
  searchParams?: {
     query?: string;
     page?: string;
  };
}) {
  const query = await searchParams?.query || '';
  const currentPage = Number(await searchParams?.page) || 1;
  const totalPages = await fetchInvoicesPages(query);

  return (
     <div className='w-full'>
        <Suspense
           key={query + currentPage}
           fallback={<InvoicesTableSkeleton />}
        >
           <Table query={query} currentPage={currentPage} />
        </Suspense>
        <div className='flex w-full justify-center'>
           <Pagination totalPages={totalPages} />
        </div>
     </div>
  );
}