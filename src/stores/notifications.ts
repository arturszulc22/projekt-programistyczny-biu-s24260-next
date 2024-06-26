import { createStore } from "zustand/vanilla";

import { Notification } from "@/interfaces/notification";
import { User } from "@/interfaces/user";

export type NotificationsState = {
  notifications: Notification[] | [];
};

export type NotificationsActions = {
  addNotification: (notification: {
    createdAt: string;
    sender: User;
    isRead: boolean;
    description: string;
    id: any;
    user: any;
  }) => void;
  removeNotification: (notificationId: string) => void;
  getNotificationsForUser: (userId: string) => Notification[];
  getNotificationCountForUser: (userId: string) => number;
};

export type NotificationsStore = NotificationsState & NotificationsActions;

export const defaultInitState: NotificationsState = {
  notifications: [],
};

export const createNotificationsStore = (
  initState: NotificationsState = defaultInitState,
) => {
  return createStore<NotificationsStore>()((set, get) => ({
    ...initState,

    addNotification: (notification: Notification) => {
      set((state) => ({
        notifications: [...state.notifications, notification],
      }));
    },

    removeNotification: (notificationId: string) => {
      set((state) => ({
        notifications: state.notifications.filter(
          (notification) => notification.id !== notificationId,
        ),
      }));
    },

    getNotificationsForUser: (userId: string) => {
      const { notifications } = get();
      return notifications.filter(
        (notification) =>
          notification.user.id === userId && notification.sender.id !== userId,
      );
    },

    getNotificationCountForUser: (userId: string) => {
      const notifications = get().getNotificationsForUser(userId);
      return notifications.filter(
        (notification) => notification.user.id === userId,
      ).length;
    },

    removeAllNotificationForUser: (userId: string) => {
      set(() => ({
        notifications: get().notifications.filter(
          (notification) => notification.user.id !== userId,
        ),
      }));
    },
  }));
};
