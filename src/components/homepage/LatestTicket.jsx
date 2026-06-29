
import { getTickets } from "@/lib/actions/tickets";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaBus,
  FaTrain,
  FaPlane,
  FaShip,
} from "react-icons/fa6";

const transportIcon = {
  Bus: <FaBus className="text-blue-600" />,
  Train: <FaTrain className="text-green-600" />,
  Flight: <FaPlane className="text-sky-600" />,
  Launch: <FaShip className="text-indigo-600" />,
};

export default async function LatestTickets() {
  const tickets = await getTickets();
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5">

        {/* Heading */}

        <div className="mb-12 flex flex-col items-center justify-between gap-5 md:flex-row">

          <div>

            <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
              Latest Tickets
            </span>

            <h2 className="mt-4 text-4xl font-extrabold text-[#1A1D7E]">
              Recently Added Tickets
            </h2>

            <p className="mt-2 text-slate-500">
              Browse the newest tickets added by verified vendors.
            </p>

          </div>

          <Link
            href="/tickets"
            className="flex items-center gap-2 rounded-xl border border-[#1A1D7E] px-5 py-3 font-semibold text-[#1A1D7E] transition hover:bg-[#1A1D7E] hover:text-white no-underline"
          >
            View All
            <FaArrowRight />
          </Link>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {tickets.slice(0, 8).map((ticket) => (

            <div
              key={ticket.id}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              {/* Image */}

              <div className="relative h-52 overflow-hidden">

                <Image
                  src={ticket.image}
                  alt={ticket.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                <span className="absolute left-4 top-4 rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white">
                  New
                </span>

              </div>

              {/* Content */}

              <div className="space-y-4 p-5">

                <h3 className="line-clamp-2 text-lg font-bold text-[#1A1D7E]">
                  {ticket.title}
                </h3>

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-xs text-slate-400">
                      Price
                    </p>

                    <p className="text-xl font-bold text-blue-700">
                      ৳ {ticket.price}
                    </p>

                  </div>

                  <div className="text-right">

                    <p className="text-xs text-slate-400">
                      Seats
                    </p>

                    <p className="font-semibold">
                      {ticket.availableSeats}
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-3">

                  {transportIcon[ticket.transport]}

                  <span className="font-medium">
                    {ticket.transport}
                  </span>

                </div>

                {/* Perks */}

                <div className="flex flex-wrap gap-2">

                  {ticket.perks.map((perk) => (

                    <span
                      key={perk}
                      className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
                    >
                      {perk}
                    </span>

                  ))}

                </div>

                <Link
                  href={`/tickets/${ticket.id}`}
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#1A1D7E] via-[#0D2284] to-[#183F98] px-5 py-3 font-semibold text-white transition hover:opacity-90 no-underline"
                >
                  See Details
                  <FaArrowRight />
                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}