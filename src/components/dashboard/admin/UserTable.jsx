'use client';

import React from 'react';
import { Button, Chip, Table } from '@heroui/react';
import { updateUserById } from '@/lib/actions/api/users';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const UserTable = ({ users }) => {
  const router = useRouter();
  const handleRoleUpdate = async (userId, role, userName) => {
    try {
      const result = await updateUserById(userId,
        { role });
      if (result.modifiedCount > 0) {
        toast.success(`This "${userName}" Role Changed To ${role}`);
        router.refresh();
      } else {
        toast.error('Something went wrong')
        router.refresh();
      }

    } catch (err) {
      toast.error(err.message);
    }
  }
  const handleStatusUpdate = async (userId, status, userName) => {
    try {
      const result = await updateUserById(userId,
        { status });
      if (result.modifiedCount > 0) {
        toast.success(`This ${userName} marked as FRAUD`);
        router.refresh();
      } else {
        toast.error('Something went wrong')
        router.refresh();
      }

    } catch (err) {
      toast.error(err.message);
    }
  }
  return (
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

            <Table.Column defaultWidth="1fr" id="actions" minWidth={200}>
              Change Role
            </Table.Column>
          </Table.Header>
          {users.map(user => {
            return <Table.Body key={user._id}>
              <Table.Row>
                <Table.Cell>{user.name}</Table.Cell>
                <Table.Cell>{user.role}</Table.Cell>
                <Table.Cell>
                  <Chip color={`${user.emailVerified === false ? "danger" : "success"}`} size="sm" variant="soft">
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
                  {
                    user.role === 'user' ?
                      <div className="flex items-center gap-1">
                        <Button onPress={() => {
                          handleRoleUpdate(user?._id, 'admin', user?.name)
                        }} className='
                      text-[16px]' variant='secondary' size="sm">
                          Admin
                        </Button>
                        <Button onPress={() => {
                          handleRoleUpdate(user?._id, 'vendor', user?.name)
                        }} className='
                      text-[16px]' size="sm" variant="secondary">
                          Vendor
                        </Button>
                      </div> : user?.status === 'blocked' ? <div className='text-center font-semibold text-red-600 rounded-2xl'>Marked as fraud</div> : < div className="flex items-center gap-1">
                        <Button onPress={() => {
                          handleStatusUpdate(user?._id, 'blocked', user?.name)
                        }} className='
                      text-[16px]' size="sm" variant="danger-soft">
                          Fraud
                        </Button>
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
  );
};

export default UserTable;