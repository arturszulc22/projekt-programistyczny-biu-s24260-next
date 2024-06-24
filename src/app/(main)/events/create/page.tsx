"use client";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {Button, Typography} from "@mui/joy";
import {useAuthStore} from "@/providers/auth-store-provider";
import {useYupValidationResolver} from "@/resolvers/yupValidationResolver";
import {createEventValidationSchema} from "@/validations/event-validation-schema";
import {EventCreate, EventCreateFormData} from "@/interfaces/event";
import {useRouter} from "next/navigation";
import {useEventsStore} from "@/providers/events-store-provider";
import { v4 as uuidv4 } from 'uuid';

const EventCreate: FC = () => {
  const { push } = useRouter();
  const { user } = useAuthStore((state) => state);
  const { addEvent } = useEventsStore((state) => state);

  const resolver = useYupValidationResolver(createEventValidationSchema);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EventCreateFormData>({ resolver });

  const onSubmit: SubmitHandler<EventCreate> = (data) => {
    data.id = uuidv4();
    data.user = user;
    data.users = [];

    addEvent(data);
    reset();
    push("/events");
  };


  return (
    <div className="flex flex-col w-full justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="text-center text-primary-rose dark:text-dark-primary-light-blue font-bold text-4xl cursor-pointer text-nowrap">
          Create event
        </h1>
      </div>
      <div className="my-10 px-3 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-primary-rose dark:text-dark-primary-light-blue"
            >
              Event name
            </label>
            <div className="mt-2">
              <input
                id="name"
                {...register("name")}
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-primary-rose dark:text-dark-primary shadow-sm ring-1 dark:bg-dark-primary-light-blue
                ring-inset ring-primary-rose dark:ring-dark-primary-light-blue placeholder:text-primary-rose sm:text-sm sm:leading-6"
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
              htmlFor="date-time"
              className="block text-sm font-medium leading-6 text-primary-rose dark:text-dark-primary-light-blue"
            >
              Event date
            </label>
            <div className="mt-2">
              <input
                id="date-time"
                type="datetime-local"
                {...register("dateTime")}
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-primary-rose dark:text-dark-primary shadow-sm ring-1 dark:bg-dark-primary-light-blue
                ring-inset ring-primary-rose dark:ring-dark-primary-light-blue placeholder:text-primary-rose sm:text-sm sm:leading-6"
              />
            </div>
            {errors.dateTime && (
                <Typography color="danger" fontSize="sm">
                  {errors.dateTime.message}
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
                className="block w-full rounded-md border-0 px-2 py-1.5 text-primary-rose dark:text-dark-primary shadow-sm ring-1 dark:bg-dark-primary-light-blue
                ring-inset ring-primary-rose dark:ring-dark-primary-light-blue placeholder:text-primary-rose sm:text-sm sm:leading-6"
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
              htmlFor="description"
              className="block text-sm font-medium leading-6 text-primary-rose dark:text-dark-primary-light-blue"
            >
              Description
            </label>
            <div className="mt-2">
              <textarea
                id="description"
                {...register("description")}
                className="block w-full rounded-md border-0 px-2 py-1.5 text-primary-rose dark:text-dark-primary shadow-sm ring-1 dark:bg-dark-primary-light-blue
                ring-inset ring-primary-rose dark:ring-dark-primary-light-blue placeholder:text-primary-rose sm:text-sm sm:leading-6"
              />
            </div>
            {errors.description && (
                <Typography color="danger" fontSize="sm">
                  {errors.description.message}
                </Typography>
            )}
          </div>

          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium leading-6 text-primary-rose dark:text-dark-primary-light-blue"
            >
              Choose event image
            </label>
            <div className="mt-2">
              <input
                id="image"
                type="string"
                {...register("imageURI")}
                className="block w-full rounded-md border-0 px-2 py-1.5 text-primary-rose dark:text-dark-primary shadow-sm ring-1 dark:bg-dark-primary-light-blue
                ring-inset ring-primary-rose dark:ring-dark-primary-light-blue placeholder:text-primary-rose sm:text-sm sm:leading-6"
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

export default EventCreate;
