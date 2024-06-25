import { v4 as uuidv4 } from "uuid";
import { users } from "@/data/users";

export const posts = [
  {
    id: uuidv4(),
    imageURI:
      "https://images.unsplash.com/photo-1717241365608-5565eef72d89?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content:
      "JavaScript closures are a fundamental concept that every JavaScript developer should understand. They allow functions to have access to variables from an enclosing scope or environment, even after the outer function has finished executing. This feature can be used to create private variables, among other things...",
    user: {
      id: "1",
      firstName: "Jan",
      lastName: "Kowalski",
      password: "password",
      email: "admin@admin.com",
      dateOfBirth: "1990-01-15",
      age: 34,
      town: "Gdańsk",
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
        isAdmin: true,
      },
      userName: "admin22",
      friends: ["d0fa", "2"],
      friendsRequests: [],
    },
    createdAt: "25.06.2024, 23:47:47",
    attachedUsers: [
      {
        ...users[1],
      },
    ],
    comments: [
      {
        id: uuidv4(),
        user: {
          ...users[1],
        },
        content:
          "Great article! I finally understand closures after reading this.",
        createdAt: "25.06.2024, 23:47:47",
        likes: [users[0]],
      },
      {
        id: uuidv4(),
        user: {
          ...users[2],
        },
        content:
          "Thanks for the clear explanation. Can you provide more examples?",
        createdAt: "25.06.2024, 23:47:47",
        likes: [users[0]],
      },
    ],
    likes: [users[1], users[2]],
    idGroupPost: null,
    idEventPost: null,
  },
];
