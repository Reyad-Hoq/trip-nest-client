'use client';
import { updateBookingById } from '@/lib/actions/api/bookings';
import { Button, Chip, Table } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

const BookingTable = ({ requestBook }) => {
  const router = useRouter();
  const handleBookingUpdate = async (bookingId, status) => {
    try {
      const result = await updateBookingById(bookingId,
        { status });
      if (result.success && status === 'accepted') {
        toast.success('Ticket is accepted');
        router.refresh();
      } else {
        toast.error('Ticket is rejected')
        router.refresh();
      }

    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <section className='space-y-5'>
      <div>
        <h1 className="text-3xl font-bold text-[#1A1D7E]">
          Requested Bookings
        </h1>

        <p className="text-slate-500">
          Manage all tickets users have requested.
        </p>
      </div>
      <Table>
        <Table.ResizableContainer>
          <Table.Content aria-label="Table with resizable columns" className="min-w-1/2">
            <Table.Header>
              <Table.Column isRowHeader defaultWidth="1fr" id="email" minWidth={160}>
                Email
                <Table.ColumnResizer />
              </Table.Column>
              <Table.Column defaultWidth="1fr" id="ticketTitle" minWidth={220}>
                Title
                <Table.ColumnResizer />
              </Table.Column>
              <Table.Column defaultWidth="1fr" id="bookingQuantity" minWidth={220}>
                Quantity
                <Table.ColumnResizer />
              </Table.Column>
              <Table.Column defaultWidth="1fr" id="totalPrice" minWidth={220}>
                Total Price
                <Table.ColumnResizer />
              </Table.Column>


              <Table.Column defaultWidth="1fr" id="actions" minWidth={200}>
                Actions
              </Table.Column>
            </Table.Header>
            {requestBook.map(ticket => {
              return <Table.Body key={ticket._id}>
                <Table.Row>
                  <Table.Cell>{ticket.userEmail}</Table.Cell>
                  <Table.Cell>{ticket.title}</Table.Cell>
                  <Table.Cell>
                    {ticket.quantity}
                  </Table.Cell>
                  <Table.Cell>{ticket.totalPrice} TK</Table.Cell>

                  <Table.Cell>
                    {

                      <div className="flex items-center gap-1">
                        <Button onPress={() => {
                          handleBookingUpdate(ticket?._id, 'accepted')
                        }} className='
                          text-[16px]' variant='primary'
                          size="sm">
                          Accept
                        </Button>
                        <Button onPress={() => {
                          handleBookingUpdate(ticket?._id, 'rejected')
                        }} className='
                          text-[16px]' size="sm" variant="danger">
                          Reject                      </Button>
                      </div>
                    }
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            })

            }
          </Table.Content>
        </Table.ResizableContainer>
      </Table >
    </section>

  );
};

export default BookingTable;