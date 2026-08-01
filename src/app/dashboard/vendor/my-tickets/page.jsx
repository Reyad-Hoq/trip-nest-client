import { getTickets, getVendorTickets } from '@/lib/actions/api/ticket';
import { getSession } from '@/lib/actions/session';
import React from 'react';
import MyTickets from '@/components/dashboard/vendor/MyTickets'
const AddedTicketsPage = async () => {
  const vendor = await getSession();

  if (!vendor?.id) return;

  const data = await getTickets({ vendorId: vendor?.id, limit: 1000 });
  const tickets = Array.isArray(data) ? data : data?.tickets || [];
  return (
    <div className='w-full mx-auto my-5'>
      <MyTickets tickets={tickets} />
    </div>
  );
};

export default AddedTicketsPage;


