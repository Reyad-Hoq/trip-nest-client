export const dynamic = "force-dynamic";
import AdvertiseTable from '@/components/dashboard/admin/AdvertiseTable';
import { PaginationBasic } from '@/components/shared/Pagination';
import { getTickets } from '@/lib/actions/api/ticket';
import React from 'react';
const page = async () => {
  const data = await getTickets({ status: 'available', limit: 1000 });
  const tickets = Array.isArray(data) ? data : data?.tickets || [];
  console.log(tickets.length)
  return (
    <div>
      <AdvertiseTable tickets={tickets} />
    </div>
  );
};

export default page;