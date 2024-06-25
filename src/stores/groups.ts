import { createStore } from "zustand/vanilla";
import { Group } from "@/interfaces/group";
import { groups } from "@/data/groups";
import { User } from "@/interfaces/user";

export type GroupsState = {
  groups: Group[] | [];
};

export type GroupsActions = {
  getGroupById: (groupId: string) => Group;
  addGroup: (group: Group) => void;
  removeGroup: (groupId: string) => Promise<void>;
  addUserToGroup: (groupId: string, user: User | null) => void;
  removeUserFromGroup: (groupId: string, user: User | null) => Promise<void>;
};

export type GroupsStore = GroupsState & GroupsActions;

export const initGroupsStore = (): GroupsState => {
  return { groups: [...groups] };
};

export const defaultInitState: GroupsState = {
  groups: [...groups],
};

export const createGroupsStore = (
  initState: GroupsState = defaultInitState,
) => {
  return createStore<GroupsStore>()((set, get) => ({
    ...initState,
    getGroupById: (groupId) => {
      return get().groups.filter((group) => group.id === groupId)[0] || null;
    },
    addGroup: (group: Group) =>
      set((state) => ({ groups: [...state.groups, group] })),
    removeGroup: async (groupId: string) => {
      const groups = get().groups.filter((group) => group.id !== groupId);
      set({ groups });
    },
    addUserToGroup: (groupId: string, user: User | null) => {
      const groups = get().groups?.map((group) =>
        group.id === groupId
          ? { ...group, users: [...group.users, user] }
          : group,
      );
      set({ groups });
    },
    removeUserFromGroup: async (groupId: string, user: User | null) => {
      const groups = get().groups?.map((group) =>
        group.id === groupId
          ? {
              ...group,
              users: [
                ...group.users?.filter((groupUser) => groupUser !== user),
              ],
            }
          : group,
      );
      set({ groups });
    },
  }));
};
