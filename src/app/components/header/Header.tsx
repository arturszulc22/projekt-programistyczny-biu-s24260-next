"use client";
import { FC, useState } from "react";
import HeaderMobileMenu from "@/app/components/header/HeaderMobileMenu";
import HeaderProfilePopup from "@/app/components/header/HeaderProfilePopup";
import RingIcon from "@public/icons/ring.svg";
import XIcon from "@public/icons/x.svg";
import HamburgerMenuIcon from "@public/icons/hamburger-menu-icon.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

const Header: FC = () => {
  const [isHeaderMobileMenuOpen, setIsHeaderMobileMenuOpen] = useState(false);
  const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);

  const pathname = usePathname();

  const links = [
    {
      href: "/home",
      name: "Homepage",
    },
    {
      href: "/groups",
      name: "Groups",
    },
    {
      href: "/following",
      name: "Community",
    },
    {
      href: "/events",
      name: "Events"
    }
  ];

  return (
    <header>
      <nav className="bg-primary dark:bg-dark-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-primary-rose dark:text-dark-primary-light-blue font-bold text-2xl cursor-pointer">
                  Instagran
                </h1>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {links.map(({ href, name }, index) => (
                    <Link
                      href={href}
                      key={index}
                      className={twMerge(
                        pathname === href
                          ? "bg-primary-rose dark:bg-dark-primary-blue text-primary"
                          : "text-primary-rose",
                        "px-3 py-2 text-sm font-medium rounded-md dark:text-dark-primary-light-blue",
                      )}
                      aria-current="page"
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <button
                  type="button"
                  className="relative rounded-full text-primary-rose dark:text-dark-primary-light-blue"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">View notifications</span>
                  <RingIcon className="h-6 w-6" />
                </button>

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
