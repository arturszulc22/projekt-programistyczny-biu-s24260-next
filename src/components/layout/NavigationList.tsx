"use client";
import { FC } from "react";

import {
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
} from "@mui/joy";

import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import ChatIcon from "@mui/icons-material/Chat";
import { usePathname } from "next/navigation";

import FriendsList from "@/components/layout/FriendsList";
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
    {
      decorator: <ChatIcon />,
      text: "Messages",
      href: "/messages",
    },
  ];

  return (
    <div className="h-content sticky top-16 flex flex-col hidden md:block bg-primary dark:bg-dark-primary border-t border-primary-rose dark:border-dark-primary-light-blue">
      <List
        size="sm"
        sx={{
          gap: 1,
          "--List-nestedInsetStart": "30px",
        }}
        className="p-4"
      >
        {listItems.map((item, index) => {
          return (
            <ListItem className="rounded" key={index}>
              <ListItemButton
                role="menuitem"
                className="rounded"
                component={Link}
                href={item.href}
                aria-current={pathname === item.href}
              >
                {item.decorator}
                <ListItemContent>{item.text}</ListItemContent>
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
