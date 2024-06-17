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
            {user.firstName} {user.secondName}
          </Link>
        </Typography>
        <Typography
          level="body-sm"
          fontWeight="lg"
          className="text-secondary dark:text-dark-primary-light-blue mb-3"
        >
          {truncate(user.shortDescription)}
        </Typography>
        <Box sx={{ display: "flex", gap: 1.5, "& > button": { flex: 1 } }}>
          <Button
            variant="outlined"
            color="neutral"
            className="border-primary-rose dark:border-dark-primary-blue text-primary-rose dark:text-dark-primary-blue px-3 py-2 text-sm font-medium rounded-md"
          >
            Chat
          </Button>
          <Button
            variant="solid"
            className="bg-primary-rose dark:bg-dark-primary-blue text-primary px-3 py-2 text-sm font-medium rounded-md dark:text-dark-primary-light-blue"
          >
            Follow
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default UserCardSecondary;
