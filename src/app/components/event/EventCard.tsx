"use client";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

import { FC, useState } from "react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

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
      sx={{ maxWidth: 345 }}
      className="bg-primary dark:bg-dark-primary text-primary-rose dark:text-dark-primary-light-blue w-full"
    >
      <Link href={"/event/" + event.id}>
        <CardHeader
          avatar={<Avatar src={event.user.imageURI}></Avatar>}
          title={event.user.firstName + " " + event.user.secondName}
          subheader={formatDate(eventDate)}
          classes={{
            title:
              "text-primary-rose dark:text-dark-primary-light-blue font-bold",
            subheader: "text-primary-rose dark:text-dark-primary-light-blue",
          }}
        />
        <CardMedia
          component="img"
          className="h-36 object-cover"
          image={event.image}
          alt="Paella dish"
        />
        <CardContent>
          <Typography
            variant="body2"
            className="text-primary-rose dark:text-dark-primary-light-blue"
          >
            {event.shortDescription}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
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
              ])}
            />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon className="fill-primary-rose dark:fill-dark-primary-light-blue" />
          </IconButton>
        </CardActions>
      </Link>
    </Card>
  );
};

export default EventCard;
