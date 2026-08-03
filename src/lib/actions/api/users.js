import { authHeader } from "../server";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const getUsers = async () => {
  try {
    const res = await fetch(`${baseUrl}/api/users`, {
      method: 'GET',
      headers: {
        ... await authHeader()
      }
    });
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

export const updateUserById = async (userId, data) => {
  const res = await fetch(`${baseUrl}/api/users/${userId}`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
      ... await authHeader(),
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error('Failed to update User');
  }
  const user = await res.json();
  return user;
}
