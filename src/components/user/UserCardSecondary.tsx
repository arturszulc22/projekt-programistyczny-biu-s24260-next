import { FC } from "react";
import {
  Avatar,
  Card,
  CardContent,
  Link as LinkJoy,
  Typography,
} from "@mui/joy";
import Link from "next/link";

const UserCardSecondary: FC = ({ user }) => {
  const truncate = (string, length = 120) => {
    return string.length > length
      ? string.substring(0, length) + "..."
      : string;
  };

  return (
    <Card
      orientation="horizontal"
      sx={{
        width: "100%",
        flexWrap: "wrap",
      }}
      className="bg-primary border-transparent dark:bg-dark-primary dark:border-dark-primary"
    >
      <Avatar src={user.imageURI} alt="test" size="lg" />
      <CardContent>
        <Typography fontSize="xl" fontWeight="lg">
          <LinkJoy
            overlay
            component={Link}
            href={"/profile/" + user.id}
            className="text-primary-rose dark:text-dark-primary-light-blue hover:no-underline"
          >
            {user.firstName} {user.lastName} ({user.town})
          </LinkJoy>
        </Typography>
        <Typography
          level="body-sm"
          fontWeight="lg"
          className="text-secondary dark:text-dark-primary-light-blue mb-3"
        >
          {user.shortDescription && truncate(user.shortDescription)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserCardSecondary;
