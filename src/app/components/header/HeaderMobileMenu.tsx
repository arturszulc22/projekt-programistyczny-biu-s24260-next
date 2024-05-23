import { FC } from "react";

const HeaderMobileMenu: FC = () => {
  return (
    <div className="md:hidden" id="mobile-menu">
      <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
        <a
          href="#"
          className="bg-primary-rose dark:bg-dark-primary-blue text-primary dark:text-dark-primary-light-blue block rounded-md px-3 py-2 text-base font-medium"
          aria-current="page"
        >
          Homepage
        </a>
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
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </button>
        </div>
        <div className="mt-3 space-y-1 px-2">
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-primary-rose dark:text-dark-primary-light-blue"
          >
            Your Profile
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-primary-rose dark:text-dark-primary-light-blue"
          >
            Settings
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-primary-rose dark:text-dark-primary-light-blue"
          >
            Sign out
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobileMenu;
