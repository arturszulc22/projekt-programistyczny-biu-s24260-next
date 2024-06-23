import { Group } from "@/interfaces/group";

export const groups: Group[] = [
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
    name: "Tech Enthusiasts",
    shortDescription:
      "A group for people who love discussing the latest in technology.",
    imageURI:
      "https://images.unsplash.com/photo-1717241365608-5565eef72d89?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    users: [
      {
        id: "2",
        firstName: "Janek",
        userName: "Kowa12",
        lastName: "Kowa",
        password: "haslo123",
        email: "janek.kowa@example.com",
        dateOfBirth: "1990-01-15",
        age: 34,
        shortDescription:
          "Młody inżynier z pasją do technologii i nowoczesnych rozwiązań. Lubi spędzać czas na świeżym powietrzu i podróżować.",
        imageURI:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
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
      },
    ],
  },
];
