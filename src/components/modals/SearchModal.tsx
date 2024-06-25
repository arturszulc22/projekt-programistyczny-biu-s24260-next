"use client";
import { FC } from "react";
import { Modal, ModalDialog, Typography } from "@mui/joy";
import CloseIcon from "@mui/icons-material/Close";
import UserCardSecondary from "@/components/user/UserCardSecondary";
import { useUsersStore } from "@/providers/users-store-provider";

const SearchModal: FC = ({ isOpen, onCloseModal }) => {
  const { searchResults, searchUsers } = useUsersStore((state) => state);

  const handleSearchUsers = (event) => {
    searchUsers(event.target.value);
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
            onChange={handleSearchUsers}
          />
        </div>
        <div className="flex flex-col overflow-y-auto max-h-full md:max-h-96 md:min-h-96">
          {searchResults.length > 0 &&
            searchResults.map((user) => (
              <UserCardSecondary user={user} key={user.id} />
            ))}
        </div>
      </ModalDialog>
    </Modal>
  );
};

export default SearchModal;
