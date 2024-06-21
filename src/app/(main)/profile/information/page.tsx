"use client";

import { FC, useState } from "react";
import { Container } from "@mui/material";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuthStore } from "@/providers/auth-store-provider";
import { useYupValidationResolver } from "@/resolvers/yupValidationResolver";
import { userInformationFormValidationSchema } from "@/validations/auth-form-validation-schema";
import { UpdateUserInformationData } from "@/interfaces/auth";
import { twMerge } from "tailwind-merge";
import {
  Avatar,
  Snackbar,
  Typography,
} from "@mui/joy";

const UserProfile: FC = () => {
  const [preview, setPreview] = useState("");
  const { user, update } = useAuthStore((state) => state);
  const [state, setState] = useState({
    open: false,
    message: "",
    isError: false,
  });

  const resolver = useYupValidationResolver(
    userInformationFormValidationSchema,
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateUserInformationData>({ resolver });

  const onSubmit: SubmitHandler<UpdateUserInformationData> = async (data) => {
    try {
      await update(user, data);
      setState({
        open: true,
        message: "User has been updated!",
        isError: false,
      });
    } catch (e: Error) {
      setState({ open: true, message: "Something went wrong!", isError: true });
    }
  };

  return (
    <Container className="my-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 dark:border-dark-primary-light-blue pb-12 ">
            <h2 className="text-base font-semibold leading-7 text-primary-rose dark:text-dark-primary-light-blue">
              Profile
            </h2>
            <p className="mt-1 text-sm leading-6 text-primary-rose dark:text-gray-400 mb-2">
              This information will be displayed publicly so be careful what you
              share.
            </p>
            <Link
              href={"/profile/" + user?.id}
              className="bg-primary-rose dark:bg-dark-primary-blue text-primary dark:text-dark-primary-light-blue rounded-md px-3 py-2 text-sm font-medium"
            >
              Profile page
            </Link>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-primary-rose dark:text-dark-primary-light-blue"
                >
                  Username
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      {...register("userName")}
                      id="username"
                      autoComplete="username"
                      className={twMerge(
                        "block flex-1 border dark:border-0 border-secondary bg-white dark:bg-dark-primary-light-blue rounded py-1.5 px-2 text-primary-rose dark:text-dark-primary placeholder:text-primary-rose placeholder:dark:text-gray-800 focus:ring-0 sm:text-sm sm:leading-6",
                        errors.userName &&
                          "ring-red-600 focus-visible:outline-red-600",
                      )}
                      placeholder="john@doe"
                      defaultValue={user?.userName}
                    />
                  </div>
                  {errors.userName && (
                    <Typography color="danger" fontSize="sm">
                      {errors.userName.message}
                    </Typography>
                  )}
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-primary-rose dark:text-dark-primary-light-blue"
                >
                  About
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    {...register("shortDescription")}
                    rows={3}
                    className={twMerge(
                      "block w-full rounded-md border-0 py-1.5 px-2 text-primary-rose dark:text-dark-primary dark:bg-dark-primary-light-blue shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6",
                      errors.shortDescription &&
                        "ring-red-600 focus-visible:outline-red-600",
                    )}
                    defaultValue={user?.shortDescription}
                  />
                </div>
                {errors.shortDescription && (
                  <Typography color="danger" fontSize="sm">
                    {errors.shortDescription.message}
                  </Typography>
                )}
                <p className="mt-3 text-sm leading-6 text-primary-rose dark:text-dark-primary-light-blue">
                  Write a few sentences about yourself.
                </p>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="image-uri"
                  className="block text-sm font-medium leading-6 text-primary-rose dark:text-dark-primary-light-blue"
                >
                  Photo
                </label>
                <div className="mt-2 flex items-center gap-x-3">
                  <Avatar
                    src={preview || user?.imageURI}
                    className="h-12 w-12 text-primary-rose dark:text-dark-primary-light-blue"
                    aria-hidden="true"
                  />
                  <input
                      type="text"
                      {...register("imageURI")}
                      id="image-uri"
                      className={twMerge(
                          "block flex-1 border dark:border-0 border-secondary bg-white dark:bg-dark-primary-light-blue rounded py-1.5 px-2 text-primary-rose dark:text-dark-primary placeholder:text-primary-rose placeholder:dark:text-gray-800 focus:ring-0 sm:text-sm sm:leading-6",
                          errors.imageURI &&
                          "ring-red-600 focus-visible:outline-red-600",
                      )}
                      placeholder="Image URI"
                      defaultValue={user?.imageURI}
                      onChange={(e) => setPreview(e.target.value)}
                  />
                  {errors.imageURI && (
                    <Typography color="danger" fontSize="sm">
                      {errors.imageURI.message}
                    </Typography>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 dark:border-dark-primary-light-blue pb-12">
            <h2 className="text-base font-semibold leading-7 text-primary-rose dark:text-dark-primary-light-blue">
              Personal Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-primary-rose dark:text-gray-400">
              Use a permanent address where you can receive mail.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-primary-rose dark:text-dark-primary-light-blue"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    {...register("firstName")}
                    id="first-name"
                    autoComplete="given-name"
                    className={twMerge(
                      "block w-full rounded-md border-0 py-1.5 px-2 text-primary-rose dark:bg-dark-primary-light-blue border-0 dark:text-gray-800 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6",
                      errors.firstName &&
                        "ring-red-600 focus-visible:outline-red-600",
                    )}
                    defaultValue={user?.firstName}
                  />
                </div>
                {errors.firstName && (
                  <Typography color="danger" fontSize="sm">
                    {errors.firstName.message}
                  </Typography>
                )}
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-primary-rose dark:text-dark-primary-light-blue"
                >
                  Last name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    {...register("lastName")}
                    id="last-name"
                    className={twMerge(
                      "block w-full rounded-md border-0 py-1.5 px-2 text-primary-rose dark:bg-dark-primary-light-blue border-0 dark:text-gray-800 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6",
                      errors.lastName &&
                        "ring-red-600 focus-visible:outline-red-600",
                    )}
                    defaultValue={user?.lastName}
                  />
                </div>
                {errors.lastName && (
                  <Typography color="danger" fontSize="sm">
                    {errors.lastName.message}
                  </Typography>
                )}
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-primary-rose dark:text-dark-primary-light-blue"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    {...register("email")}
                    type="email"
                    autoComplete="email"
                    className={twMerge(
                      "block w-full rounded-md border-0 py-1.5 px-2 text-primary-rose dark:bg-dark-primary-light-blue border-0 dark:text-gray-800 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6",
                      errors.email &&
                        "ring-red-600 focus-visible:outline-red-600",
                    )}
                    defaultValue={user?.email}
                  />
                </div>
                {errors.email && (
                  <Typography color="danger" fontSize="sm">
                    {errors.email.message}
                  </Typography>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            className="flex justify-center rounded-md bg-primary-rose dark:bg-dark-secondary dark:border-2 dark:border-dark-primary-blue px-3 py-1.5 text-sm font-semibold leading-6 text-primary dark:text-dark-primary-light-blue shadow-sm"
          >
            Save
          </button>
        </div>
      </form>
      {state.open && (
        <Snackbar
          open={state.open}
          variant="plain"
          className={twMerge([
            !state.isError && "bg-green-300 color-green-600",
            state.isError && "bg-red-300",
          ])}
          onClick={() => setState({ ...state, open: false })}
        >
          {state.message}
        </Snackbar>
      )}
    </Container>
  );
};

export default UserProfile;
