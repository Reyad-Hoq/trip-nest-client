export const dynamic = "force-dynamic";

import { getUsers } from '@/lib/actions/api/users';
import { Check, Xmark } from '@gravity-ui/icons';
import { Button, Chip, Table } from '@heroui/react';
import React from 'react';

const page = async () => {
  const users = await getUsers();
  console.log(users)
  return (
    <section className="py-10">
      <Table>
        <Table.ResizableContainer>
          <Table.Content aria-label="Table with resizable columns" className="min-w-1/2">
            <Table.Header>
              <Table.Column isRowHeader defaultWidth="1fr" id="name" minWidth={160}>
                Name
                <Table.ColumnResizer />
              </Table.Column>
              <Table.Column defaultWidth="1fr" id="role" minWidth={220}>
                Role
                <Table.ColumnResizer />
              </Table.Column>
              <Table.Column defaultWidth="1fr" id="verification" minWidth={220}>
                Email Verification
                <Table.ColumnResizer />
              </Table.Column>
              <Table.Column defaultWidth="1fr" id="email" minWidth={220}>
                Email
                <Table.ColumnResizer />
              </Table.Column>
              <Table.Column defaultWidth="1fr" id="created" minWidth={220}>
                Created
                <Table.ColumnResizer />
              </Table.Column>
              <Table.Column defaultWidth="1fr" id="updated" minWidth={200}>
                Updated
              </Table.Column>
              <Table.Column defaultWidth="1fr" id="actions" minWidth={200}>
                Actions
              </Table.Column>
            </Table.Header>
            {users.map(user => {
              return <Table.Body key={user._id}>
                <Table.Row>
                  <Table.Cell>{user.name}</Table.Cell>
                  <Table.Cell>{user.role}</Table.Cell>
                  <Table.Cell>
                    <Chip color={`${user.emailVerified === false ? "danger" : "success"}`} size="sm" variant="primary">
                      {user.emailVerified ? "Verified" : "Not Verified"}
                    </Chip>
                  </Table.Cell>
                  <Table.Cell>{user.email}</Table.Cell>
                  <Table.Cell>
                    {new Date(user.createdAt).toLocaleString([], {
                      dateStyle: 'medium', // e.g., Jul 23, 2026
                      timeStyle: 'short'   // e.g., 2:30 PM
                    })}
                  </Table.Cell>
                  <Table.Cell>
                    {new Date(user.updatedAt).toLocaleString([], {
                      dateStyle: 'medium', // e.g., Jul 23, 2026
                      timeStyle: 'short'   // e.g., 2:30 PM
                    })}
                  </Table.Cell>
                  <Table.Cell>
                    <div className="flex items-center gap-3">
                      <Button isIconOnly size="sm" className="bg-green-400 hover:bg-green-400/50 hover:scale-105 transition-all  ease-in-out duration-150">
                        <Check className="size-4 text-green-700 hover:text-green-700/70 transition-all delay-150 duration-300 ease-in-out" />
                      </Button>
                      <Button isIconOnly size="sm" variant="danger">
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
      </Table>
    </section>
  );
};

export default page;