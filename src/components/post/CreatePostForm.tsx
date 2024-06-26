"use client";
import { FC, useState } from "react";
import { Avatar, Button, FormControl, FormLabel, Typography } from "@mui/joy";
import { useAuthStore } from "@/providers/auth-store-provider";
import { useUsersStore } from "@/providers/users-store-provider";
import { twMerge } from "tailwind-merge";
import { useYupValidationResolver } from "@/resolvers/yupValidationResolver";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  PostFormDataInterface,
  postValidationSchema,
} from "@/validations/post-validation-schema";
import { usePostsStore } from "@/providers/posts-store-provider";
import { useNotificationsStore } from "@/providers/notifications-store-provider";
import { v4 as uuidv4 } from "uuid";

const CreatePostForm: FC = ({
  type = null,
  typeId = null,
}: {
  type: string;
  typeId: string;
}) => {
  const [selectedFriends, setSelectedFriends] = useState([]);

  const { user } = useAuthStore((state) => state);
  const { getUserFriends } = useUsersStore((state) => state);
  const { createPost } = usePostsStore((state) => state);
  const { addNotification } = useNotificationsStore((state) => state);

  const friends = getUserFriends(user);

  const resolver = useYupValidationResolver(postValidationSchema);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PostFormDataInterface>({ resolver });

  if (!user) return;

  const onSubmit: SubmitHandler<PostFormDataInterface> = (data) => {
    const attachedUsers = friends.filter((friend) =>
      selectedFriends.includes(friend.id),
    );

    createPost({
      ...data,
      attachedUsers: attachedUsers,
      idGroupPost: type === "group" ? typeId : null,
      idEventPost: type === "event" ? typeId : null,
      user: user,
    });

    attachedUsers &&
      attachedUsers.forEach((attachedUser) => {
        const notification = {
          id: uuidv4(),
          user: attachedUser,
          sender: user,
          description: "You were mentioned in a post",
          createdAt: new Date().toISOString(),
          isRead: false,
        };
        addNotification(notification);
      });

    reset();
  };
  const handleSelectionChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(
      (option) => option.value,
    );
    setSelectedFriends(selectedOptions);
  };

  return (
    <div>
      <form
        action="@/components/post/CreatePostForm"
        onSubmit={handleSubmit(onSubmit)}
        className="border border-primary-rose rounded p-4 bg-primary dark:bg-dark-primary dark:border-0"
      >
        <div className="flex flex-col md:flex-row gap-2">
          <Avatar
              alt={user?.firstName}
              className="h-12 w-12 rounded-full object-cover"
              src={user?.imageURI}
          />
          <div className="w-full flex flex-col gap-2">
            <textarea
              name="content"
              {...register("content")}
              required
              placeholder="What do you think?"
              className={twMerge(
                "block w-full rounded-md border-0 px-2 py-1.5 text-primary-rose dark:text-dark-primary shadow-sm ring-1 dark:bg-dark-primary-light-blue ring-inset ring-primary-rose dark:ring-dark-primary-light-blue placeholder:text-primary-rose dark:placeholder:text-dark-primary sm:text-sm sm:leading-6",
                errors.content && "ring-red-600 focus-visible:outline-red-600",
              )}
            />
            {errors.content && (
              <Typography color="danger" fontSize="sm">
                {errors.content.message}
              </Typography>
            )}
            <div className="flex flex-col gap-2">
              <FormControl className="w-full">
                <FormLabel className="text-primary-rose dark:text-dark-primary-light-blue">
                  @Mentions
                </FormLabel>
                <select
                  id="friends"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  multiple={true}
                  onChange={handleSelectionChange}
                >
                  {friends.map((friend) => (
                    <option key={friend.id} value={friend.id}>
                      {friend.firstName} {friend.lastName}
                    </option>
                  ))}
                </select>
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
                    errors.imageURI &&
                      "ring-red-600 focus-visible:outline-red-600",
                  )}
                  {...register("imageURI")}
                  placeholder="Image URI"
                />
                {errors.imageURI && (
                  <Typography color="danger" fontSize="sm">
                    {errors.imageURI.message}
                  </Typography>
                )}
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
