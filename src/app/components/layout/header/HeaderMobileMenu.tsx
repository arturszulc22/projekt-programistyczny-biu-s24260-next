import { FC } from "react";
import RingIcon from "@public/icons/ring.svg";
import { Button } from "@mui/joy";

const HeaderMobileMenu: FC = () => {
  return (
    <div className="md:hidden" id="mobile-menu">
      <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
        <Button
          component="a"
          variant="solid"
          href="/home"
          aria-current="page"
          className="w-full"
        >
          Homepage
        </Button>
      </div>
      <div className="border-t border-primary-rose dark:border-dark-primary-light-blue pb-3 pt-4">
        <div className="flex items-center px-5">
          <div className="flex-shrink-0">
            <img
              className="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div className="ml-3">
            <div className="text-primary-rose dark:text-dark-primary-light-blue font-medium leading-none">
              Tom Cook
            </div>
            <div className="text-sm text-primary-rose dark:text-dark-primary-light-blue font-medium leading-none">
              tom@example.com
            </div>
          </div>
          <button
            type="button"
            className="relative ml-auto flex-shrink-0 rounded-full bg-primary dark:bg-dark-primary-blue p-1 text-primary-rose dark:text-dark-primary-light-blue"
          >
            <span className="absolute -inset-1.5"></span>
            <span className="sr-only">View notifications</span>
            <RingIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="mt-3 space-y-1 px-2">
          <Button
            component="a"
            variant="plain"
            href="/profile/information"
            aria-current="page"
            className="w-full justify-start"
          >
            Your Profile
          </Button>
          <Button
            component="a"
            variant="plain"
            href="/profile/settings"
            aria-current="page"
            className="w-full justify-start"
          >
            Settings
          </Button>
          <Button
            component="a"
            variant="plain"
            href="/sign-out"
            aria-current="page"
            className="w-full justify-start"
          >
            Sign out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobileMenu;
