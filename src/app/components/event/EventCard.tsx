"use client";
import { FC, useState } from "react";
import Link from "next/link";
import {
  AspectRatio,
  Card,
  CardContent,
  CardOverflow,
  Divider,
  IconButton,
  Typography,
} from "@mui/joy";
import { Favorite } from "@mui/icons-material";
import {twMerge} from "tailwind-merge";

const EventCard: FC = ({ event }) => {
  const [isLiked, setIsLiked] = useState(false);

  const eventDate = new Date(event.dateTime);

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
    <Card
      variant="outlined"
      sx={{ width: 320 }}
      className="bg-primary border-primary-rose dark:bg-dark-primary dark:border-dark-primary"
    >
      <CardOverflow>
        <AspectRatio ratio="2">
          <img
            src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
            srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
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
          onClick={() => setIsLiked(!isLiked)}
        >
          <Favorite
              className={twMerge([
                isLiked && "fill-bg-red-500 stroke-2 fill-red-500",
                !isLiked &&
                "stroke-primary dark:stroke-dark-primary-light-blue stroke-2 fill-transparent",
              ])}
          />
        </IconButton>
      </CardOverflow>
      <CardContent>
        <Typography
          level="title-md"
          className="text-primary-rose dark:text-dark-primary-light-blue"
        >
          <Link href="#multiple-actions" underline="none">
            {event.name}
          </Link>
        </Typography>
        <Typography
          level="body-sm"
          className="text-primary-rose dark:text-dark-primary-light-blue"
        >
          <Link href="#multiple-actions">{event.shortDescription}</Link>
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
            6.3k views
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
