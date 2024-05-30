import { FC } from "react";
import UserCircleIcon from "@public/icons/user-circle-icon.svg";
import { Container } from "@mui/material";
import Link from "next/link";

const UserProfile: FC = () => {
  return (
    <Container className="my-10">
      <form>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 dark:border-dark-primary-light-blue pb-12 ">
            <h2 className="text-base font-semibold leading-7 text-primary-rose dark:text-dark-primary-light-blue">
              Profile
            </h2>
            <p className="mt-1 text-sm leading-6 text-primary-rose dark:text-gray-400 mb-2">
              This information will be displayed publicly so be careful what you
              share.
            </p>
            <Link href="/profile/12" className="bg-primary-rose dark:bg-dark-primary-blue text-primary dark:text-dark-primary-light-blue rounded-md px-3 py-2 text-sm font-medium">
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
                      name="username"
                      id="username"
                      autoComplete="username"
                      className="block flex-1 border dark:border-0 border-secondary bg-white dark:bg-dark-primary-light-blue rounded py-1.5 px-2 text-primary-rose dark:text-dark-primary placeholder:text-primary-rose placeholder:dark:text-gray-800 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="john@doe"
                    />
                  </div>
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
                    name="about"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-primary-rose dark:text-dark-primary dark:bg-dark-primary-light-blue shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-primary-rose dark:text-dark-primary-light-blue">
                  Write a few sentences about yourself.
                </p>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="photo"
                  className="block text-sm font-medium leading-6 text-primary-rose dark:text-dark-primary-light-blue"
                >
                  Photo
                </label>
                <div className="mt-2 flex items-center gap-x-3">
                  <UserCircleIcon
                    className="h-12 w-12 text-primary-rose dark:text-dark-primary-light-blue"
                    aria-hidden="true"
                  />
                  <button
                    type="button"
                    className="rounded-md bg-white dark:bg-dark-primary-light-blue dark:border-0 px-2.5 py-1.5 text-sm font-semibold text-primary-rose dark:text-dark-primary shadow-sm hover:bg-gray-50"
                  >
                    Change
                  </button>
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
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-primary-rose dark:bg-dark-primary-light-blue border-0 dark:text-gray-800 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
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
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-primary-rose dark:bg-dark-primary-light-blue border-0 dark:text-gray-800 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
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
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-primary-rose dark:bg-dark-primary-light-blue border-0 dark:text-gray-800 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-primary-rose dark:text-dark-primary-light-blue"
                >
                  Country
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-primary-rose dark:bg-dark-primary-light-blue border-0 dark:text-gray-800 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium leading-6 text-primary-rose dark:text-dark-primary-light-blue"
                >
                  Street address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="street-address"
                    id="street-address"
                    autoComplete="street-address"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-primary-rose dark:bg-dark-primary-light-blue border-0 dark:text-gray-800 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-primary-rose dark:text-dark-primary-light-blue"
                >
                  City
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-primary-rose dark:bg-dark-primary-light-blue border-0 dark:text-gray-800 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="region"
                  className="block text-sm font-medium leading-6 text-primary-rose dark:text-dark-primary-light-blue"
                >
                  State / Province
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="region"
                    id="region"
                    autoComplete="address-level1"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-primary-rose dark:bg-dark-primary-light-blue border-0 dark:text-gray-800 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium leading-6 text-primary-rose dark:text-dark-primary-light-blue"
                >
                  ZIP / Postal code
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="postal-code"
                    id="postal-code"
                    autoComplete="postal-code"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-primary-rose dark:bg-dark-primary-light-blue border-0 dark:text-gray-800 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-primary-rose dark:text-dark-primary-light-blue"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex justify-center rounded-md bg-primary-rose dark:bg-dark-secondary dark:border-2 dark:border-dark-primary-blue px-3 py-1.5 text-sm font-semibold leading-6 text-primary dark:text-dark-primary-light-blue shadow-sm"
          >
            Save
          </button>
        </div>
      </form>
    </Container>
  );
};

export default UserProfile;
