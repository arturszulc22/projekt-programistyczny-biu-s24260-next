"use client";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Typography } from "@mui/joy";
import { useYupValidationResolver } from "@/resolvers/yupValidationResolver";
import { createGroupValidationSchema } from "@/validations/group-validation-schema";
import { GroupCreate, GroupCreateFormData } from "@/interfaces/group";
import { twMerge } from "tailwind-merge";
import { useGroupsStore } from "@/providers/groups-store-provider";
import { useAuthStore } from "@/providers/auth-store-provider";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';

const GroupsCreate: FC = () => {
  const { push } = useRouter();
  const { user } = useAuthStore((state) => state);
  const { addGroup } = useGroupsStore((state) => state);

  const resolver = useYupValidationResolver(createGroupValidationSchema);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<GroupCreateFormData>({ resolver });

  const onSubmit: SubmitHandler<GroupCreate> = (data) => {
    data.id = uuidv4();
    data.user = user;
    data.users = [];

    addGroup(data);
    reset();
    push("/groups");
  };

  return (
    <div className="flex flex-col w-full justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="text-center text-primary-rose dark:text-dark-primary-light-blue font-bold text-4xl cursor-pointer text-nowrap">
          Create group
        </h1>
      </div>
      <div className="my-10 px-3 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-primary-rose dark:text-dark-primary-light-blue"
            >
              Group name
            </label>
            <div className="mt-2">
              <input
                id="name"
                {...register("name")}
                required
                className={twMerge(
                  "block w-full rounded-md border-0 px-2 py-1.5 text-primary-rose dark:text-dark-primary shadow-sm ring-1 dark:bg-dark-primary-light-blue ring-inset ring-primary-rose dark:ring-dark-primary-light-blue placeholder:text-primary-rose sm:text-sm sm:leading-6 focus-visible:outline-primary-rose dark:focus-visible:outline-dark-primary-light-blue",
                  errors.name && "ring-red-600 focus-visible:outline-red-600",
                )}
              />
            </div>
            {errors.name && (
              <Typography color="danger" fontSize="sm">
                {errors.name.message}
              </Typography>
            )}
          </div>

          <div>
            <label
              htmlFor="short-description"
              className="block text-sm font-medium leading-6 text-primary-rose dark:text-dark-primary-light-blue"
            >
              Short Description
            </label>
            <div className="mt-2">
              <textarea
                id="short-description"
                {...register("shortDescription")}
                required
                className={twMerge(
                  "block w-full rounded-md border-0 px-2 py-1.5 text-primary-rose dark:text-dark-primary shadow-sm ring-1 dark:bg-dark-primary-light-blue ring-inset ring-primary-rose dark:ring-dark-primary-light-blue placeholder:text-primary-rose sm:text-sm sm:leading-6 focus-visible:outline-primary-rose dark:focus-visible:outline-dark-primary-light-blue",
                  errors.shortDescription &&
                    "ring-red-600 focus-visible:outline-red-600",
                )}
              />
            </div>
            {errors.shortDescription && (
              <Typography color="danger" fontSize="sm">
                {errors.shortDescription.message}
              </Typography>
            )}
          </div>

          <div>
            <label
              htmlFor="short-description"
              className="block text-sm font-medium leading-6 text-primary-rose dark:text-dark-primary-light-blue"
            >
              Background Image Url
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="background-image"
                {...register("imageURI")}
                required
                className={twMerge(
                  "block w-full rounded-md border-0 px-2 py-1.5 text-primary-rose dark:text-dark-primary shadow-sm ring-1 dark:bg-dark-primary-light-blue ring-inset ring-primary-rose dark:ring-dark-primary-light-blue placeholder:text-primary-rose sm:text-sm sm:leading-6 focus-visible:outline-primary-rose dark:focus-visible:outline-dark-primary-light-blue",
                  errors.imageURI &&
                    "ring-red-600 focus-visible:outline-red-600",
                )}
              />
            </div>
            {errors.imageURI && (
              <Typography color="danger" fontSize="sm">
                {errors.imageURI.message}
              </Typography>
            )}
          </div>
          <div>
            <Button
              type="submit"
              variant="solid"
              className="flex w-full justify-center"
            >
              Create
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GroupsCreate;
