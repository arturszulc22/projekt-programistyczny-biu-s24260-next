import { createStore } from "zustand/vanilla";
import { Group } from "@/interfaces/group";
import { groups } from "@/data/groups";

export type GroupsState = {
  groups: Group[] | [];
};

export type GroupsActions = {};

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
  return createStore<GroupsStore>()(() => ({
    ...initState,
  }));
};
