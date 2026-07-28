const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

// export const getBookings = async (userId) => {
//   try {
//     const res = await fetch(`${baseUrl}/api/bookings?userId=${userId}`);
//     console.log("API Response Status:", res.status); // Log the response status to verify the request was successful
//     if (!res.ok) {
//       throw new Error("Failed to fetch bookings");
//     }
//     const data = await res.json();
//     console.log("API Response:", data);

//     return data;
//   }
//   catch (error) {
//     console.error("Error fetching bookings:", error);
//     throw error;
//   }
// };
export const getBookings = async (params = {}) => {
  const query = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      query.append(key, value);
    }
  });

  const res = await fetch(
    `${baseUrl}/api/bookings?${query.toString()}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch bookings");
  }

  return res.json();
};

export const updateBookingById = async (bookingId, data) => {
  const res = await fetch(`${baseUrl}/api/bookings/${bookingId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Failed to update booking");
  }
  const booking = await res.json()
  return booking;
};