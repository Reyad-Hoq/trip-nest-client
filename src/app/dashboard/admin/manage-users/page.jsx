
import UserTable from '@/components/dashboard/admin/UserTable';
import { getUsers } from '@/lib/actions/api/users';

import React from 'react';

const ManageUserPage = async () => {
  const users = await getUsers();
  return (
    <section className="py-10">
      <UserTable users={users} />
    </section>
  );
};

export default ManageUserPage;