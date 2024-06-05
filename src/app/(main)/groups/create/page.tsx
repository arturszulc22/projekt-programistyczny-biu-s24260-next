"use client";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  description: string;
  shortDescription: string;
};

const GroupsCreate: FC = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="flex flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="text-center text-primary-rose dark:text-dark-primary-light-blue font-bold text-4xl cursor-pointer text-nowrap">
          Create group
        </h1>
      </div>
      <div className="my-10 px-3 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-primary-rose dark:text-dark-primary-light-blue"
            >
              Group name
            </label>
            <div className="mt-2">
              <input
                id="first-name"
                {...register("name")}
                autoComplete="username"
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-primary-rose dark:text-dark-primary shadow-sm ring-1 dark:bg-dark-primary-light-blue
                ring-inset ring-primary-rose dark:ring-dark-primary-light-blue placeholder:text-primary-rose sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-primary-rose dark:text-dark-primary-light-blue"
            >
              Short Description
            </label>
            <div className="mt-2">
              <textarea
                id="last-name"
                {...register("shortDescription")}
                autoComplete="username"
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-primary-rose dark:text-dark-primary shadow-sm ring-1 dark:bg-dark-primary-light-blue
                ring-inset ring-primary-rose dark:ring-dark-primary-light-blue placeholder:text-primary-rose sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-primary-rose dark:text-dark-primary-light-blue"
            >
              Description
            </label>
            <div className="mt-2">
              <textarea
                id="last-name"
                {...register("description")}
                autoComplete="username"
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-primary-rose dark:text-dark-primary shadow-sm ring-1 dark:bg-dark-primary-light-blue
                ring-inset ring-primary-rose dark:ring-dark-primary-light-blue placeholder:text-primary-rose sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-primary-rose dark:bg-dark-secondary dark:border-2 dark:border-dark-primary-blue px-3 py-1.5 text-sm font-semibold leading-6 text-primary dark:text-dark-primary-light-blue shadow-sm"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GroupsCreate;
