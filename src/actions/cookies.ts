"use server";

import { cookies } from "next/headers";
import { User } from "@/interfaces/user";

export const setUser = async (user: User) => {
  cookies().set("user", JSON.stringify(user));
};

export const getUser = async () => {
  return JSON.parse(cookies().get("user")?.value || null);
};

export const removeUser = async () => {
  return cookies().delete("user");
}
