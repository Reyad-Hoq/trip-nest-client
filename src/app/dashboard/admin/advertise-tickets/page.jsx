
import AdvertiseTable from '@/components/dashboard/admin/AdvertiseTable';
import { getTickets } from '@/lib/actions/api/ticket';
import React from 'react';
const page = async () => {
  const data = await getTickets({ status: 'available', limit: 1000 });
  const tickets = Array.isArray(data) ? data : data?.tickets || [];
  return (
    <div>
      <AdvertiseTable tickets={tickets} />
    </div>
  );
};

export default page;