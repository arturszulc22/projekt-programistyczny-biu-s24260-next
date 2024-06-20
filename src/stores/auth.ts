import { createStore } from "zustand/vanilla";
import { setUser } from "@/actions/cookies";
import { User } from "@/interfaces/user";
import {LoginFormData, RegisterFormData, UpdateUserInformationData} from "@/interfaces/auth";
import { createUser, getUser, updateUser } from "@/api/user";

export type AuthState = {
  user: User | null;
};

export type AuthActions = {
  login: ({ email, password }: LoginFormData) => void;
  register: (data: RegisterFormData) => void;
  update: (user, data: UpdateUserInformationData) => void;
};

export type AuthStore = AuthState & AuthActions;

export const initAuthStore = (user): AuthState => {
  return { user: user || null };
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
          imageURI: null,
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
    update: async (user, data: UpdateUserInformationData) => {
      try {
        const requestData = {
          ...user,
          ...data,
          imageURI: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        }
        const newUser = await updateUser(requestData);
        await setUser(newUser);

        set({ user });
      } catch (e: Error) {
        throw new Error("Cannot save user data!");
      }
    }
  }));
};
