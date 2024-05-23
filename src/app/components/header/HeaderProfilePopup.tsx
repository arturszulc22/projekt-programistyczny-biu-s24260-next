import {FC} from "react";

const HeaderProfilePopup: FC = () => {
    return (
        <div
            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-primary dark:bg-dark-primary-blue py-1 shadow-lg ring-1 ring-primary-rose dark:ring-dark-primary-light-blue ring-opacity-4"
            role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button"
            tabIndex="-1">
            <a href="@/components/organisms/HeaderProfilePopup#" className="block px-4 py-2 text-sm text-primary-rose dark:text-dark-primary-light-blue" role="menuitem"
               tabIndex="-1" id="user-menu-item-0">Your Profile</a>
            <a href="@/components/organisms/HeaderProfilePopup#" className="block px-4 py-2 text-sm text-primary-rose dark:text-dark-primary-light-blue" role="menuitem"
               tabIndex="-1" id="user-menu-item-1">Settings</a>
            <a href="@/components/organisms/HeaderProfilePopup#" className="block px-4 py-2 text-sm text-primary-rose dark:text-dark-primary-light-blue" role="menuitem"
               tabIndex="-1" id="user-menu-item-2">Sign out</a>
        </div>
    );
};

export default HeaderProfilePopup;