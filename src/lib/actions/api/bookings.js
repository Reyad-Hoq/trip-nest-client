const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const getBookings = async (userId) => {
  try {
    const res = await fetch(`${baseUrl}/api/bookings?userId=${userId}`);
    console.log("API Response Status:", res.status); // Log the response status to verify the request was successful
    if (!res.ok) {
      throw new Error("Failed to fetch bookings");
    }
    const data = await res.json();
    console.log("API Response:", data);

    return data;
  }
  catch (error) {
    console.error("Error fetching bookings:", error);
    throw error;
  }
};
