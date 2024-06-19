"use server";

import { cookies } from "next/headers";

export const setUserId = async (userId) => {
  cookies().set("userId", userId);
};
