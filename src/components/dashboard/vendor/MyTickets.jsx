import Image from "next/image";
import Link from "next/link";
import {
  FaBus,
  FaTrain,
  FaPlane,
  FaShip,
  FaPen,
  FaTrash,
} from "react-icons/fa6";

const transportIcon = {
  Bus: <FaBus className="text-blue-600" />,
  Train: <FaTrain className="text-green-600" />,
  Flight: <FaPlane className="text-sky-600" />,
  Launch: <FaShip className="text-indigo-600" />,
};

export default function AddedTickets({ tickets }) {
  if (!tickets.length) {
    return (
      <div className="rounded-3xl border border-dashed py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-700">
          No Tickets Added
        </h2>

        <p className="mt-2 text-slate-500">
          You haven't added any tickets yet.
        </p>

        <Link
          href="/dashboard/vendor/add-ticket"
          className="mt-6 inline-flex rounded-xl bg-[#1A1D7E] px-6 py-3 text-white"
        >
          Add Ticket
        </Link>
      </div>
    );
  }

  return (
    <div>

      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#1A1D7E]">
            Added Tickets
          </h1>

          <p className="text-slate-500">
            Manage all tickets you've created.
          </p>
        </div>

        <Link
          href="/dashboard/vendor/add-ticket"
          className="rounded-xl bg-[#1A1D7E] px-5 py-3 font-semibold text-white"
        >
          + Add Ticket
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">

        {tickets.map((ticket) => (

          <div
            key={ticket._id}
            className="overflow-hidden rounded-3xl bg-white shadow-lg"
          >

            <div className="relative h-52">
              <Image
                src={ticket.image}
                alt={ticket.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4 p-5">

              <div className="flex items-center justify-between">

                <h2 className="text-xl font-bold">
                  {ticket.title}
                </h2>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${ticket.status === "available"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-600"
                    }`}
                >
                  {ticket.status}
                </span>

              </div>

              <div className="flex items-center gap-2">
                {transportIcon[ticket.transport]}
                <span>{ticket.transport}</span>
              </div>

              <div className="space-y-1 text-sm text-slate-600">

                <p>
                  <strong>Route:</strong> {ticket.from} → {ticket.to}
                </p>

                <p>
                  <strong>Departure:</strong>{" "}
                  {new Date(ticket.departure).toLocaleString()}
                </p>

                <p>
                  <strong>Seats:</strong> {ticket.availableSeats}
                </p>

                <p>
                  <strong>Price:</strong> ৳ {ticket.price}
                </p>

                <p>
                  <strong>Operator:</strong> {ticket.operator}
                </p>

              </div>

              <div className="flex gap-3 pt-2">

                <Link
                  href={`/dashboard/vendor/tickets/edit/${ticket._id}`}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 py-2 font-semibold text-white"
                >
                  <FaPen />
                  Edit
                </Link>

                <button
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-red-600 py-2 font-semibold text-white"
                >
                  <FaTrash />
                  Delete
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}