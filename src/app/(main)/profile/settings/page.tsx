"use client";

import { FC } from "react";

import {
  Container,
  FormControl,
  FormLabel,
  Radio,
  radioClasses,
  RadioGroup,
  Sheet,
  Switch,
} from "@mui/joy";
import VerticalSplitIcon from "@mui/icons-material/VerticalSplit";
import DarkModeToggle from "@/components/layout/DarkModeToggle";
import { useAuthStore } from "@/providers/auth-store-provider";

const UserSettings: FC = () => {
  const { user, update } = useAuthStore((state) => state);

  const updateUserLayout = (layout) => {
    const userSettings = {
      settings: {
        ...user?.settings,
      },
    };
    userSettings.settings.app.layout = layout;

    update(user, userSettings);
  };

  const updateUserNotification = (isNotificationEnabled) => {
    const userSettings = {
      settings: {
        ...user?.settings,
      },
    };
    userSettings.settings.app.isNotificationEnabled = isNotificationEnabled;

    update(user, userSettings);
  };

  const updateUserProfilePrivacy = (isPrivate) => {
    const userSettings = {
      settings: {
        ...user?.settings,
      },
    };
    userSettings.settings.profile.isPrivate = isPrivate;

    update(user, userSettings);
  };

  return (
    <Container className="my-10">
      <h2 className="text-base font-semibold leading-7 text-primary-rose dark:text-dark-primary-light-blue mb-6">
        Application Settings
      </h2>

      <div className="border-b border-gray-900/10 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8">
        <div>
          <h2 className="text-base font-semibold leading-7 text-primary-rose dark:text-dark-primary-light-blue">
            Dark Mode
          </h2>
          <div>
            <DarkModeToggle />
          </div>
        </div>
        <div>
          <div>
            <FormControl>
              <FormLabel className="text-base font-semibold leading-7 text-primary-rose dark:text-dark-primary-light-blue">
                Layout
              </FormLabel>
              <RadioGroup
                aria-label="platform"
                value={user?.settings?.app.layout}
                overlay
                name="layout"
                className="mt-10"
                onChange={(e) => updateUserLayout(e.target.value)}
                sx={{
                  flexDirection: "row",
                  gap: 2,
                  [`& .${radioClasses.checked}`]: {
                    [`& .${radioClasses.action}`]: {
                      inset: -1,
                      border: "3px solid",
                      borderColor: "primary.500",
                    },
                  },
                  [`& .${radioClasses.radio}`]: {
                    display: "contents",
                    "& > svg": {
                      zIndex: 2,
                      position: "absolute",
                      top: "-8px",
                      right: "-8px",
                      bgcolor: "background.surface",
                      borderRadius: "50%",
                    },
                  },
                }}
              >
                <Sheet
                  variant="outlined"
                  sx={{
                    borderRadius: "md",

                    boxShadow: "sm",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1.5,
                    p: 2,
                    minWidth: 120,
                  }}
                >
                  <FormLabel htmlFor="left-layout">
                    <Radio
                      id="left-layout"
                      value="left"
                      disableIcon
                    />
                  </FormLabel>
                  <VerticalSplitIcon className="rotate-180 fill-primary-rose dark:fill-dark-primary" />
                </Sheet>
                <Sheet
                  variant="outlined"
                  sx={{
                    borderRadius: "md",
                    boxShadow: "sm",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1.5,
                    p: 2,
                    minWidth: 120,
                  }}
                >
                  <FormLabel htmlFor="right-layout">
                    <Radio
                      id="right-layout"
                      value="right"
                      disableIcon
                    />
                  </FormLabel>
                  <VerticalSplitIcon className="fill-primary-rose dark:fill-dark-primary" />
                </Sheet>
              </RadioGroup>
            </FormControl>
          </div>
        </div>
      </div>

      <form className="pt-12">
        <div className="space-y-12">
          <div className="pb-12">
            <h2 className="text-base font-semibold leading-7 text-primary-rose dark:text-dark-primary-light-blue">
              Notifications
            </h2>
            <p className="mt-1 text-sm leading-6 text-primary-rose dark:text-dark-primary-light-blue">
              We'll always let you know about important changes, but you pick
              what else you want to hear about.
            </p>

            <Switch
              className="mt-3"
              checked={user?.settings.app.isNotificationEnabled}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                updateUserNotification(event.target.checked)
              }
            />
          </div>
        </div>
      </form>

      <form>
        <div className="space-y-12">
          <div className="pb-12">
            <h2 className="text-base font-semibold leading-7 text-primary-rose dark:text-dark-primary-light-blue">
              Private profile
            </h2>
            <p className="mt-1 text-sm leading-6 text-primary-rose dark:text-dark-primary-light-blue">
              Set profile to private to hide your post, and set them followers
              only.
            </p>

            <Switch
              className="mt-3"
              checked={user?.settings.profile.isPrivate}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                updateUserProfilePrivacy(event.target.checked)
              }
            />
          </div>
        </div>
      </form>
    </Container>
  );
};

export default UserSettings;
