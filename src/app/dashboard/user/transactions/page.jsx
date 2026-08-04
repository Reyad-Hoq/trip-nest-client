
import { getTransactions } from "@/lib/actions/api/payment";
import { Calendar, CreditCard } from "@gravity-ui/icons";

export const dynamic = "force-dynamic";

export default async function TransactionsPage() {
  const transactions = await getTransactions();

  return (
    <section className="w-11/12 mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1A1D7E]">
          My Transactions
        </h1>

        <p className="text-gray-500 mt-2">
          View all your completed payment history.
        </p>
      </div>

      {transactions.length === 0 ? (
        <div className="bg-white rounded-2xl shadow border p-10 text-center">
          <CreditCard className="mx-auto h-12 w-12 text-gray-400 mb-3" />

          <h2 className="text-xl font-semibold">
            No Transactions Found
          </h2>

          <p className="text-gray-500 mt-2">
            Your completed payments will appear here.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto bg-white rounded-2xl shadow border">
          <table className="w-full">
            <thead className="bg-[#1A1D7E] text-white">
              <tr>
                <th className="px-5 py-4 text-left">Ticket</th>
                <th className="px-5 py-4 text-left">Transaction ID</th>
                <th className="px-5 py-4 text-left">Amount</th>
                <th className="px-5 py-4 text-left">Status</th>
                <th className="px-5 py-4 text-left">Date</th>
              </tr>
            </thead>

            <tbody>
              {transactions.map((transaction) => (
                <tr
                  key={transaction._id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="px-5 py-4 font-medium">
                    {transaction.title}
                  </td>

                  <td className="px-5 py-4">
                    <span className="font-mono text-sm">
                      {transaction.paymentIntentId}
                    </span>
                  </td>

                  <td className="px-5 py-4 font-semibold text-[#1A1D7E]">
                    ৳ {transaction.amount}
                  </td>

                  <td className="px-5 py-4">
                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                      {transaction.paymentStatus}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />

                      {new Date(transaction.createdAt).toLocaleString()}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}