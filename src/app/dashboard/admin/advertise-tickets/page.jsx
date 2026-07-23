export const dynamic = "force-dynamic";
import { getTickets } from '@/lib/actions/api/ticket';
import React from 'react';
const page = async () => {
  const tickets = await getTickets({ status: "all" })
  return (
    <div>
      This is Advertise ticket page {tickets.length}
    </div>
  );
};

export default page;