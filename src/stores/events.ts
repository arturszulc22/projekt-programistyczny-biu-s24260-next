import { createStore } from "zustand/vanilla";
import { events } from "@/data/events";
import { User } from "@/interfaces/user";
import { Event } from "@/interfaces/event";

export type EventsState = {
  events: Event[] | [];
};

export type EventsActions = {
  getEventById: (groupId: string) => Event;
  removeEvent: (groupId: string) => Promise<void>;
  addUserToEvent: (groupId: string, user: User | null) => void;
  removeUserFromEvent: (groupId: string, user: User | null) => Promise<void>;
};

export type EventsStore = EventsState & EventsActions;

export const initEventsStore = (): EventsState => {
  return { events: [...events] };
};

export const defaultInitState: EventsState = {
  events: [...events],
};

export const createEventsStore = (
  initState: EventsState = defaultInitState,
) => {
  return createStore<EventsStore>()((set, get) => ({
    ...initState,
    getEventById: (eventId) => {
      return get().events.filter((event) => event.id === eventId)[0] || null;
    },
    addEvent: (event: Event) =>
      set((state) => ({ events: [...state.events, event] })),
    removeEvent: async (eventId: string) => {
      const events = get().events.filter((event) => event.id !== eventId);
      set({ events });
    },
    addUserToEvent: (eventId: string, user: User | null) => {
      const events = get().events?.map((event) =>
        event.id === eventId
          ? { ...event, users: [...event.users, user] }
          : event,
      );
      set({ events });
    },
    removeUserFromEvent: async (eventId: string, user: User | null) => {
      const events = get().events?.map((event) =>
        event.id === eventId
          ? {
              ...event,
              users: [
                ...event.users?.filter((eventUser) => eventUser !== user),
              ],
            }
          : event,
      );
      set({ events });
    },
  }));
};
