import { User } from "@/interfaces/user";

export const users: User[] = [
  {
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
    userName: "jan_adminek",
    friends: ["d0fa", "2"],
    friendsRequests: [],
  },
  {
    id: "2",
    firstName: "Stefan",
    lastName: "Żeromski",
    password: "password",
    email: "admin@admin2.com",
    dateOfBirth: "1990-01-15",
    age: 34,
    town: "Gdańsk",
    shortDescription:
      "Młody inżynier z pasją do technologii i nowoczesnych rozwiązań. Lubi spędzać czas na świeżym powietrzu i podróżować.",
    imageURI:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    settings: {
      profile: {
        isPrivate: false,
      },
      app: {
        isDarkMode: true,
        layout: "left",
        isNotificationEnabled: true,
      },
      isAdmin: false,
    },
    userName: "stefan_zeromski",
    friends: ["1"],
    friendsRequests: [],
  },
  {
    id: "d0fa",
    firstName: "Karolina",
    lastName: "Karolinowska",
    userName: "karolina12",
    email: "test@test.com",
    password: "password",
    dateOfBirth: "2008-01-08",
    age: 43,
    shortDescription: "Tutaj znajduje się mój prosty opis",
    imageURI:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    town: "Gdańsk",
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
    friends: ["1"],
    friendsRequests: [],
  },
  {
    id: "8bf50d34-3a9b-4a9d-b9c8-92d0f757e6a1",
    firstName: "Jan",
    lastName: "Kowalski",
    userName: "JackKowalak123",
    password: "password",
    email: "jan.kowalski@example.com",
    dateOfBirth: "1990-01-15",
    age: 34,
    town: "Gdańsk",
    shortDescription:
      "Młody inżynier z pasją do technologii i nowoczesnych rozwiązań. Lubi spędzać czas na świeżym powietrzu i podróżować.",
    imageURI:
      "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
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
    friends: [],
    friendsRequests: [],
  },
  {
    id: "0a6b8c1e-aa5e-4746-85b5-1d8f1e00743e",
    firstName: "Anna",
    lastName: "Nowak",
    userName: "AnnaN123",
    password: "password",
    email: "anna.nowak@example.com",
    dateOfBirth: "1985-07-20",
    age: 39,
    town: "Gdańsk",
    shortDescription:
      "Pasjonatka podróży, kuchni azjatyckiej i górskich wędrówek. Lubi czytać książki przy kawie.",
    imageURI:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    settings: {
      profile: {
        isPrivate: false,
      },
      app: {
        isDarkMode: true,
        layout: "right",
        isNotificationEnabled: true,
      },
      isAdmin: false,
    },
    friends: [],
    friendsRequests: [],
  },
  {
    id: "fd7a5d5d-3e7c-4396-9f2d-2241b9a2b195",
    firstName: "Piotr",
    lastName: "Lis",
    userName: "PeterLis89",
    password: "password",
    email: "piotr.lis@example.com",
    dateOfBirth: "1989-03-02",
    age: 35,
    town: "Poznań",
    shortDescription:
      "Entuzjasta sportów ekstremalnych i muzyki elektronicznej. Kocha podróże i fotografię krajobrazową.",
    imageURI:
      "https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
    settings: {
      profile: {
        isPrivate: true,
      },
      app: {
        isDarkMode: false,
        layout: "left",
        isNotificationEnabled: true,
      },
      isAdmin: false,
    },
    friends: [],
    friendsRequests: [],
  },
  {
    id: "c3f9be6b-d24f-4324-ba32-10d14e0169e0",
    firstName: "Marta",
    lastName: "Wójcik",
    userName: "MartaWojcik",
    password: "password",
    email: "marta.wojcik@example.com",
    dateOfBirth: "1992-12-10",
    age: 31,
    town: "Poznań",
    shortDescription:
      "Kreatywna dusza zamiłowana do sztuki i podróży. Uwielbia gotowanie i zbieranie roślin doniczkowych.",
    imageURI:
      "https://images.unsplash.com/photo-1562572159-4efc207f5aff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
    settings: {
      profile: {
        isPrivate: false,
      },
      app: {
        isDarkMode: true,
        layout: "right",
        isNotificationEnabled: true,
      },
      isAdmin: false,
    },
    friends: [],
    friendsRequests: [],
  },
  {
    id: "ec46d9f1-4e20-4a84-9421-ebc8e8b9e5f5",
    firstName: "Adam",
    lastName: "Kaczmarek",
    userName: "AdamK",
    password: "password",
    email: "adam.kaczmarek@example.com",
    dateOfBirth: "1987-05-25",
    age: 37,
    town: "Poznań",
    shortDescription:
      "Programista z zamiłowaniem do gier komputerowych i nowych technologii. Pasjonat podróży rowerowych.",
    imageURI:
      "https://images.unsplash.com/photo-1512288094938-363287817259?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8",
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
    friends: [],
    friendsRequests: [],
  },
  {
    id: "e9e508e2-4ee8-4fa3-b6a6-75d70ee992f8",
    firstName: "Ewa",
    lastName: "Zawadzka",
    userName: "EvaZ",
    password: "password",
    email: "ewa.zawadzka@example.com",
    dateOfBirth: "1995-08-12",
    age: 28,
    town: "Gdynia",
    shortDescription:
      "Studentka architektury z zamiłowaniem do podróży po Europie. Miłośniczka kina francuskiego i literatury współczesnej.",
    imageURI:
      "https://images.unsplash.com/photo-1577205024940-d7c06cfc98f7?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    settings: {
      profile: {
        isPrivate: false,
      },
      app: {
        isDarkMode: true,
        layout: "right",
        isNotificationEnabled: true,
      },
      isAdmin: false,
    },
    friends: [],
    friendsRequests: [],
  },
];
