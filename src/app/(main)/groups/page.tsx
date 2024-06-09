"use client";

import { FC, useState } from "react";
import GroupsTab from "@/app/components/groups/GroupsTab";
import PlusIcon from "@public/icons/plus.svg";
import { Button, Container, ToggleButtonGroup } from "@mui/joy";

const Groups: FC = () => {
  const [alignment, setAlignment] = useState("user");

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
          onChange={(event, newValue) =>
            newValue !== null && setAlignment(newValue)
          }
        >
          <Button variant="plain" value="user">
            Following Group
          </Button>
          <Button variant="plain" value="others">
            Other Groups
          </Button>
        </ToggleButtonGroup>
        <Button
          component="a"
          variant="solid"
          href="groups/create"
          className="flex items-center"
        >
          <PlusIcon className="w-8 h-8" />
        </Button>
      </div>

      {alignment === "user" && <GroupsTab groups={groups} />}
      {alignment === "others" && <GroupsTab groups={groups} />}
    </Container>
  );
};

export default Groups;
