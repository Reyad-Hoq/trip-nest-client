'use server';

import { headers } from "next/headers";
import { auth } from "../auth";

export async function getSession() {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    return session?.user || null;
  } catch (error) {
    console.error("getSession error:", error);
    return null;
  }
};

export const getUserToken = async () => {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });
    return session?.session?.token || null;
  } catch (error) {
    console.error("getUserToken error:", error);
    return null;
  }
}