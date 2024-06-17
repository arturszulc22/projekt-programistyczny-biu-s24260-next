import { FC } from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/joy";
import Link from "next/link";

const GroupCard: FC = ({ group }) => {
  return (
    <Card
      sx={{
        width: 320,
        // to make the card resizable
        overflow: "auto",
      }}
      className="bg-primary border-primary-rose dark:bg-dark-primary dark:border-dark-primary"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Avatar src="/static/images/avatar/1.jpg" size="lg" />
        <AvatarGroup size="sm" sx={{ "--Avatar-size": "28px" }}>
          <Avatar src="/static/images/avatar/2.jpg" />
          <Avatar src="/static/images/avatar/3.jpg" />
          <Avatar src="/static/images/avatar/4.jpg" />
          <Avatar>+4K</Avatar>
        </AvatarGroup>
      </Box>
      <CardContent>
        <Typography
          level="title-lg"
          className="text-primary-rose dark:text-dark-primary-light-blue"
        >
          {group.name}
        </Typography>
        <Typography
          level="body-sm"
          className="text-primary-rose dark:text-dark-primary-light-blue"
        >
          {group.shortDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} href={"/group/" + group.id} variant="solid">
          Join
        </Button>
      </CardActions>
    </Card>
  );
};

export default GroupCard;
