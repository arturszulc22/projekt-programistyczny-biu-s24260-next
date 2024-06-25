import { Group } from "@/interfaces/group";
import { users } from "@/data/users";

export const groups: Group[] = [
  {
    id: "1",
    user: users[0],
    name: "Tech Enthusiasts",
    shortDescription:
      "A group for people who love discussing the latest in technology.",
    imageURI:
      "https://images.unsplash.com/photo-1717241365608-5565eef72d89?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    users: [...users.slice(1, 5)],
  },
];
