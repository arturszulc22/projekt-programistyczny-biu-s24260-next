"use client";
import { FC, useState } from "react";
import { Badge, Button, Typography } from "@mui/joy";

import HeaderMobileMenu from "@/app/components/layout/header/HeaderMobileMenu";
import HeaderProfilePopup from "@/app/components/layout/header/HeaderProfilePopup";

import XIcon from "@public/icons/x.svg";
import HamburgerMenuIcon from "@public/icons/hamburger-menu-icon.svg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Header: FC = () => {
  const [isHeaderMobileMenuOpen, setIsHeaderMobileMenuOpen] = useState(false);
  const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 shadow-sm">
      <nav className="bg-primary dark:bg-dark-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-primary-rose dark:text-dark-primary-light-blue font-bold text-2xl cursor-pointer">
                  Instagran
                </h1>
              </div>
            </div>
            <div className="ml-auto mr-2">
              <Button variant="plain" className="p-1">
                <SearchIcon className="fill-primary-rose dark:fill-dark-primary-light-blue h-6 w-6" />
              </Button>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-0">
                <Button variant="plain" className="p-1">
                  <Badge badgeContent={4} size="sm" className="text-xs">
                    <Typography>
                      <NotificationsIcon className="fill-primary-rose dark:fill-dark-primary-light-blue" />
                    </Typography>
                  </Badge>
                </Button>

                <div className="relative ml-3">
                  <div>
                    <button
                      type="button"
                      className="relative flex max-w-xs items-center rounded-full bg-primary-rose text-sm"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                      onClick={() => setIsProfilePopupOpen(!isProfilePopupOpen)}
                    >
                      <span className="absolute -inset-1.5"></span>
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="profile"
                      />
                    </button>
                  </div>
                  {isProfilePopupOpen && <HeaderProfilePopup />}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md bg-primary dark:bg-dark-primary-blue p-2 text-primary-rose dark:text-dark-primary-light-blue"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() =>
                  setIsHeaderMobileMenuOpen(!isHeaderMobileMenuOpen)
                }
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <HamburgerMenuIcon
                  className={`${isHeaderMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                />
                <XIcon
                  className={`${isHeaderMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                />
              </button>
            </div>
          </div>
        </div>

        {isHeaderMobileMenuOpen && <HeaderMobileMenu />}
      </nav>
    </header>
  );
};

export default Header;
