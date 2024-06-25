"use client";
import { FC, useState } from "react";
import { Badge, Button, Typography } from "@mui/joy";

import HeaderMobileMenu from "@/components/layout/header/HeaderMobileMenu";
import HeaderProfilePopup from "@/components/layout/header/HeaderProfilePopup";

import XIcon from "@public/icons/x.svg";
import HamburgerMenuIcon from "@public/icons/hamburger-menu-icon.svg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Link from "next/link";
import { createPortal } from "react-dom";
import SearchModal from "@/components/modals/SearchModal";
import NotificationModal from "@/components/modals/NotificationModal";
import { useAuthStore } from "@/providers/auth-store-provider";
import { useRouter } from "next/navigation";

const Header: FC = () => {
  const { user, logout } = useAuthStore((state) => state);
  const { push } = useRouter();
  const [isHeaderMobileMenuOpen, setIsHeaderMobileMenuOpen] = useState(false);
  const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);

  const logoutUser = async () => {
    await logout();
    push("/login");
  };

  return (
    <header className="sticky top-0 z-20 shadow-sm">
      <nav className="bg-primary dark:bg-dark-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Typography
                  component={Link}
                  href="/home"
                  className="text-primary-rose dark:text-dark-primary-light-blue font-bold text-2xl cursor-pointer"
                >
                  Instagran
                </Typography>
              </div>
            </div>
            <div className="ml-auto mr-2">
              <Button
                variant="plain"
                className="p-1"
                onClick={() => setIsSearchModalOpen(true)}
              >
                <SearchIcon className="fill-primary-rose dark:fill-dark-primary-light-blue h-6 w-6" />
              </Button>
            </div>
            <div className="mr-5 md:mr-0">
              <div className="ml-4 flex items-center md:ml-0">
                <Button
                  variant="plain"
                  className="p-1"
                  onClick={() => setIsNotificationModalOpen(true)}
                >
                  <Badge badgeContent={4} size="sm" className="text-xs">
                    <Typography>
                      <NotificationsIcon className="fill-primary-rose dark:fill-dark-primary-light-blue" />
                    </Typography>
                  </Badge>
                </Button>

                <div className="relative ml-3 hidden md:block">
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
                        src={user?.imageURI}
                        alt="profile"
                      />
                    </button>
                  </div>
                  {isProfilePopupOpen && (
                    <HeaderProfilePopup logout={() => logoutUser()} />
                  )}
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

        {isHeaderMobileMenuOpen && (
          <HeaderMobileMenu user={user} logout={() => logoutUser()} />
        )}

        {isSearchModalOpen &&
          createPortal(
            <SearchModal
              isOpen={isSearchModalOpen}
              onCloseModal={() => setIsSearchModalOpen(false)}
            />,
            document.body,
          )}

        {isNotificationModalOpen &&
          createPortal(
            <NotificationModal
              isOpen={isNotificationModalOpen}
              onCloseModal={() => setIsNotificationModalOpen(false)}
            />,
            document.body,
          )}
      </nav>
    </header>
  );
};

export default Header;
