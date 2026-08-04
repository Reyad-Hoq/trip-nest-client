import { authHeader } from "../server";

export async function verifyPayment(sessionId) {

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/payments/verify/${sessionId}`,
    {
      headers: {
        ... await authHeader()
      },
      cache: "no-store",
    }
  );

  return res.json();
}

export async function getTransactions() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/payments/transactions`,
    {
      headers: {
        ...(await authHeader()),
      },
      cache: "no-store",
    }
  );

  return res.json();
}

export async function getVendorRevenue() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/payments/vendor/revenue`,
    {
      headers: {
        ...(await authHeader()),
      },
      cache: "no-store",
    }
  );

  return res.json();
}