import { FC } from "react";
import Link from "next/link";

const Register: FC = () => {
  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-primary-gray dark:bg-dark-primary">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="text-center text-primary-rose dark:text-dark-primary-light-blue font-bold text-4xl cursor-pointer">
          Instagran
        </h1>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-primary-rose dark:text-dark-primary-light-blue">
          Create your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
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

        <p className="mt-10 text-center text-sm text-gray-500">
          Do you have an account?
          <Link
            href="/login"
            className="font-semibold ml-2 leading-6 text-primary-rose dark:text-dark-primary-light-blue"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
