"use client";

import { FC, useState } from "react";
import UserTab from "@/app/components/user/UserTab";
import { Button, Container, ToggleButtonGroup } from "@mui/joy";

const Following: FC = () => {
  const [alignment, setAlignment] = useState("user");

  const users = [
    {
      id: 2,
      firstName: "Anna",
      secondName: "Nowak",
      email: "anna.nowak@example.com",
      dateOfBirth: "1985-06-30",
      age: 38,
      shortDescription:
        "Doświadczona nauczycielka z zamiłowaniem do literatury. W wolnym czasie uwielbia gotować i eksperymentować w kuchni.",
      imageURI:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 3,
      firstName: "Piotr",
      secondName: "Wiśniewski",
      password: "haslo789",
      email: "piotr.wisniewski@example.com",
      dateOfBirth: "1992-11-25",
      age: 31,
      shortDescription:
        "Młody programista, który pasjonuje się grami komputerowymi i projektowaniem stron internetowych. Lubi aktywne spędzanie czasu.",
      imageURI:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  return (
    <Container className="py-10">
      <div className="flex gap-2">
        <ToggleButtonGroup
          value={alignment}
          onChange={(event, newValue) =>
            newValue !== null && setAlignment(newValue)
          }
          className="h-12"
        >
          <Button variant="plain" value="user">
            Following Events
          </Button>
          <Button variant="plain" value="other">
            Other Events
          </Button>
        </ToggleButtonGroup>
      </div>

      {alignment === "user" && <UserTab users={users} />}
      {alignment === "other" && <UserTab users={users} />}
    </Container>
  );
};

export default Following;
