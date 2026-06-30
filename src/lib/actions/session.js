'use server';

import { headers } from "next/headers";
import { auth } from "../auth";

export async function getSession() {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    return session?.user;
  } catch (error) {
    console.error("getSession error:", error);
    return null;
  }
}