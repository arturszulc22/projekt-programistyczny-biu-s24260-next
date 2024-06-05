"use client";

import { FC, useState } from "react";
import { Button, Container, IconButton, ToggleButtonGroup } from "@mui/joy";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import DashboardIcon from "@mui/icons-material/Dashboard";
import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import GridViewIcon from "@mui/icons-material/GridView";

const UserSettings: FC = () => {
  const [value, setValue] = useState<null | string>("column");

  return (
    <Container className="my-10">
      <h2 className="text-base font-semibold leading-7 text-primary-rose dark:text-dark-primary-light-blue mb-6">
        Application Settings
      </h2>

      <form>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8">
            <div>
              <h2 className="text-base font-semibold leading-7 text-primary-rose dark:text-dark-primary-light-blue">
                Dark Mode
              </h2>
              <div>
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
                  <div className="border-primary-rose border-2 p-1">
                    <div className="w-full bg-primary flex rounded">
                      <LightModeIcon className="w-10 h-10 mx-auto fill-primary-rose my-20" />
                    </div>
                  </div>
                  <div className="border-dark-primary dark:border-dark-primary-light-blue border-2 p-1">
                    <div className="w-full bg-dark-primary dark:bg-dark-primary-light-blue flex rounded">
                      <DarkModeIcon className="w-10 h-10 mx-auto fill-dark-primary-light-blue dark:fill-dark-primary my-20" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-base font-semibold leading-7 text-primary-rose dark:text-dark-primary-light-blue">
                Layout
              </h2>
              <div>
                <ToggleButtonGroup
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  className="mt-10 grid grid-cols-1 sm:grid-cols-3"
                >
                  <IconButton value="dashboard" className="bg-primary dark:bg-dark-primary-blue border-primary-rose dark:border-dark-primary-light-blue aria-pressed:bg-secondary dark:aria-pressed:bg-dark-secondary">
                    <DashboardIcon className="fill-primary-rose dark:fill-dark-primary-light-blue"/>
                  </IconButton>
                  <IconButton value="column" className="bg-primary dark:bg-dark-primary-blue border-primary-rose dark:border-dark-primary-light-blue aria-pressed:bg-secondary dark:aria-pressed:bg-dark-secondary">
                    <ViewColumnIcon className="fill-primary-rose dark:fill-dark-primary-light-blue"/>
                  </IconButton>
                  <IconButton value="grid" className="bg-primary dark:bg-dark-primary-blue border-primary-rose dark:border-dark-primary-light-blue aria-pressed:bg-secondary dark:aria-pressed:bg-dark-secondary">
                    <GridViewIcon className="fill-primary-rose dark:fill-dark-primary-light-blue"/>
                  </IconButton>
                </ToggleButtonGroup>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-primary-rose dark:text-dark-primary-light-blue">
              Notifications
            </h2>
            <p className="mt-1 text-sm leading-6 text-primary-rose dark:text-dark-primary-light-blue">
              We'll always let you know about important changes, but you pick
              what else you want to hear about.
            </p>

            <div className="mt-10 space-y-10">
              <fieldset>
                <legend className="text-sm font-semibold leading-6 text-primary-rose dark:text-dark-primary-light-blue">
                  By Email
                </legend>
                <div className="mt-6 space-y-6">
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="comments"
                        name="comments"
                        type="checkbox"
                        className="h-6 w-6 rounded accent-primary-rose dark:accent-dark-primary"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="comments"
                        className="font-medium text-primary-rose dark:text-dark-primary-light-blue"
                      >
                        Comments
                      </label>
                      <p className="text-primary-rose dark:text-dark-primary-light-blue">
                        Get notified when someones posts a comment on a posting.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="candidates"
                        name="candidates"
                        type="checkbox"
                        className="h-6 w-6 rounded border-gray-300 accent-primary-rose dark:accent-dark-primary"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="candidates"
                        className="font-medium text-primary-rose dark:text-dark-primary-light-blue"
                      >
                        Candidates
                      </label>
                      <p className="text-primary-rose dark:text-dark-primary-light-blue">
                        Get notified when a candidate applies for a job.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="offers"
                        name="offers"
                        type="checkbox"
                        className="h-6 w-6 rounded border-gray-300 accent-primary-rose dark:accent-dark-primary"
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="offers"
                        className="font-medium text-primary-rose dark:text-dark-primary-light-blue"
                      >
                        Offers
                      </label>
                      <p className="text-primary-rose dark:text-dark-primary-light-blue">
                        Get notified when a candidate accepts or rejects an
                        offer.
                      </p>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <legend className="text-sm font-semibold leading-6 text-primary-rose dark:text-dark-primary-light-blue">
                  Push Notifications
                </legend>
                <p className="mt-1 text-sm leading-6 text-primary-rose dark:text-dark-primary-light-blue">
                  These are delivered via SMS to your mobile phone.
                </p>
                <div className="mt-6 space-y-6">
                  <div className="flex items-center gap-x-3">
                    <input
                      id="push-everything"
                      name="push-notifications"
                      type="radio"
                      className="h-6 w-4 accent-primary-rose dark:accent-dark-primary"
                    />
                    <label
                      htmlFor="push-everything"
                      className="block text-sm font-medium leading-6 text-primary-rose dark:text-dark-primary-light-blue"
                    >
                      Everything
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="push-email"
                      name="push-notifications"
                      type="radio"
                      className="h-6 w-4 accent-primary-rose dark:accent-dark-primary"
                    />
                    <label
                      htmlFor="push-email"
                      className="block text-sm font-medium leading-6 text-primary-rose dark:text-dark-primary-light-blue"
                    >
                      Same as email
                    </label>
                  </div>
                  <div className="flex items-center gap-x-3">
                    <input
                      id="push-nothing"
                      name="push-notifications"
                      type="radio"
                      className="h-6 w-4 accent-primary-rose dark:accent-dark-primary"
                    />
                    <label
                      htmlFor="push-nothing"
                      className="block text-sm font-medium leading-6 text-primary-rose dark:text-dark-primary-light-blue"
                    >
                      No push notifications
                    </label>
                  </div>
                </div>
              </fieldset>
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
            className="bg-primary-rose dark:bg-dark-primary-blue text-primary px-3 py-2 text-sm font-medium rounded-md dark:text-dark-primary-light-blue"
          >
            Save
          </button>
        </div>
      </form>
    </Container>
  );
};

export default UserSettings;
