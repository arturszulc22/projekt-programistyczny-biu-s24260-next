import { createStore } from "zustand/vanilla";
import { setUserId } from "@/actions/cookies";
import { User } from "@/interfaces/user";

interface LoginFormData {
  email: string;
  password: string;
}

export type AuthState = {
  user: User | null;
};

export type AuthActions = {
  login: ({ email, password }: LoginFormData) => void;
};

export type AuthStore = AuthState & AuthActions;

export const initAuthStore = (): AuthState => {
  return { user: null };
};

export const defaultInitState: AuthState = {
  user: null,
};

export const createAuthStore = (initState: AuthState = defaultInitState) => {
  return createStore<AuthStore>()((set) => ({
    ...initState,
    login: async ({ email, password }: LoginFormData) => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/users?email=${email}&password=${password}`,
        );

        const data = await response.json();
        const user = data[0];

        // json-server doesn't support and operation
        if (user.password !== password)
          throw new Error("User password not valid!");

        await setUserId(user.id);

        set({ user });
      } catch (e: Error) {
        throw new Error("User not found!");
      }
    },
  }));
};
