"use client";

import { useMemo } from "react";
import { Button } from "@heroui/react";
import {
  Calendar,
  Clock,
  Ticket,
  Person,
  ArrowRight,
} from "@gravity-ui/icons";

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
    <aside className="lg:sticky lg:top-24 h-fit">

      <div className="overflow-hidden rounded-3xl bg-white shadow-xl">

        {/* Header */}

        <div className="bg-gradient-to-r from-[#1A1D7E] via-[#0D2284] to-[#183F98] p-6 text-white">

          <p className="text-sm opacity-80">
            Price
          </p>

          <h2 className="mt-1 text-4xl font-extrabold">
            ৳ {ticket.price}
          </h2>

          <p className="text-sm opacity-80">
            per ticket
          </p>

        </div>

        {/* Content */}

        <div className="space-y-5 p-6">

          {/* Seats */}

          <div className="flex items-center justify-between rounded-xl bg-slate-100 p-4">

            <div className="flex items-center gap-2">

              <Ticket className="text-[#1A1D7E]" />

              <span>
                Available Seats
              </span>

            </div>

            <span className="font-bold text-[#1A1D7E]">
              {ticket.availableSeats}
            </span>

          </div>

          {/* Seat Type */}

          <div className="flex items-center justify-between rounded-xl border p-4">

            <div className="flex items-center gap-2">

              <Person className="text-[#1A1D7E]" />

              Seat Type

            </div>

            <span className="font-semibold">
              {ticket.seatType}
            </span>

          </div>

          {/* Departure */}

          <div className="flex items-center justify-between rounded-xl border p-4">

            <div className="flex items-center gap-2">

              <Calendar className="text-[#1A1D7E]" />

              Departure

            </div>

            <span className="text-sm font-medium">
              {new Date(ticket.departure).toLocaleDateString()}
            </span>

          </div>

          {/* Duration */}

          <div className="flex items-center justify-between rounded-xl border p-4">

            <div className="flex items-center gap-2">

              <Clock className="text-[#1A1D7E]" />

              Duration

            </div>

            <span className="font-semibold">
              {ticket.duration}
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

          {/* Notice */}

          {isExpired && (
            <div className="rounded-xl bg-yellow-50 p-4 text-sm text-yellow-700">
              This ticket can no longer be booked because the departure
              time has already passed.
            </div>
          )}

          {noSeat && (
            <div className="rounded-xl bg-red-50 p-4 text-sm text-red-600">
              No seats are currently available for this ticket.
            </div>
          )}

          {/* Button */}

          <Button
            fullWidth
            size="lg"
            isDisabled={bookingDisabled}
            className="bg-gradient-to-r from-[#1A1D7E] via-[#0D2284] to-[#183F98] font-semibold text-white"
          >
            Book Now

            <ArrowRight className="ml-2" />

          </Button>

          <p className="text-center text-xs text-slate-400">
            Secure booking • Instant confirmation • Safe payment
          </p>

        </div>

      </div>

    </aside>
  );
}