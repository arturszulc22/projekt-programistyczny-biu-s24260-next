"use client";
import { FC, useState } from "react";
import { Modal, ModalDialog, Typography } from "@mui/joy";
import CloseIcon from "@mui/icons-material/Close";
import UserCardSecondary from "@/components/user/UserCardSecondary";

const SearchModal: FC = ({ isOpen, onCloseModal }) => {
  const user = {
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
  };

  return (
    <Modal open={isOpen} onClose={onCloseModal}>
      <ModalDialog className="bg-primary dark:bg-dark-primary border-0 w-full h-full md:max-w-3xl md:h-auto">
        <CloseIcon
          className="absolute top-2 right-2 fill-primary-rose dark:fill-dark-primary-light-blue"
          onClick={onCloseModal}
        />
        <Typography className="text-primary-rose dark:text-dark-primary-light-blue text-xl mb-3">
          Search profiles
        </Typography>
        <div>
          <input
            type="text"
            name="search"
            className="block w-full rounded-md border-0 px-2 py-1.5 text-primary-rose dark:text-dark-primary shadow-sm ring-1 dark:bg-dark-primary-light-blue ring-inset ring-primary-rose dark:ring-dark-primary-light-blue placeholder:text-primary-rose dark:placeholder:text-dark-primary sm:text-sm sm:leading-6"
            placeholder="John Doe..."
          />
        </div>
        <div className="flex flex-col overflow-y-auto max-h-full md:max-h-96 md:min-h-96">
          <UserCardSecondary user={user} />
          <UserCardSecondary user={user} />
          <UserCardSecondary user={user} />
          <UserCardSecondary user={user} />
          <UserCardSecondary user={user} />
          <UserCardSecondary user={user} />
        </div>
      </ModalDialog>
    </Modal>
  );
};

export default SearchModal;
