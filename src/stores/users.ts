import { createStore } from "zustand/vanilla";
import { User } from "@/interfaces/user";
import { getUsers, updateUser } from "@/api/user";
import { setUser } from "@/actions/cookies";

export type UsersState = {
  users: User[] | [];
  searchResults: User[] | [];
};

export type UsersActions = {
  searchUsers: (phrase: string, user: User) => User[] | [];
  updateUser: (user, data) => void;
  getUserFriends: (user: User | null) => User[] | [];
  addFriend: (user: User | null, auth: User | null) => Promise<void>;
  removeFriend: (user: User | null, auth: User | null) => Promise<void>;
  getOtherPeople: (user: User) => User[] | [];
  getUserFriendsRequests: (user: User) => User[] | [];
  getUserById: (userId: string) => User | null;
};

export type UsersStore = UsersState & UsersActions;

export const initUsersStore = (users): UsersState => {
  return { users: [...users], searchResults: [] };
};

export const defaultInitState: UsersState = {
  users: [],
  searchResults: [],
};

export const createUsersStore = (initState: UsersState = defaultInitState) => {
  return createStore<UsersStore>()((set, get) => ({
    ...initState,
    searchUsers: (phrase, auth) =>
      set((state) => ({
        searchResults: state.users.filter(
          (user) =>
            (user?.firstName.includes(phrase) ||
              user?.lastName.includes(phrase) ||
              user?.town?.includes(phrase) ||
              (user?.firstName + " " + user?.lastName).includes(phrase) ||
              user?.age?.toString() === phrase) &&
            user.id !== auth.id,
        ),
      })),
    updateUser: async (user, data) => {
      try {
        const updatedUser = await updateUser({ ...user, ...data });

        set((state) => ({
          ...state,
          users: state.users.map((u) =>
            u.id === updatedUser.id ? updatedUser : u,
          ),
        }));
      } catch (e: Error) {
        throw new Error("Cannot save user data!");
      }
    },
    addFriend: async (user, friend) => {
      try {
        const requestData = await updateUser({
          ...user,
          friends: [...user.friends, friend.id],
          friendsRequests: [
            ...user.friendsRequests.filter((f) => f !== friend.id),
          ],
        });

        await updateUser(requestData);
        await setUser(requestData);
        await updateUser({
          ...friend,
          friends: [...friend.friends, user.id],
          friendsRequests: [
            ...friend.friendsRequests.filter((f) => f !== user.id),
          ],
        });

        const updatedUsers = await getUsers();
        set({
          users: [...updatedUsers],
        });
      } catch (e) {}
    },
    removeFriend: async (user, friend) => {
      try {
        const requestData = {
          ...user,
          friends: [
            ...user.friends.filter((friendId) => friendId !== friend.id),
          ],
          friendsRequests: [
            ...user.friendsRequests.filter(
              (friendId) => friendId !== friend.id,
            ),
          ],
        };

        await updateUser(requestData);
        await setUser(requestData);
        await updateUser({
          ...friend,
          friends: [
            ...friend.friends.filter((friendId) => friendId !== user.id),
          ],
          friendsRequests: [
            ...friend.friendsRequests.filter(
                (friendId) => friendId !== user.id,
            ),
          ],
        });

        const updatedUsers = await getUsers();
        set({
          users: [...updatedUsers],
        });
      } catch (e) {
        console.error(e);
      }
    },
    getUserFriends: (user: User) => {
      if (!user) return [];
      return get().users.filter(
        (u) => user.friends.includes(u.id) && u.id !== user.id,
      );
    },
    getOtherPeople: (user: User) => {
      if (!user) return [];
      return get().users.filter(
        (u) =>
          !user.friends.includes(u.id) &&
          !user.friendsRequests.includes(u.id) &&
          u.id !== user.id,
      );
    },
    getUserFriendsRequests: (user: User) => {
      if (!user) return [];
      return get().users.filter(
        (u) => user.friendsRequests.includes(u.id) && u.id !== user.id,
      );
    },
    getUserById: (userId: string) => {
      if (!userId) return null;
      return get().users.filter((u) => u.id === userId)[0];
    },
  }));
};
