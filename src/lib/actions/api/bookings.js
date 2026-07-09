
export const getBookings = async (userId) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/bookings?userId=${userId}`);
    if (!res.ok) {
      throw new Error("Failed to fetch bookings");
    }
    const data = await res.json();
    return data.bookings;
  }
  catch (error) {
    console.error("Error fetching bookings:", error);
    throw error;
  }
};
