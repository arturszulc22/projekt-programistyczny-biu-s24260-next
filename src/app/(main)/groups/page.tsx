"use client";

import { FC, useState } from "react";
import GroupsTab from "@/components/groups/GroupsTab";
import PlusIcon from "@public/icons/plus.svg";
import { Button, Container, ToggleButtonGroup } from "@mui/joy";
import Link from "next/link";
import { useGroupsStore } from "@/providers/groups-store-provider";
import { useAuthStore } from "@/providers/auth-store-provider";

const Groups: FC = () => {
  const { user: auth } = useAuthStore((state) => state);
  const { groups } = useGroupsStore((state) => state);
  const [alignment, setAlignment] = useState("user");

  const userGroups = groups.filter(
    (group) =>
      group.user.id === auth?.id ||
      group.users.some((user) => user.id === auth?.id),
  );

  const otherGroups = groups.filter(
    (group) =>
      group.user.id !== auth?.id &&
      !group.users.some((user) => user.id === auth?.id),
  );

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
          component={Link}
          variant="solid"
          href="groups/create"
          className="flex items-center"
        >
          <PlusIcon className="w-8 h-8" />
        </Button>
      </div>

      {alignment === "user" && <GroupsTab groups={userGroups} />}
      {alignment === "others" && <GroupsTab groups={otherGroups} />}
    </Container>
  );
};

export default Groups;
