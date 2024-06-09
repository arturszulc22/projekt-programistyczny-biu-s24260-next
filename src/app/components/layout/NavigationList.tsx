"use client";
import { FC } from "react";

import {
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  ListItemDecorator,
} from "@mui/joy";

import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { usePathname } from "next/navigation";

import FriendsList from "@/app/components/layout/FriendsList";
import Link from "next/link";

const NavigationList: FC = () => {
  const pathname = usePathname();

  const listItems = [
    {
      decorator: <HomeIcon />,
      text: "Home",
      href: "/home",
    },
    {
      decorator: <GroupsIcon />,
      text: "Groups",
      href: "/groups",
    },
    {
      decorator: <EmojiEventsIcon />,
      text: "Events",
      href: "/events",
    },
    {
      decorator: <PeopleAltIcon />,
      text: "People",
      href: "/following",
    },
  ];

  return (
    <div className="min-h-content flex flex-col hidden md:block bg-primary dark:bg-dark-primary border-t border-primary-rose dark:border-dark-primary-light-blue">
      <List>
        {listItems.map((item) => {
          return (
            <ListItem>
              <ListItemButton
                component={Link}
                href={item.href}
                className="px-5 py-2"
                aria-active={pathname === item.href}
              >
                <ListItemDecorator>{[item.decorator]}</ListItemDecorator>
                <ListItemContent className="font-bold text-md pl-5 pr-10">
                  {item.text}
                </ListItemContent>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <FriendsList />
    </div>
  );
};

export default NavigationList;
