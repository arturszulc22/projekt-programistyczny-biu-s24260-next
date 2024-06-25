import { FC } from "react";
import Link from "next/link";

const HeaderProfilePopup: FC = ({ logout }) => {
  return (
    <div
      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-primary dark:bg-dark-primary py-1 shadow-lg ring-1 ring-primary-rose dark:ring-dark-primary-light-blue ring-opacity-4"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu-button"
      tabIndex="-1"
    >
      <Link
        href="/profile/information"
        className="block px-4 py-2 text-sm text-primary-rose dark:text-dark-primary-light-blue"
        role="menuitem"
        tabIndex="-1"
        id="user-menu-item-0"
      >
        Your Profile
      </Link>
      <Link
        href="/profile/settings"
        className="block px-4 py-2 text-sm text-primary-rose dark:text-dark-primary-light-blue"
        role="menuitem"
        tabIndex="-1"
        id="user-menu-item-1"
      >
        Settings
      </Link>
      <a
        onClick={logout}
        className="block px-4 py-2 text-sm text-primary-rose dark:text-dark-primary-light-blue cursor-pointer"
        role="menuitem"
        tabIndex="-1"
        id="user-menu-item-2"
      >
        Sign out
      </a>
    </div>
  );
};

export default HeaderProfilePopup;
