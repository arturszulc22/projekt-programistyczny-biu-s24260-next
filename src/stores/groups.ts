import { createStore } from "zustand/vanilla";
import { Group, GroupCreateFormData } from "@/interfaces/group";
import { groups } from "@/data/groups";
import { User } from "@/interfaces/user";

export type GroupsState = {
  groups: Group[] | [];
};

export type GroupsActions = {
  addGroup: (group: GroupCreateFormData) => void;
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
    addGroup: (group: Group) =>
      set((state) => ({ groups: [...state.groups, group] })),
    addUserToGroup: (groupId: string, user: User) => {
      const groups = get().groups?.map((group) =>
        group.id === groupId
          ? { ...group, users: [...group.users, user] }
          : group,
      );

      set({ groups });
    },
  }));
};
