"use client";
import { FC, useState } from "react";
import { Container } from "@mui/system";
import PlusIcon from "@public/icons/plus.svg";
import EventsTab from "@/components/event/EventsTab";
import { Button, ToggleButtonGroup } from "@mui/joy";
import Link from "next/link";
import { useAuthStore } from "@/providers/auth-store-provider";
import { useEventsStore } from "@/providers/events-store-provider";

const Events: FC = () => {
  const { user: auth } = useAuthStore((state) => state);
  const { events } = useEventsStore((state) => state);
  const [alignment, setAlignment] = useState("following");

  const userEvents = events.filter(
    (event) =>
      event.user.id === auth?.id ||
      event.users.some((user) => user.id === auth?.id),
  );

  const otherGroups = events.filter(
    (event) =>
      event.user.id !== auth?.id &&
      !event.users.some((user) => user.id === auth?.id),
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
          <Button variant="plain" value="following">
            Following Events
          </Button>
          <Button variant="plain" value="others">
            Other Events
          </Button>
        </ToggleButtonGroup>

        <Button
          component={Link}
          variant="solid"
          href="event/create"
          className="flex items-center"
        >
          <PlusIcon className="w-8 h-8" />
        </Button>
      </div>

      {alignment === "following" && <EventsTab events={userEvents} />}
      {alignment === "others" && <EventsTab events={otherGroups} />}
    </Container>
  );
};

export default Events;
