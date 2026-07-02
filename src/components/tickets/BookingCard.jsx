"use client";
import { useMemo, useState } from "react";
import {
  Button,
} from "@heroui/react";

import {
  Calendar,
  Clock,
  Ticket,
  Person,
  ArrowRight,
} from "@gravity-ui/icons";

import BookingModal from "./BookingModal";

export default function BookingCard({ ticket }) {

  const departureDate = new Date(ticket.departure);
  const now = new Date();

  const isExpired = departureDate <= now;
  const noSeat = ticket.availableSeats <= 0;

  const bookingDisabled = isExpired || noSeat;

  const statusText = useMemo(() => {
    if (isExpired) return "Departure Closed";
    if (noSeat) return "Sold Out";
    return "Available";
  }, [isExpired, noSeat]);

  return (
    <>
      <aside className="sticky top-24 h-fit">

        <div className="overflow-hidden rounded-3xl bg-white shadow-xl">

          {/* Header */}

          <div className="bg-gradient-to-r from-[#1A1D7E] via-[#0D2284] to-[#183F98] p-6 text-white">

            <p className="text-sm opacity-80">
              Price
            </p>

            <h2 className="mt-2 text-4xl font-extrabold">
              ৳ {ticket.price}
            </h2>

            <p className="text-sm opacity-80">
              Per Ticket
            </p>

          </div>

          <div className="space-y-5 p-6">

            {/* Seats */}

            <div className="flex items-center justify-between rounded-xl bg-slate-100 p-4">

              <div className="flex items-center gap-2">

                <Ticket className="text-[#1A1D7E]" />

                Available Seats

              </div>

              <span className="font-bold text-[#1A1D7E]">
                {ticket.availableSeats || "N/A"}
              </span>

            </div>

            {/* Seat */}

            <div className="flex items-center justify-between rounded-xl border p-4">

              <div className="flex items-center gap-2">

                <Person className="text-[#1A1D7E]" />

                Seat Type

              </div>

              <span>{ticket.seatType || "N/A"}</span>

            </div>

            {/* Departure */}

            <div className="flex items-center justify-between rounded-xl border p-4">

              <div className="flex items-center gap-2">

                <Calendar className="text-[#1A1D7E]" />

                Departure

              </div>

              <span>
                {new Date(ticket.departure).toLocaleDateString()}
              </span>

            </div>

            {/* Duration */}

            <div className="flex items-center justify-between rounded-xl border p-4">

              <div className="flex items-center gap-2">

                <Clock className="text-[#1A1D7E]" />

                Duration

              </div>

              <span>
                {ticket.duration ? ticket.duration : "N/A"}
              </span>

            </div>

            {/* Status */}

            <div
              className={`rounded-xl p-4 text-center font-semibold ${bookingDisabled
                ? "bg-red-100 text-red-600"
                : "bg-green-100 text-green-700"
                }`}
            >
              {statusText}
            </div>
            <BookingModal bookingDisabled={bookingDisabled} ticket={ticket} />
            <p className="text-center text-xs text-slate-400">
              Secure booking • Instant confirmation
            </p>
          </div>
        </div>
      </aside>

    </>
  );
}