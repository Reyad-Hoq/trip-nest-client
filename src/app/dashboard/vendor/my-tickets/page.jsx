import { getTickets } from '@/lib/actions/api/ticket';
import { getSession } from '@/lib/actions/session';
import React from 'react';
import MyTickets from '@/components/dashboard/vendor/MyTickets'
const AddedTicketsPage = async () => {
  const vendor = await getSession();

  if (!vendor?.id) return;

  const vendorTickets = await getTickets({ vendorId: vendor?.id })
  console.log(vendorTickets)
  return (
    <div className='w-6xl mx-auto'>
      <MyTickets tickets={vendorTickets} />
    </div>
  );
};

export default AddedTicketsPage;


