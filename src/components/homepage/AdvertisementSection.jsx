
import { getTickets } from "@/lib/actions/tickets";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaBus, FaTrain, FaPlane, FaShip } from "react-icons/fa6";

const transportIcon = {
  Bus: <FaBus className="text-blue-600" />,
  Train: <FaTrain className="text-green-600" />,
  Flight: <FaPlane className="text-sky-600" />,
  Launch: <FaShip className="text-indigo-600" />,
};

export default async function AdvertisementSection() {
  const tickets = await getTickets();
  return (
    <section className="py-20 bg-slate-50">
      <div className="mx-auto max-w-5xl px-5">

        {/* Heading */}

        <div className="mb-12 text-center">

          <span className="rounded-full bg-yellow-100 px-4 py-1 text-sm font-semibold text-yellow-700">
            Featured Tickets
          </span>

          <h2 className="mt-4 text-4xl font-extrabold text-[#1A1D7E]">
            Recommended Tickets
          </h2>

          <p className="mt-3 text-slate-500">
            Explore our hand-picked tickets with the best deals.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {tickets.slice(0, 6).map((ticket) => (

            <div
              key={ticket.id}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* Image */}

              <div className="relative h-56 overflow-hidden">

                <Image
                  src={ticket.image}
                  alt={ticket.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                <span className="absolute left-4 top-4 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-[#1A1D7E]">
                  Featured
                </span>

              </div>

              {/* Content */}

              <div className="space-y-4 p-6">

                <h3 className="text-xl font-bold text-[#1A1D7E]">
                  {ticket.title}
                </h3>

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-xs uppercase tracking-wider text-slate-400">
                      Price
                    </p>

                    <p className="text-2xl font-bold text-blue-700">
                      ৳ {ticket.price}
                    </p>

                  </div>

                  <div className="text-right">

                    <p className="text-xs uppercase tracking-wider text-slate-400">
                      Seats
                    </p>

                    <p className="font-semibold text-slate-700">
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

                {/* Button */}

                <Link
                  href={`/tickets/${ticket.id}`}
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#1A1D7E] via-[#0D2284] to-[#183F98] px-5 py-3 font-semibold text-white transition hover:opacity-90"
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