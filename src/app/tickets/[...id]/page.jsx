import Image from "next/image";
import {
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Ticket,
  Person,
} from "@gravity-ui/icons";

import Countdown from "@/components/tickets/Countdown";
import BookingCard from "@/components/tickets/BookingCard";
import { getTicketById } from "@/lib/actions/api/ticket";


export default async function TicketDetailsPage({ params }) {
  const { id } = await params;

  const ticket = await getTicketById(id);

  if (!ticket) {
    return (
      <div className="py-32 text-center">
        <h2 className="text-3xl font-bold text-red-600">
          Ticket Not Found
        </h2>
      </div>
    );
  }

  return (
    <section className="bg-slate-50 py-10">

      <div className="mx-auto grid max-w-5xl gap-10 px-5 lg:grid-cols-3">

        {/* LEFT */}

        <div className="space-y-8 lg:col-span-2">

          {/* Image */}

          <div className="overflow-hidden rounded-3xl bg-white shadow-lg">

            <div className="relative h-[420px]">

              <Image
                src={ticket.image}
                alt={ticket.title}
                fill
                className="object-cover"
              />

            </div>

          </div>

          {/* Ticket Details */}

          <div className="rounded-3xl bg-white p-8 shadow-lg">

            <span className="rounded-full bg-yellow-100 px-4 py-1 text-sm font-semibold text-yellow-700">
              {ticket.transport}
            </span>

            <h1 className="mt-4 text-4xl font-extrabold text-[#1A1D7E]">
              {ticket.title}
            </h1>

            <div className="mt-8 grid gap-5 md:grid-cols-2">

              {/* Route */}

              <div className="rounded-2xl border p-5">

                <div className="mb-4 flex items-center gap-2">

                  <MapPin className="text-[#1A1D7E]" />

                  <h3 className="font-bold">
                    Route
                  </h3>

                </div>

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm text-slate-400">
                      From
                    </p>

                    <p className="font-semibold">
                      {ticket.from}
                    </p>

                  </div>

                  <ArrowRight className="text-blue-700" />

                  <div>

                    <p className="text-sm text-slate-400">
                      To
                    </p>

                    <p className="font-semibold">
                      {ticket.to}
                    </p>

                  </div>

                </div>

              </div>

              {/* Operator */}

              <div className="rounded-2xl border p-5">

                <div className="mb-4 flex items-center gap-2">

                  <Person className="text-[#1A1D7E]" />

                  <h3 className="font-bold">
                    Operator
                  </h3>

                </div>

                <p className="text-lg font-semibold">
                  {ticket.operator}
                </p>

              </div>

              {/* Departure */}

              <div className="rounded-2xl border p-5">

                <div className="mb-4 flex items-center gap-2">

                  <Calendar className="text-[#1A1D7E]" />

                  <h3 className="font-bold">
                    Departure
                  </h3>

                </div>

                <p>
                  {new Date(ticket.departure).toLocaleString()}
                </p>

              </div>

              {/* Duration */}

              <div className="rounded-2xl border p-5">

                <div className="mb-4 flex items-center gap-2">

                  <Clock className="text-[#1A1D7E]" />

                  <h3 className="font-bold">
                    Duration
                  </h3>

                </div>

                <p>
                  {ticket.duration ? ticket.duration : "N/A"}
                </p>

              </div>

            </div>

          </div>

          {/* Perks */}

          <div className="rounded-3xl bg-white p-8 shadow-lg">

            <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-[#1A1D7E]">

              <Ticket />

              Included Perks

            </h2>

            <div className="flex flex-wrap gap-3">

              {ticket.perks.map((perk) => (

                <span
                  key={perk}
                  className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
                >
                  {perk}
                </span>

              ))}

            </div>

          </div>

          {/* Countdown */}

          <div className="rounded-3xl bg-gradient-to-r from-[#1A1D7E] via-[#0D2284] to-[#183F98] p-8 text-white shadow-xl">

            <h2 className="mb-5 text-2xl font-bold">

              Departure Countdown

            </h2>

            <Countdown departure={ticket.departure} />

          </div>

        </div>

        {/* RIGHT SIDEBAR */}

        <BookingCard ticket={ticket} />

      </div>

    </section>
  );
}