import { FaArrowDown, FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

const routes = [
  {
    from: "Dhaka",
    to: "Cox's Bazar",
    transport: "Bus",
    trips: 120,
  },
  {
    from: "Dhaka",
    to: "Chattogram",
    transport: "Train",
    trips: 95,
  },
  {
    from: "Dhaka",
    to: "Sylhet",
    transport: "Flight",
    trips: 65,
  },
  {
    from: "Dhaka",
    to: "Barisal",
    transport: "Launch",
    trips: 40,
  },
];

export default function PopularRoutes() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-12 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
            Popular Routes
          </span>

          <h2 className="mt-4 text-4xl font-bold text-[#1A1D7E]">
            Travel to Bangladesh&#39;s Favorite Destinations
          </h2>

          <p className="mt-3 text-slate-500">
            Thousands of passengers book these routes every day.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {routes.map((route) => (
            <div
              key={route.to}
              className="rounded-3xl border border-slate-200 text-center bg-white p-6 shadow transition hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="text-xl font-bold text-[#1A1D7E]">
                {route.from}
              </h3>

              <div className="my-3 flex items-center justify-center text-yellow-500">
                <FaArrowDown />
              </div>

              <h3 className="text-xl font-bold text-[#183F98]">
                {route.to}
              </h3>

              <p className="mt-4 text-slate-500">
                {route.transport}
              </p>

              <p className="mt-1 text-sm text-slate-400">
                {route.trips}+ Trips Available
              </p>

              <Link
                href="/tickets"
                className="mt-6 block rounded-xl bg-[#1A1D7E] py-3 text-center font-semibold text-white transition hover:bg-[#183F98]"
              >
                Book Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}