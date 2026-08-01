"use client";

import Image from "next/image";

import {
  Card,
  Button,
  Chip,
} from "@heroui/react";

import {
  Person,
  Envelope,
  Shield,
  Calendar,
  Pencil,
} from "@gravity-ui/icons";
import Info from "./Info";
const UserProfile = ({ user }) => {
  return (
    <section className="w-10/12 mx-auto space-y-8 my-2">

      {/* Heading */}

      <div>
        <h1 className="text-3xl font-bold text-[#1A1D7E]">
          My Profile
        </h1>

        <p className="mt-2 text-default-500">
          View and manage your Tripnest account information.
        </p>
      </div>

      <Card className="overflow-hidden border border-default-200 shadow-md">

        <Card.Content className="p-8">

          {/* Avatar */}

          <div className="flex flex-col items-center gap-5 md:flex-row">

            <Image
              src={user?.image || "/boy.png"}
              alt={user?.name}
              width={120}
              height={120}
              className="rounded-full border-4 border-white bg-white object-cover shadow-lg"
            />

            <div className="flex-1">

              <h2 className="text-3xl font-bold text-blue-900">
                {user?.name}
              </h2>

              <p className="mt-1 text-default-500">
                {user?.email}
              </p>

              <div className="mt-4 flex flex-wrap gap-3">

                <Chip color="accent" variant="soft">
                  {user?.role?.toUpperCase()}
                </Chip>

                <Chip color={user.emailVerified ? "success" : "danger"} variant="primary">
                  {user.emailVerified ? "Verified" : "Not Verified"}
                </Chip>

              </div>

            </div>

            <Button
              color="primary"
              startContent={<Pencil />}
            >
              Edit Profile
            </Button>

          </div>

          {/* Information */}

          <div className="mt-10 grid gap-5 md:grid-cols-2">

            <Card className="border border-default-200">

              <Card.Header>
                <Card.Title>
                  Personal Information
                </Card.Title>
              </Card.Header>

              <Card.Content className="space-y-5">

                <Info
                  icon={<Person />}
                  label="Full Name"
                  value={user?.name}
                />

                <Info
                  icon={<Envelope />}
                  label="Email Address"
                  value={user?.email}
                />

                <Info
                  icon={<Shield />}
                  label="Role"
                  value={user?.role}
                />

                <Info
                  icon={<Calendar />}
                  label="Joined"
                  value={
                    new Date(user?.createdAt).toLocaleDateString()
                  }
                />

              </Card.Content>

            </Card>

            <Card className="border border-default-200">

              <Card.Header>
                <Card.Title>
                  Account Status
                </Card.Title>
              </Card.Header>

              <Card.Content>

                <div className="rounded-2xl bg-success-50 p-6">

                  <h3 className="font-semibold text-success">
                    Account Active
                  </h3>

                  <p className="mt-2 text-sm text-default-600">
                    Your Tripnest account is active and ready for booking
                    tickets.
                  </p>

                </div>

              </Card.Content>

            </Card>

          </div>

        </Card.Content>

      </Card>

    </section>
  );
};

export default UserProfile;