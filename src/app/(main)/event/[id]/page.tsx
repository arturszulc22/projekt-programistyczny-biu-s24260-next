"use client";

import { FC } from "react";
import { Container, IconButton } from "@mui/material";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import ShareIcon from "@mui/icons-material/Share";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import { useAuthStore } from "@/providers/auth-store-provider";
import { useEventsStore } from "@/providers/events-store-provider";
import { notFound, useRouter } from "next/navigation";
import { Button } from "@mui/joy";
import { usePostsStore } from "@/providers/posts-store-provider";

const Event: FC = ({ params }: { params: { id: string } }) => {
  const { push } = useRouter();
  const { user: auth } = useAuthStore((state) => state);
  const { getEventById, addUserToEvent, removeEvent, removeUserFromEvent } =
    useEventsStore((state) => state);

  const event = getEventById(params.id);
  if (!event) notFound();

  const { getEventPosts } = usePostsStore((state) => state);
  const posts = getEventPosts(event);

  const isUserAuthor = event?.user?.id === auth?.id;

  const isUserInEvent =
    isUserAuthor || event?.users.some((user) => user.id === auth?.id);

  const handleAddUserToEvent = () => addUserToEvent(event.id, auth);
  const handleRemoveEvent = () =>
    removeEvent(event.id).then(() => push("/events"));

  const eventDate = new Date(event.dateTime);

  const getShortMonthName = (date) => {
    return date.toLocaleString("en-US", { month: "short" }).toUpperCase();
  };

  const getDay = (date) => {
    return date.getDate();
  };

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
    <Container className="py-10">
      <img
        src={event.imageURI}
        alt="test"
        className="w-full h-64 lg:h-96 lg:object-cover"
      />
      <div className="flex flex-col lg:flex-row items-center gap-4 mt-6 px-6">
        <div className="text-center">
          <p className="text-red-500 text-xl font-medium">
            {getShortMonthName(eventDate)}
          </p>
          <p className="text-gray-800 dark:text-dark-primary-light-blue text-3xl font-light">
            {getDay(eventDate)}
          </p>
        </div>
        <div className="text-center w-full">
          <h1 className="text-3xl text-primary-rose dark:text-dark-primary-light-blue">
            {event.name}
          </h1>
          <p className="text-xl text-secondary dark:text-dark-primary-light-blue">
            {event.shortDescription}
          </p>
        </div>
        <h2 className="flex w-full lg:w-auto items-center justify-start gap-3 text-nowrap text-primary-rose dark:text-dark-primary-light-blue ml-6">
          <PersonRoundedIcon className="w-8 h-8" />
          <Link href={"/profile/" + event.user.id}>{event.users.length}</Link>
        </h2>
        <p className="flex w-full lg:w-auto items-center justify-start gap-3 text-nowrap text-primary-rose dark:text-dark-primary-light-blue ml-6">
          <AccessTimeRoundedIcon className="w-8 h-8" />
          <span>{formatDate(eventDate)}</span>
        </p>
        <div className="flex gap-3">
          {isUserInEvent && (
            <Button
              variant="outlined"
              color="neutral"
              className="py-1 flex gap-3"
            >
              <ShareIcon /> Share
            </Button>
          )}
          {!isUserAuthor && (
            <IconButton aria-label="add to favorites">
              <FavoriteIcon
                onClick={() =>
                  isUserInEvent
                    ? removeUserFromEvent(event.id, auth)
                    : handleAddUserToEvent()
                }
                className={twMerge([
                  isUserInEvent && "fill-bg-red-500 stroke-2 fill-red-500",
                  !isUserInEvent &&
                    "stroke-primary dark:stroke-dark-primary-light-blue stroke-2 fill-transparent",
                ])}
              />
            </IconButton>
          )}
          {isUserAuthor && (
            <Button
              variant="solid"
              color="danger"
              className="py-1 flex gap-3 py-2"
              onClick={handleRemoveEvent}
            >
              <DeleteIcon />
            </Button>
          )}
        </div>
      </div>
      <div className="px-6 mt-6">
        <p className="text-primary-rose dark:text-dark-primary-light-blue">
          {event.description}
        </p>
      </div>
      <div className="px-6 mt-6 text-primary-rose dark:text-dark-primary-light-blue">
        <p className="font-bold">Hosted by:</p>
        <p className="text-lg">
          {event.user.firstName} {event.user.lastName}
        </p>
      </div>
    </Container>
  );
};

export default Event;
