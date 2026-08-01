import { getUserToken } from "./session";

export const authHeader = async () => {
  const token = await getUserToken();
  const header = {
    authorization: `Bearer ${token}`
  }
  return token ? header : {};
}