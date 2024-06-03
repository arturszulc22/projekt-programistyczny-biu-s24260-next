import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import Link from "next/link";

const GroupCard: FC = ({ group }) => {
  return (
    <Card
      sx={{ maxWidth: 345 }}
      className="bg-primary dark:bg-dark-primary text-primary-rose dark:text-dark-primary-light-blue"
    >
      <Link href={"/groups/" + group.id}>
        <CardMedia
          sx={{ height: 140 }}
          image={group.image}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {group.name}
          </Typography>
          <Typography
            variant="body2"
            className="dark:text-dark-primary-light-blue"
          >
            {group.shortDescription}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default GroupCard;
