"use client";
import { FC } from "react";
import {
  Autocomplete,
  Avatar,
  Button,
  FormControl,
  FormLabel,
  styled,
} from "@mui/joy";
import UploadIcon from "@mui/icons-material/Upload";
import { useAuthStore } from "@/providers/auth-store-provider";
import { useUsersStore } from "@/providers/users-store-provider";
import {twMerge} from "tailwind-merge";

const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

const CreatePostForm: FC = ({ type }) => {
  const { user } = useAuthStore((state) => state);
  const { getUserFriends } = useUsersStore((state) => state);

  const friends = getUserFriends(user);

  return (
    <div>
      <form
        action="@/components/post/CreatePostForm"
        className="border border-primary-rose rounded p-4 bg-primary dark:bg-dark-primary dark:border-0"
      >
        <div className="flex flex-col md:flex-row gap-2">
          <Avatar
            src={user?.imageURI}
            alt={user?.firstName + " " + user?.lastName}
            className="hidden md:block"
          />
          <div className="w-full flex flex-col gap-2">
            <textarea
              name="content"
              required
              placeholder="What do you think?"
              className="block w-full rounded-md border-0 px-2 py-1.5 text-primary-rose dark:text-dark-primary shadow-sm ring-1 dark:bg-dark-primary-light-blue ring-inset ring-primary-rose dark:ring-dark-primary-light-blue placeholder:text-primary-rose dark:placeholder:text-dark-primary sm:text-sm sm:leading-6"
            />
            <div className="flex flex-col gap-2">
              <FormControl className="w-full">
                <FormLabel className="text-primary-rose dark:text-dark-primary-light-blue">
                  @Mentions
                </FormLabel>
                <Autocomplete
                  multiple
                  id="tags-default"
                  placeholder="Favorites"
                  options={friends}
                  getOptionLabel={(user) =>
                    user.firstName + " " + user.lastName
                  }
                  defaultValue={[]}
                />
              </FormControl>
              <FormControl>
                <FormLabel className="text-primary-rose dark:text-dark-primary-light-blue">
                  Image URI
                </FormLabel>
                <input
                    type="text"
                    id="image-uri"
                    className={twMerge(
                        "block flex-1 border dark:border-0 border-secondary bg-white dark:bg-dark-primary-light-blue rounded py-1.5 px-2 text-primary-rose dark:text-dark-primary placeholder:text-primary-rose placeholder:dark:text-gray-800 focus:ring-0 sm:text-sm sm:leading-6",
                    )}
                    placeholder="Image URI"
                />
              </FormControl>
            </div>
          </div>
          <Button variant="solid" type="submit" className="self-start">
            Post
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreatePostForm;
