'use client';
import React from 'react';

import {
  Person,
  Ticket,
  CreditCard,
  LayoutSideContentLeft,
  SquarePlus,
  ListUl,
  ChartColumn
} from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import { getSession } from '@/lib/actions/session';
import Link from 'next/link';
import { redirect, usePathname } from 'next/navigation';

const DashboardSidebar = ({ user }) => {
  const pathName = usePathname();
  const isActive = (href) => pathName.startsWith(href);
  const userNavLinks = [
    {
      icon: Person,
      label: "Profile",
      href: "/dashboard/user/profile",
    },
    {
      icon: Ticket,
      label: "My Tickets",
      href: "/dashboard/user/bookings",
    },
    {
      icon: CreditCard,
      label: "Transactions",
      href: "/dashboard/user/transactions",
    },
  ];
  const vendorNavLinks = [
    {
      icon: Person,
      label: "Vendor Profile",
      href: "/dashboard/vendor/profile",
    },
    {
      icon: SquarePlus,
      label: "Add Ticket",
      href: "/dashboard/vendor/add-ticket",
    },
    {
      icon: Ticket,
      label: "My Added Tickets",
      href: "/dashboard/vendor/my-tickets",
    },
    {
      icon: ListUl,
      label: "Requested Bookings",
      href: "/dashboard/vendor/bookings",
    },
    {
      icon: ChartColumn,
      label: "Revenue Overview",
      href: "/dashboard/vendor/revenue",
    },
  ];
  const navLinksMap = {
    user: userNavLinks,
    vendor: vendorNavLinks,
  }
  if (!user) {
    redirect("/auth/signin");
  }
  const navItems = navLinksMap[user?.role];
  const navContent = <nav className="flex flex-col gap-1">
    {navItems.map((item) => (
      <Link
        key={item.label}
        href={item.href}
        className={`flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all ${isActive(item.href)
          ? "bg-blue-800 text-white"
          : "text-foreground hover:bg-default"
          }`}
        type="button"
      >
        <item.icon className={`size-5 text-muted  ${isActive(item.href)
          ? " text-white"
          : "text-foreground hover:bg-default"
          }  `} />
        {item.label}
      </Link>
    ))}
  </nav>
  return (
    <div className='py-2 px-1'>
      <aside className='hidden lg:block w-64 border-r border-default p-4 shrink-0'>
        {navContent}
      </aside>
      <Drawer>
        <Button className="lg:hidden bg-blue-800 text-white " variant="secondary">
          <LayoutSideContentLeft />
          Dashboard
        </Button>
        <Drawer.Backdrop>
          <Drawer.Content placement="left">
            <Drawer.Dialog>
              <Drawer.CloseTrigger />
              <Drawer.Header>
                <Drawer.Heading>Dashboard</Drawer.Heading>
              </Drawer.Header>
              <Drawer.Body>
                {navContent}
              </Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </div>
  );
};

export default DashboardSidebar;