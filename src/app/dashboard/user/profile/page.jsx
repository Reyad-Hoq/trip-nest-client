'use client'
import UserProfile from '@/components/dashboard/user/UserProfile';
import { authClient } from '@/lib/auth-client';
import { Card } from '@heroui/react';
import React from 'react';

const UserProfilePage = () => {

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  return (
    <>
      {
        isPending ? (<div>Loading.... </div>) : (<UserProfile user={user} />)
      }
    </>
  );
};

export default UserProfilePage;