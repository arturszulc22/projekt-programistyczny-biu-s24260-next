"use client";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@mui/joy";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatPassword: string;
};

const RegisterForm: FC = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label
          htmlFor="first-name"
          className="block text-sm font-medium leading-6 text-primary-rose dark:text-dark-primary-light-blue"
        >
          First name
        </label>
        <div className="mt-2">
          <input
            id="first-name"
            {...register("firstName")}
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
          Last Name
        </label>
        <div className="mt-2">
          <input
            id="last-name"
            {...register("lastName")}
            autoComplete="username"
            required
            className="block w-full rounded-md border-0 px-2 py-1.5 text-primary-rose dark:text-dark-primary shadow-sm ring-1 dark:bg-dark-primary-light-blue
                ring-inset ring-primary-rose dark:ring-dark-primary-light-blue placeholder:text-primary-rose sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
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
            required
            className="block w-full rounded-md border-0 px-2 py-1.5 text-primary-rose dark:text-dark-primary shadow-sm ring-1 dark:bg-dark-primary-light-blue
                ring-inset ring-primary-rose dark:ring-dark-primary-light-blue placeholder:text-primary-rose sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-primary-rose dark:text-dark-primary-light-blue"
          >
            Password
          </label>
        </div>
        <div className="mt-2">
          <input
            id="password"
            {...register("password")}
            type="password"
            autoComplete="current-password"
            required
            className="block w-full rounded-md border-0 px-2 py-1.5 text-primary-rose dark:text-dark-primary shadow-sm ring-1 dark:bg-dark-primary-light-blue
                ring-inset ring-primary-rose dark:ring-dark-primary-light-blue placeholder:text-primary-rose sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="repeat-password"
            className="block text-sm font-medium leading-6 text-primary-rose dark:text-dark-primary-light-blue"
          >
            Repeat Password
          </label>
        </div>
        <div className="mt-2">
          <input
            id="repeat-password"
            name="repeatPassword"
            type="password"
            autoComplete="current-password"
            required
            className="block w-full rounded-md border-0 px-2 py-1.5 text-primary-rose dark:text-dark-primary shadow-sm ring-1 dark:bg-dark-primary-light-blue
                ring-inset ring-primary-rose dark:ring-dark-primary-light-blue placeholder:text-primary-rose sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <Button
          type="submit"
          variant="solid"
          className="flex w-full justify-center"
        >
          Register
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
