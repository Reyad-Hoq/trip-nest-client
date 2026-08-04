import { verifyPayment } from "@/lib/actions/api/payment";


export default async function BookingSuccessPage({
  searchParams,
}) {
  const { session_id } = await searchParams;

  const result = await verifyPayment(session_id);
  if (!result.success) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-2xl font-bold text-red-600">
          Payment Verification Failed
        </h1>
      </div>
    );
  }

  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold text-green-600">
        Payment Successful 🎉
      </h1>

      <p className="mt-3">
        Your booking has been confirmed.
      </p>
    </div>
  );
}