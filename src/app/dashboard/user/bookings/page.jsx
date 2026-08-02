export const dynamic = 'force-dynamic';

import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  CreditCard,
  Ticket,
} from "@gravity-ui/icons";
import { getBookings } from "@/lib/actions/api/bookings";
import { getSession } from "@/lib/actions/session";
import Countdown from "@/components/tickets/Countdown";

const statusColor = {
  pending: "bg-yellow-100 text-yellow-700",
  accepted: "bg-green-100 text-green-700",
  rejected: "bg-red-100 text-red-700",
  paid: "bg-blue-100 text-blue-700",
};

export default async function MyBookedTickets() {
  const user = await getSession();

  if (!user) {
    return <p>Loading...</p>;
  }

  const userId = user?.id;
  const bookings = await getBookings(userId);

  return (
    <section className="w-11/12 mx-auto space-y-8 my-8">

      <div>
        <h1 className="text-3xl font-bold text-[#1A1D7E]">
          My Booked Tickets
        </h1>

        <p className="mt-2 text-default-500">
          View all your booked tickets and complete payment when approved.
        </p>
      </div>

      {bookings.length === 0 ? (
        <div className="rounded-3xl border bg-white p-12 text-center shadow">
          <Ticket className="mx-auto mb-4 h-10 w-10 text-default-400" />
          <h2 className="text-xl font-semibold">
            No Bookings Found
          </h2>

          <p className="mt-2 text-default-500">
            Book your first ticket to start your journey.
          </p>

          <Link
            href="/tickets"
            className="mt-6 inline-flex rounded-xl bg-[#1A1D7E] px-5 py-3 font-medium text-white"
          >
            Browse Tickets
          </Link>
        </div>
      ) : (
        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-">

          {bookings.map((booking) => {

            const departure = new Date(booking.departure);

            const expired = departure <= new Date();

            return (
              <div
                key={booking._id}
                className="overflow-hidden rounded-3xl border bg-white shadow transition hover:-translate-y-1 hover:shadow-xl"
              >

                {/* Image */}

                <div className="relative h-52">

                  <Image
                    src={booking.image || '/placeholder.svg'}
                    alt={booking.title}
                    fill
                    className="object-cover"
                  />

                </div>

                <div className="space-y-4 p-5">

                  {/* Title */}

                  <h2 className="text-xl font-bold text-[#1A1D7E]">
                    {booking.title}
                  </h2>

                  {/* Route */}

                  <div className="flex items-center justify-between text-sm">

                    <span className="font-bold">{booking.from}</span>

                    to

                    <span className="font-bold">{booking.to}</span>

                  </div>

                  {/* Quantity */}

                  <div className="flex justify-between rounded-xl bg-slate-100 p-3">

                    <span>Booked Quantity</span>

                    <span className="font-semibold">
                      {booking.quantity}
                    </span>

                  </div>

                  {/* Price */}

                  <div className="flex justify-between rounded-xl bg-slate-100 p-3">

                    <span>Total Price</span>

                    <span className="font-bold text-[#1A1D7E]">
                      ৳ {booking.totalPrice}
                    </span>

                  </div>

                  {/* Departure */}

                  <div className="flex items-center gap-2 text-sm text-red-500">

                    <Calendar />

                    {new Date(
                      booking.departure
                    ).toLocaleString()}

                  </div>

                  {/* Countdown */}

                  {booking.status !== "Rejected" && !expired && (
                    <div className="rounded-xl bg-blue-50 p-3">

                      <div className="flex items-center gap-2 font-medium text-blue-700">

                        <Clock className="w-16 h-16" />
                        <span> <Countdown departure={booking.departure} />
                        </span>

                      </div>

                    </div>
                  )}

                  {/* Status */}

                  <div
                    className={`rounded-xl py-3 text-center font-semibold ${statusColor[booking.status]}`}
                  >
                    {(booking.status).charAt(0).toUpperCase() + (booking.status).slice(1)}
                  </div>

                  {/* Buttons */}

                  {booking.status === "accepted" && !expired && (
                    <Link
                      href={`/payment/${booking._id}`}
                      className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#1A1D7E] via-[#0D2284] to-[#183F98] px-5 py-3 font-semibold text-white"
                    >
                      <CreditCard className='w-4 h-4' />
                      Pay Now
                    </Link>
                  )}

                  {booking.status === "Paid" && (
                    <div className="rounded-xl bg-green-100 py-3 text-center font-semibold text-green-700">
                      Payment Completed
                    </div>
                  )}

                  {expired && (
                    <div className="rounded-xl bg-red-100 py-3 text-center text-sm font-medium text-red-700">
                      Departure Time Passed
                    </div>
                  )}

                </div>

              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}