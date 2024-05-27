import { FC } from "react";
import {Button} from "@mui/material";

const RegisterForm: FC = () => {
  return (
    <form className="space-y-6" action="#" method="POST">
      <div>
        <label
          htmlFor="firstName"
          className="block text-sm font-medium leading-6 text-primary-rose dark:text-dark-primary-light-blue"
        >
          First name
        </label>
        <div className="mt-2">
          <input
            id="first-name"
            name="firstName"
            type="text"
            autoComplete="username"
            required
            className="block w-full rounded-md border-0 px-2 py-1.5 text-primary-rose dark:text-dark-primary shadow-sm ring-1 dark:bg-dark-primary-light-blue
                ring-inset ring-primary-rose dark:ring-dark-primary-light-blue placeholder:text-primary-rose sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="lastName"
          className="block text-sm font-medium leading-6 text-primary-rose dark:text-dark-primary-light-blue"
        >
          Last Name
        </label>
        <div className="mt-2">
          <input
            id="last-name"
            name="lastName"
            type="text"
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
            name="email"
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
            name="password"
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
            htmlFor="repeatPassword"
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
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-primary-rose dark:bg-dark-secondary dark:border-2 dark:border-dark-primary-blue px-3 py-1.5 text-sm font-semibold leading-6 text-primary dark:text-dark-primary-light-blue shadow-sm"
        >
          Register
        </button>
      </div>
    </form>
  );
};


export default RegisterForm;