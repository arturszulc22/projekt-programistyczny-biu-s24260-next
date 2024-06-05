"use client";

import { FC, useState } from "react";
import {Container, ToggleButton, ToggleButtonGroup} from "@mui/material";
import GroupsTab from "@/app/components/groups/GroupsTab";
import Link from "next/link";
import PlusIcon from "@public/icons/plus.svg";

const Groups: FC = () => {
  const [alignment, setAlignment] = useState("user");

  const handleChange = (event: MouseEvent, newAlignment: string) => {
    setAlignment(newAlignment != null ? newAlignment : "user");
  };

  const groups = [
    {
      id: 1,
      name: "Tech Enthusiasts",
      shortDescription:
        "A group for people who love discussing the latest in technology.",
    },
    {
      id: 2,
      name: "Fitness Buffs",
      shortDescription:
        "Join this group to share fitness tips and workout routines.",
    },
    {
      id: 3,
      name: "Book Club",
      shortDescription:
        "A community for book lovers to discuss their favorite reads.",
    },
  ];

  return (
    <Container className="py-10">
      <div className="flex gap-2">
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton
            className="border-0 bg-primary dark:bg-dark-primary-blue aria-pressed:bg-secondary aria-pressed:dark:bg-dark-primary text-secondary dark:text-dark-primary-light-blue aria-pressed:text-primary aria-pressed:dark:text-primary-light-blue font-bold"
            value="user"
          >
            Your Groups
          </ToggleButton>
          <ToggleButton
            className="border-0 bg-primary dark:bg-dark-primary-blue aria-pressed:bg-secondary aria-pressed:dark:bg-dark-primary text-secondary dark:text-dark-primary-light-blue aria-pressed:text-primary aria-pressed:dark:text-primary-light-blue font-bold"
            value="other"
          >
            Other Groups
          </ToggleButton>
        </ToggleButtonGroup>
        <Link
          href="groups/create"
          className="bg-primary-rose dark:bg-dark-primary-blue text-primary dark:text-dark-primary-light-blue rounded-md px-2 py-1 text-md font-medium flex items-center"
        >
          <PlusIcon className="w-8 h-8"/>
        </Link>
      </div>

      {alignment === "user" && <GroupsTab groups={groups} />}
      {alignment === "other" && <GroupsTab groups={groups} />}
    </Container>
  );
};

export default Groups;
