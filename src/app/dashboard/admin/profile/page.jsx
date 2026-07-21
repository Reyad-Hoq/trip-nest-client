"use client";
import React from 'react';
import {
  Avatar,
  Card,
} from "@heroui/react";

import {
  Envelope,
  Person,
  PersonPencil,
} from "@gravity-ui/icons";

import Info from '@/components/dashboard/vendor/VendorInfo';
import { useSession } from '@/lib/auth-client';
import { getAvatarColor } from '@/lib/actions/UserProfile/avatarColor';
import { getUserProfilePhoto } from '@/lib/actions/UserProfile/userAvatar';

const AdminProfilePage = () => {
  const { data: session, isPending } = useSession();
  const admin = session?.user;
  return (
    <Card className="overflow-hidden border border-slate-200 shadow-lg">

      {/* Cover */}

      <div className="h-32 bg-gradient-to-r from-[#1A1D7E] via-[#0D2284] to-[#183F98]" />

      <Card.Content className="-mt-16 flex flex-col items-center px-8 pb-8">

        {admin?.image ? <Avatar
          src={admin?.image}
          className={`h-28 w-28 border-4 border-white shadow-xl`}
        /> : <div className={`h-28 w-28 border-4 border-white shadow-xl flex items-center justify-center text-white text-3xl ${getAvatarColor(admin?.name)}`}>
          {
            getUserProfilePhoto(admin?.name)
          }
        </div>
        }
        <h2 className="mt-4 text-3xl font-bold text-slate-800">
          {admin?.name}
        </h2>
        <div className="mt-8 w-full space-y-5">

          <Info
            icon={<Person />}
            label="admin Name"
            value={admin?.name}
          />

          <Info
            icon={<Envelope />}
            label="Email Address"
            value={admin?.email}
          />

          <Info
            icon={<PersonPencil />}
            label="Role"
            value={admin?.role}
          />

        </div>

      </Card.Content>

    </Card>
  );
};

export default AdminProfilePage;






