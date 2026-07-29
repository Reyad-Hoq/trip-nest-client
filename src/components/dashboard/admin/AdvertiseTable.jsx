'use client';
import { updateTicketById } from '@/lib/actions/api/ticket';
import { Check, Xmark } from '@gravity-ui/icons';
import { Button, Chip, Table } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

const AdvertiseTable = ({ tickets }) => {
  const router = useRouter()
  const handleUpdate = async (ticketId, featured) => {
    try {
      const result = await updateTicketById(ticketId,
        { featured });
      if (result.modifiedCount > 0 && featured === true) {
        toast.success('Ticket is featured');
        router.refresh();
      } else {
        toast.error('Ticket is removed from featured')
        router.refresh();
      }
      console.log(result)

    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <div>
      <Table>
        <Table.ResizableContainer>
          <Table.Content aria-label="Table with resizable columns" className="min-w-1/2">
            <Table.Header>
              <Table.Column isRowHeader defaultWidth="1fr" id="from" minWidth={160}>
                From
                <Table.ColumnResizer />
              </Table.Column>
              <Table.Column defaultWidth="1fr" id="to" minWidth={220}>
                To
                <Table.ColumnResizer />
              </Table.Column>
              <Table.Column defaultWidth="1fr" id="departure" minWidth={220}>
                Departure
                <Table.ColumnResizer />
              </Table.Column>
              <Table.Column defaultWidth="1fr" id="arrival" minWidth={220}>
                Arrival
                <Table.ColumnResizer />
              </Table.Column>
              <Table.Column defaultWidth="1fr" id="operator" minWidth={220}>
                Operator
                <Table.ColumnResizer />
              </Table.Column>
              <Table.Column defaultWidth="1fr" id="status" minWidth={100}>
                Featured
                <Table.ColumnResizer />
              </Table.Column>
              <Table.Column defaultWidth="1fr" id="email" minWidth={200}>
                Email
              </Table.Column>
              <Table.Column defaultWidth="1fr" id="actions" minWidth={200}>
                Advertise
              </Table.Column>
            </Table.Header>
            {tickets.map(ticket => {
              return <Table.Body key={ticket._id}>
                <Table.Row>
                  <Table.Cell>{ticket.from}</Table.Cell>
                  <Table.Cell>{ticket.to}</Table.Cell>
                  <Table.Cell>
                    {new Date(ticket.departure).toLocaleString([], {
                      dateStyle: 'medium', // e.g., Jul 23, 2026
                      timeStyle: 'short'   // e.g., 2:30 PM
                    })}
                  </Table.Cell>
                  <Table.Cell>
                    {new Date(ticket.arrival).toLocaleString([], {
                      dateStyle: 'medium', // e.g., Jul 23, 2026
                      timeStyle: 'short'   // e.g., 2:30 PM
                    })}
                  </Table.Cell>
                  <Table.Cell>{ticket.operator}</Table.Cell>
                  <Table.Cell>
                    <Chip color={`${!ticket.featured ? "danger" : "success"}`} size="sm" variant="soft">
                      {ticket.featured ? "Yes" : "No"}
                    </Chip>
                  </Table.Cell>
                  <Table.Cell>{ticket.vendorEmail}</Table.Cell>
                  <Table.Cell>
                    <div className="flex items-center gap-3">
                      <Button isIconOnly
                        onPress={() => {
                          handleUpdate(ticket._id, true)
                        }
                        }
                        size="sm" className="bg-green-400 hover:bg-green-400/50 hover:scale-105 transition-all  ease-in-out duration-150">
                        <Check className="size-4 text-green-700 hover:text-green-700/70 transition-all delay-150 duration-300 ease-in-out" />
                      </Button>
                      <Button isIconOnly
                        onPress={() => {
                          handleUpdate(ticket._id, false
                          )
                        }}
                        size="sm" variant="danger">
                        <Xmark className="size-4" />
                      </Button>
                    </div>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            })
            }
          </Table.Content>
        </Table.ResizableContainer>
      </Table >
    </div>
  );
};

export default AdvertiseTable;