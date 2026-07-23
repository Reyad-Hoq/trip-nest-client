const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const getUsers = async () => {
  try {
    const res = await fetch(`${baseUrl}/api/users`);
    if (!res.ok) {
      throw new Error("Failed to fetch users");
    }
    const data = await res.json();
    return data;
  }
  catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}