"use client";

import { FC, useState } from "react";
import UserTab from "@/components/user/UserTab";
import { Button, Container, ToggleButtonGroup } from "@mui/joy";
import { useUsersStore } from "@/providers/users-store-provider";
import { useAuthStore } from "@/providers/auth-store-provider";

const Following: FC = () => {
  const [alignment, setAlignment] = useState("other");
  const { user: auth } = useAuthStore((state) => state);
  const { getUserFriends, getOtherPeople, getUserFriendsRequests } =
    useUsersStore((state) => state);

  return (
    <Container className="py-10">
      <div className="flex gap-2">
        <ToggleButtonGroup
          value={alignment}
          onChange={(event, newValue) =>
            newValue !== null && setAlignment(newValue)
          }
          className="h-12"
        >
          <Button variant="plain" value="user">
            Friends
          </Button>
          <Button variant="plain" value="other">
            Community
          </Button>
          <Button variant="plain" value="requests">
            Requests
          </Button>
        </ToggleButtonGroup>
      </div>

      {alignment === "user" && <UserTab users={getUserFriends(auth)} />}
      {alignment === "other" && <UserTab users={getOtherPeople(auth)} />}
      {alignment === "requests" && (
        <UserTab users={getUserFriendsRequests(auth)} />
      )}
    </Container>
  );
};

export default Following;
