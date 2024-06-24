import { Event } from "@/interfaces/event";

export const events: Event[] = [
  {
    id: "1",
    user: {
      id: "1",
      firstName: "Jan",
      lastName: "Kowalski",
      userName: "jakkowal34",
      password: "haslo123",
      email: "jan.kowalski@example.com",
      dateOfBirth: "1990-01-15",
      age: 34,
      shortDescription:
        "Młody inżynier z pasją do technologii i nowoczesnych rozwiązań. Lubi spędzać czas na świeżym powietrzu i podróżować.",
      imageURI:
        "https://images.unsplash.com/photo-1718900351979-3e00f88386a3?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      settings: {
        profile: {
          isPrivate: true,
        },
        app: {
          isDarkMode: false,
          layout: "left",
          isNotificationEnabled: false,
        },
        isAdmin: false,
      },
    },
    name: "Tech Conference 2024",
    shortDescription: "Annual tech conference",
    description:
      "An annual conference bringing together technology enthusiasts and professionals from around the world. The event includes keynote speeches, workshops, and networking opportunities.",
    dateTime: "2024-09-12T09:00:00Z",
    imageURI:
      "https://images.unsplash.com/photo-1717241365608-5565eef72d89?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    users: []
  },
];
