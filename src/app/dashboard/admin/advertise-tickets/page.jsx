export const dynamic = "force-dynamic";
import AdvertiseTable from '@/components/dashboard/admin/AdvertiseTable';
import { getTickets } from '@/lib/actions/api/ticket';
import React from 'react';
const page = async () => {
  const tickets = await getTickets({ status: "all" })
  return (
    <div>
      <AdvertiseTable tickets={tickets} />
    </div>
  );
};

export default page;