import { FC } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Link,
  Typography,
} from "@mui/joy";
import { useUsersStore } from "@/providers/users-store-provider";
import { useAuthStore } from "@/providers/auth-store-provider";
import { User } from "@/interfaces/user";

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
      <Avatar
        src={
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
        }
        alt="test"
        size="lg"
      />
      <CardContent>
        <Typography fontSize="xl" fontWeight="lg">
          <Link
            overlay
            href={"/profile/" + user.id}
            className="text-primary-rose dark:text-dark-primary-light-blue hover:no-underline"
          >
            {user.firstName} {user.lastName} ({user.town})
          </Link>
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
