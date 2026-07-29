'use client';
import { Check, Xmark } from '@gravity-ui/icons';
import { Button, Chip, Table } from '@heroui/react';
import React from 'react';

const AdvertiseTable = ({ tickets }) => {
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
                Status
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
                    <Chip color={`${ticket.status === "pending" ? "danger" : "success"}`} size="sm" variant="primary">
                      {ticket.status}
                    </Chip>
                  </Table.Cell>
                  <Table.Cell>{ticket.vendorEmail}</Table.Cell>
                  <Table.Cell>
                    <div className="flex items-center gap-3">
                      <Button isIconOnly
                        onPress={() => {
                          handleUpdate(ticket._id, 'available')
                        }
                        }
                        size="sm" className="bg-green-400 hover:bg-green-400/50 hover:scale-105 transition-all  ease-in-out duration-150">
                        <Check className="size-4 text-green-700 hover:text-green-700/70 transition-all delay-150 duration-300 ease-in-out" />
                      </Button>
                      <Button isIconOnly
                        onPress={() => {
                          handleUpdate(ticket._id, 'unavailable'
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