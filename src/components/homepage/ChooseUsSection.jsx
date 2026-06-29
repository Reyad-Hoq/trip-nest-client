import {
  FaBus,
  FaHeadset,
  FaLock,
  FaTicket,
} from "react-icons/fa6";

const features = [
  {
    icon: <FaTicket size={34} />,
    title: "Easy Ticket Booking",
    description:
      "Book Bus, Train, Flight and Launch tickets in just a few clicks.",
  },
  {
    icon: <FaLock size={34} />,
    title: "Secure Payments",
    description:
      "Your transactions are protected with modern payment security.",
  },
  {
    icon: <FaBus size={34} />,
    title: "Trusted Operators",
    description:
      "Only verified transport operators are available on TripNest.",
  },
  {
    icon: <FaHeadset size={34} />,
    title: "24/7 Support",
    description:
      "Need help? Our support team is available anytime.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-5xl px-5">
        <div className="mb-12 text-center">
          <span className="rounded-full bg-yellow-100 px-4 py-1 text-sm font-semibold text-yellow-700">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-4xl font-bold text-[#1A1D7E]">
            Why Thousands Choose TripNest
          </h2>

          <p className="mt-3 text-slate-500">
            Fast, secure and hassle-free ticket booking platform.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white p-8 text-center shadow transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-[#1A1D7E]">
                {item.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-[#1A1D7E]">
                {item.title}
              </h3>

              <p className="mt-4 text-slate-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}