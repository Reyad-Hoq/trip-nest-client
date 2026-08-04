"use client";

import { authHeader } from '@/lib/actions/server';
import { CreditCard } from '@gravity-ui/icons';
import { Button, Card } from '@heroui/react';
import React from 'react';

const PayButton = ({ bookingId }) => {
  const handlePayment = async (bookingId) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/payments/create-checkout-session`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ... await authHeader(),
        },
        body: JSON.stringify({
          bookingId,
        }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      console.error(data);
      return;
    }
    window.open(data.url, "_self");
  }
  return (
    <div >
      <Button
        className="flex gap-3 bg-[#1A1D7E] text-white hover:bg-[#1A1D7E]/90 focus:ring-[#1A1D7E]/50 w-full rounded-xl py-6 text-sm font-medium focus:outline-none focus:ring-4"
        onClick={() => handlePayment(bookingId)}
      >
        <CreditCard className="h-5 w-5" />
        Pay Now
      </Button>
    </div>
  );
};

export default PayButton;