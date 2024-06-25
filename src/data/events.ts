import { Event } from "@/interfaces/event";
import { users } from "@/data/users";

export const events: Event[] = [
  {
    id: "1",
    user: users[0],
    name: "Tech Conference 2024",
    shortDescription: "Annual tech conference",
    description:
      "An annual conference bringing together technology enthusiasts and professionals from around the world. The event includes keynote speeches, workshops, and networking opportunities.",
    dateTime: "2024-09-12T09:00:00Z",
    imageURI:
      "https://images.unsplash.com/photo-1717241365608-5565eef72d89?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    users: [...users.slice(1, 4)],
  },
];
