import { createStore } from "zustand/vanilla";
import { setUser } from "@/actions/cookies";
import { User } from "@/interfaces/user";
import {
  LoginFormData,
  RegisterFormData,
} from "@/interfaces/auth";
import { createUser, getUser, updateUser } from "@/api/user";
import {format} from "date-fns";

export type AuthState = {
  user: User | null;
};

export type AuthActions = {
  login: ({ email, password }: LoginFormData) => void;
  register: (data: RegisterFormData) => void;
  update: (user, data) => void;
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
    update: async (user, data) => {
      try {
        if (data.dateOfBirth) {
          data.dateOfBirth = format(data.dateOfBirth, 'yyyy-MM-dd');
        }

        const requestData = {
          ...user,
          ...data,
        };
        const newUser = await updateUser(requestData);
        await setUser(newUser);

        set({ user });
      } catch (e: Error) {
        throw new Error("Cannot save user data!");
      }
    },
  }));
};
