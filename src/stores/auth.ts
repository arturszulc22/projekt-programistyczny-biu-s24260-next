import { createStore } from "zustand/vanilla";
import { setUser } from "@/actions/cookies";
import { User } from "@/interfaces/user";
import { LoginFormData, RegisterFormData } from "@/interfaces/auth";
import { createUser, getUser } from "@/api/user";

export type AuthState = {
  user: User | null;
};

export type AuthActions = {
  login: ({ email, password }: LoginFormData) => void;
  register: ({ email, password }: LoginFormData) => void;
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
        const user = await getUser({ email, password });

        // json-server doesn't support and operation
        if (user.password !== password) throw new Error();

        await setUser(user);

        set({ user });
      } catch (e: Error) {
        throw new Error("User not found!");
      }
    },
    register: async (data: RegisterFormData) => {
      try {
        const requestData = {
          ...data,
          dateOfBirth: null,
          age: null,
          shortDescription: null,
          imageUrl: null,
          settings: {
            profile: {
              isPrivate: false,
            },
            app: {
              isDarkMode: false,
              layout: "left",
              isNotificationEnabled: true,
            },
            isAdmin: false,
          },
        };
        delete requestData.repeatPassword;

        const user = await createUser(requestData);
        await setUser(user);

        set({ user });
      } catch (e: Error) {
        throw new Error("User not found!");
      }
    },
  }));
};
