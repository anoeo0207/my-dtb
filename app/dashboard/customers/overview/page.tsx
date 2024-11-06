import { Metadata } from 'next';
// import { montserrat } from '@/components/ui/fonts';
import CustomerTable from '@/app/ui/customer/customer-table';
import React from 'react';

export const metadata: Metadata = {
   title: 'Customers',
};

export default async function Page() {
   return (
      <div className='w-full'>
         {/* <div className='flex w-full items-center justify-between'>
            <h1 className={`${montserrat.className} text-2xl`}>Customers</h1>
         </div> */}
         <div className='mt-4 flex items-center justify-between gap-2 md:mt-8'>
         </div>
            <CustomerTable />
      </div>
   );
}
