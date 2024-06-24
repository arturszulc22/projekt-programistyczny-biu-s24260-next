"use client";
import { FC } from "react";
import {
  AspectRatio,
  Card,
  CardContent,
  CardOverflow,
  Divider,
  IconButton,
  Typography,
  Link as JoyLink,
} from "@mui/joy";
import Link from "next/link";
import { Favorite } from "@mui/icons-material";
import { twMerge } from "tailwind-merge";
import { useAuthStore } from "@/providers/auth-store-provider";
import { useRouter } from "next/navigation";
import { useEventsStore } from "@/providers/events-store-provider";

const EventCard: FC = ({ event }) => {
  const { push } = useRouter();
  const { user: auth } = useAuthStore((state) => state);
  const { addUserToEvent, removeUserFromEvent } = useEventsStore(
    (state) => state,
  );
  const isUserAuthor = event.user.id === auth?.id;
  const isUserInEvent =
    isUserAuthor || event.users.some((user) => user.id === auth?.id);

  const handleAddUserToEvent = () => {
    addUserToEvent(event.id, auth);
    push("/event/" + event.id);
  };

  const eventDate = new Date(event.dateTime);

  const formatDate = (date) => {
    const pad = (num) => String(num).padStart(2, "0");

    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());

    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };

  return (
    <Card
      variant="outlined"
      sx={{ width: 320 }}
      className="bg-primary border-primary-rose dark:bg-dark-primary dark:border-dark-primary"
    >
      <CardOverflow>
        <AspectRatio ratio="2">
          <img src={event.imageURI} loading="lazy" alt="" />
        </AspectRatio>
        {!isUserAuthor && (
          <IconButton
            aria-label="Like minimal photography"
            size="md"
            variant="solid"
            sx={{
              position: "absolute",
              zIndex: 2,
              borderRadius: "50%",
              right: "1rem",
              bottom: 0,
              transform: "translateY(50%)",
            }}
            className="bg-secondary dark:bg-dark-primary-blue"
            onClick={() =>
              isUserInEvent
                ? removeUserFromEvent(event.id, auth)
                : handleAddUserToEvent()
            }
          >
            <Favorite
              className={twMerge([
                isUserInEvent && "fill-bg-red-500 stroke-2 fill-red-500",
                !isUserInEvent &&
                  "stroke-primary dark:stroke-dark-primary-light-blue stroke-2 fill-transparent",
              ])}
            />
          </IconButton>
        )}
      </CardOverflow>
      <CardContent>
        <Typography level="title-md">
          <JoyLink
            overlay
            href={"/event/" + event.id}
            underline="none"
            component={Link}
            className="text-primary-rose dark:text-dark-primary-light-blue"
          >
            {event.name}
          </JoyLink>
        </Typography>
        <Typography
          level="body-sm"
          className="text-primary-rose dark:text-dark-primary-light-blue"
        >
          {event.shortDescription}
        </Typography>
      </CardContent>
      <CardOverflow
        variant="soft"
        className="bg-primary border-primary-rose dark:bg-dark-primary dark:border-dark-primary"
      >
        <Divider inset="context" />
        <CardContent orientation="horizontal">
          <Typography
            level="body-xs"
            className="text-primary-rose dark:text-dark-primary-light-blue"
          >
            {event.users.length} users
          </Typography>
          <Divider orientation="vertical" />
          <Typography
            level="body-xs"
            className="text-primary-rose dark:text-dark-primary-light-blue"
          >
            {formatDate(eventDate)}
          </Typography>
        </CardContent>
      </CardOverflow>
    </Card>
  );
};

export default EventCard;
