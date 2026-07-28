import BookingTable from '@/components/dashboard/vendor/BookingTable';
import EmptyState from '@/components/shared/EmptyState';
import { getBookings } from '@/lib/actions/api/bookings';
import { getSession } from '@/lib/actions/session';
import React from 'react';

const BookingPage = async () => {
  const user = await getSession();
  const requestBook = await getBookings({
    vendorId: user?.id,
    status: "pending",
  });
  console.log(requestBook)
  return (
    <div>
      {requestBook.length > 0 ? <BookingTable requestBook={requestBook} /> : <EmptyState />}
    </div>
  );
};

export default BookingPage;