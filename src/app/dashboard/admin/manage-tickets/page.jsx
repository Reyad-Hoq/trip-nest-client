
export const dynamic = "force-dynamic";

import TicketTable from '@/components/dashboard/admin/TicketTable';
import EmptyState from '@/components/shared/EmptyState';
import { getTickets } from '@/lib/actions/api/ticket';

const ManageTicketsPage = async () => {

  const tickets = await getTickets({ status: "pending" });

  return (
    <section className="py-10">
      {
        tickets.length !== 0 ?
          <TicketTable tickets={tickets} /> :
          <EmptyState title="No Tickets Found" description='There is no pending tickets to update' />
      }
    </section>
  );
};

export default ManageTicketsPage;