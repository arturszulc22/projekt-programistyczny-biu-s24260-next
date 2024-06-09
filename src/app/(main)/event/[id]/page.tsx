"use client";

import { FC, useState } from "react";
import { Container, IconButton } from "@mui/material";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";

const Event: FC = ({ params }: { params: { id: string } }) => {
  const [isLiked, setIsLiked] = useState(false);

  const event = {
    id: 5,
    name: "Science Fair",
    shortDescription: "Interactive science fair",
    description:
      "An interactive science fair showcasing experiments, projects, and demonstrations from students and scientists. The event aims to inspire a love for science in people of all ages.",
    dateTime: "2024-11-10T10:00:00Z",
    image:
      "https://images.unsplash.com/photo-1717241365608-5565eef72d89?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    user: {
      id: 1,
      firstName: "Jan",
      secondName: "Kowalski",
      imageURI:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  };

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
    const seconds = pad(date.getSeconds());

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  return (
    <Container className="py-10">
      <img
        src={event.image}
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
          <h1 className="text-3xl text-primary-rose dark:text-dark-primary-light-blue">{event.name}</h1>
          <p className="text-xl text-secondary dark:text-dark-primary-light-blue">{event.shortDescription}</p>
        </div>
        <h2 className="flex w-full lg:w-auto items-center justify-start gap-3 text-nowrap text-primary-rose dark:text-dark-primary-light-blue ml-6">
          <PersonRoundedIcon className="w-8 h-8" />
          <Link href={"/profile/" + event.user.id}>{"10k"}</Link>
        </h2>
        <p className="flex w-full lg:w-auto items-center justify-start gap-3 text-nowrap text-primary-rose dark:text-dark-primary-light-blue ml-6">
          <AccessTimeRoundedIcon className="w-8 h-8" />
          <span>{formatDate(eventDate)}</span>
        </p>
        <div className="flex">
          <IconButton aria-label="add to favorites">
            <FavoriteIcon
              onClick={(e) => {
                e.preventDefault();
                setIsLiked(!isLiked);
              }}
              className={twMerge([
                isLiked && "fill-bg-red-500 stroke-2 fill-red-500",
                !isLiked &&
                  "stroke-primary-rose dark:stroke-dark-primary-light-blue stroke-2 fill-transparent",
                "w-8 h-8",
              ])}
            />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon className="fill-primary-rose dark:fill-dark-primary-light-blue w-8 h-8" />
          </IconButton>
        </div>
      </div>
      <div className="px-6 mt-6">
        <p className="text-primary-rose dark:text-dark-primary-light-blue">{event.description}</p>
      </div>
      <div className="px-6 mt-6 text-primary-rose dark:text-dark-primary-light-blue">
        <p className="font-bold">Hosted by:</p>
        <p className="text-lg">
          {event.user.firstName} {event.user.secondName}
        </p>
      </div>
    </Container>
  );
};

export default Event;
