import { FC } from "react";
import { Button } from "@mui/joy";
import { usePathname } from "next/navigation";
import Link from "next/link";

const HeaderMobileMenu: FC = ({ user, logout }) => {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/home" },
    { name: "Groups", href: "/groups" },
    { name: "Events", href: "/events" },
    { name: "People", href: "/following" },
  ];

  return (
    <div className="md:hidden" id="mobile-menu">
      <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
        {links.map(({ name, href }, index) => (
          <Button
            component={Link}
            variant={href === pathname ? "solid" : "plain"}
            href={href}
            key={index}
            aria-current="page"
            className="w-full"
          >
            {name}
          </Button>
        ))}
      </div>
      <div className="border-t border-primary-rose dark:border-dark-primary-light-blue pb-3 pt-4">
        <div className="flex items-center px-5">
          <div className="flex-shrink-0">
            <img
              className="h-10 w-10 rounded-full object-cover"
              src={user?.imageURI}
              alt={user?.firstName + " " + user?.lastName}
            />
          </div>
          <div className="ml-3">
            <div className="text-primary-rose dark:text-dark-primary-light-blue font-medium leading-none">
              {user?.firstName + " " + user?.lastName}
            </div>
            <div className="text-sm text-primary-rose dark:text-dark-primary-light-blue font-medium leading-none">
              {user?.email}
            </div>
          </div>
        </div>
        <div className="mt-3 space-y-1 px-2">
          <Button
            component={Link}
            variant="plain"
            href="/profile/information"
            aria-current="page"
            className="w-full justify-start"
          >
            Your Profile
          </Button>
          <Button
            component={Link}
            variant="plain"
            href="/profile/settings"
            aria-current="page"
            className="w-full justify-start"
          >
            Settings
          </Button>
          <Button
            variant="plain"
            onClick={logout}
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
