import { User } from "@/interfaces/user";

export const users: User[] = [
  {
    id: "8bf50d34-3a9b-4a9d-b9c8-92d0f757e6a1",
    firstName: "Jan",
    lastName: "Kowalski",
    userName: "JackKowalak123",
    password: "haslo123",
    email: "jan.kowalski@example.com",
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
      isAdmin: true,
    },
  },
  {
    id: "0a6b8c1e-aa5e-4746-85b5-1d8f1e00743e",
    firstName: "Anna",
    lastName: "Nowak",
    userName: "AnnaN123",
    password: "password456",
    email: "anna.nowak@example.com",
    dateOfBirth: "1985-07-20",
    age: 39,
    shortDescription:
      "Pasjonatka podróży, kuchni azjatyckiej i górskich wędrówek. Lubi czytać książki przy kawie.",
    imageURI:
      "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
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
  },
  {
    id: "fd7a5d5d-3e7c-4396-9f2d-2241b9a2b195",
    firstName: "Piotr",
    lastName: "Lis",
    userName: "PeterLis89",
    password: "securePass789",
    email: "piotr.lis@example.com",
    dateOfBirth: "1989-03-02",
    age: 35,
    shortDescription:
      "Entuzjasta sportów ekstremalnych i muzyki elektronicznej. Kocha podróże i fotografię krajobrazową.",
    imageURI:
      "https://images.unsplash.com/photo-1523474253046-28f2e1c0f8d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
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
  },
  {
    id: "c3f9be6b-d24f-4324-ba32-10d14e0169e0",
    firstName: "Marta",
    lastName: "Wójcik",
    userName: "MartaWojcik",
    password: "martaPass123",
    email: "marta.wojcik@example.com",
    dateOfBirth: "1992-12-10",
    age: 31,
    shortDescription:
      "Kreatywna dusza zamiłowana do sztuki i podróży. Uwielbia gotowanie i zbieranie roślin doniczkowych.",
    imageURI:
      "https://images.unsplash.com/photo-1528695522286-511191d6cf81?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
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
  },
  {
    id: "ec46d9f1-4e20-4a84-9421-ebc8e8b9e5f5",
    firstName: "Adam",
    lastName: "Kaczmarek",
    userName: "AdamK",
    password: "passAdam123",
    email: "adam.kaczmarek@example.com",
    dateOfBirth: "1987-05-25",
    age: 37,
    shortDescription:
      "Programista z zamiłowaniem do gier komputerowych i nowych technologii. Pasjonat podróży rowerowych.",
    imageURI:
      "https://images.unsplash.com/photo-1575025793973-5a3a6c9e3a11?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
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
  {
    id: "e9e508e2-4ee8-4fa3-b6a6-75d70ee992f8",
    firstName: "Ewa",
    lastName: "Zawadzka",
    userName: "EvaZ",
    password: "ewa123Pass",
    email: "ewa.zawadzka@example.com",
    dateOfBirth: "1995-08-12",
    age: 28,
    shortDescription:
      "Studentka architektury z zamiłowaniem do podróży po Europie. Miłośniczka kina francuskiego i literatury współczesnej.",
    imageURI:
      "https://images.unsplash.com/photo-1543336201-4da174b2f3f0?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
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
  },
  {
    id: "d0c82f68-1b20-4e26-ba4a-10fca3d6e5f1",
    firstName: "Michał",
    lastName: "Pawlak",
    userName: "MikeP",
    password: "michalPwd456",
    email: "michal.pawlak@example.com",
    dateOfBirth: "1984-11-03",
    age: 39,
    shortDescription:
      "Dziennikarz z zamiłowaniem do podróży po Azji i kuchni lokalnej. Miłośnik książek kryminalnych i jazzu.",
    imageURI:
      "https://images.unsplash.com/photo-1551794846-3f2b16e2a134?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
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
  {
    id: "1aa4bc74-ba98-4a5e-a59d-0d1b7bf8e9a2",
    firstName: "Karolina",
    lastName: "Walczak",
    userName: "KaroW",
    password: "karolina123",
    email: "karolina.walczak@example.com",
    dateOfBirth: "1991-09-18",
    age: 32,
    shortDescription:
      "Fotograf z zamiłowaniem do podróży po Ameryce Południowej. Lubi gotować i eksperymentować z nowymi technologiami.",
    imageURI:
      "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
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
  },
  {
    id: "b6f34a1c-18b7-4998-ae7d-95e4f986e4e2",
    firstName: "Łukasz",
    lastName: "Krawczyk",
    userName: "LukeK",
    password: "lukaszPass456",
    email: "lukasz.krawczyk@example.com",
    dateOfBirth: "1986-06-28",
    age: 38,
    shortDescription:
      "Grafik komputerowy z zamiłowaniem do podróży po Japonii. Miłośnik designu i kina azjatyckiego.",
    imageURI:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
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
  {
    id: "0d5b52f4-d0e4-4314-8474-2a190e0d9ed0",
    firstName: "Magdalena",
    lastName: "Jasińska",
    userName: "MaggieJ",
    password: "magda123",
    email: "magdalena.jasinska@example.com",
    dateOfBirth: "1993-04-05",
    age: 31,
    shortDescription:
      "Inżynier budownictwa z zamiłowaniem do podróży po Skandynawii. Pasjonatka nurkowania i podziwiania architektury.",
    imageURI:
      "https://images.unsplash.com/photo-1505843514474-41aa2eb15a6d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
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
  },
  {
    id: "8a80158f-1f4e-41cf-b08c-ecdb4782482b",
    firstName: "Marcin",
    lastName: "Nowicki",
    userName: "MarcNow",
    password: "marcinPass789",
    email: "marcin.nowicki@example.com",
    dateOfBirth: "1988-12-15",
    age: 35,
    shortDescription:
      "Marketingowiec z zamiłowaniem do podróży po Ameryce Północnej. Miłośnik teatru i eksplorowania nowych miejsc.",
    imageURI:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
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
];
