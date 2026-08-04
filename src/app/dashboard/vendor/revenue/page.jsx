export const dynamic = "force-dynamic";

import { getVendorRevenue } from "@/lib/actions/api/payment";
import { CreditCard, Ticket, Wallet } from "@gravity-ui/icons";


export default async function VendorRevenuePage() {
  const revenue = await getVendorRevenue();
  return (
    <section className="w-11/12 mx-auto py-8 space-y-8">

      <div>
        <h1 className="text-3xl font-bold text-[#1A1D7E]">
          Revenue Overview
        </h1>

        <p className="text-gray-500 mt-2">
          View your earnings and payment summary.
        </p>
      </div>

      {/* Stats */}

      <div className="grid gap-6 md:grid-cols-3">

        <div className="rounded-2xl bg-white border shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Total Revenue</p>

              <h2 className="text-3xl font-bold text-[#1A1D7E] mt-2">
                ৳ {revenue.totalRevenue}
              </h2>
            </div>

            <Wallet className="h-12 w-12 text-green-600" />
          </div>
        </div>

        <div className="rounded-2xl bg-white border shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Transactions</p>

              <h2 className="text-3xl font-bold mt-2">
                {revenue.totalTransactions}
              </h2>
            </div>

            <CreditCard className="h-12 w-12 text-blue-600" />
          </div>
        </div>

        <div className="rounded-2xl bg-white border shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Tickets Sold</p>

              <h2 className="text-3xl font-bold mt-2">
                {revenue.totalTickets}
              </h2>
            </div>

            <Ticket className="h-12 w-12 text-orange-500" />
          </div>
        </div>

      </div>

      {/* Recent Payments */}

      <div className="bg-white rounded-2xl border shadow overflow-hidden">

        <div className="px-6 py-4 border-b">
          <h2 className="text-xl font-semibold">
            Recent Payments
          </h2>
        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-gray-50">

              <tr>
                <th className="px-5 py-4 text-left">Ticket</th>
                <th className="px-5 py-4 text-left">Customer</th>
                <th className="px-5 py-4 text-left">Amount</th>
                <th className="px-5 py-4 text-left">Method</th>
                <th className="px-5 py-4 text-left">Date</th>
              </tr>

            </thead>

            <tbody>

              {revenue.transactions.map((item) => (

                <tr
                  key={item._id}
                  className="border-b hover:bg-gray-50"
                >

                  <td className="px-5 py-4 font-medium">
                    {item.title}
                  </td>

                  <td className="px-5 py-4">
                    {item.userName}
                  </td>

                  <td className="px-5 py-4 font-semibold text-[#1A1D7E]">
                    ৳ {item.amount}
                  </td>

                  <td className="px-5 py-4">
                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                      {item.paymentMethod}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-500">
                    {new Date(item.createdAt).toLocaleString()}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </section>
  );
}