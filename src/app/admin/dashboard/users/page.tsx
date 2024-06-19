import { FC } from "react";
import { Typography } from "@mui/joy";
import UserListFilters from "@/components/admin/UsersListaFilters";
import UserList from "@/components/admin/UsersList";

const AdminDashboardUsers: FC = () => {
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
    <div>
      <Typography
        level="h2"
        className="text-primary-rose dark:text-dark-primary-light-blue mb-5"
      >
        Users
      </Typography>
      <div>
        <UserListFilters />
        <UserList items={users} />
      </div>
    </div>
  );
};

export default AdminDashboardUsers;