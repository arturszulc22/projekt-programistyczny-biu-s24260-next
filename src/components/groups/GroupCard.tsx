"use client";
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
import { useAuthStore } from "@/providers/auth-store-provider";
import StarIcon from "@mui/icons-material/Star";
import { useGroupsStore } from "@/providers/groups-store-provider";
import { useRouter } from "next/navigation";

const GroupCard: FC = ({ group }) => {
  const { push } = useRouter();
  const { user: auth } = useAuthStore((state) => state);
  const { addUserToGroup } = useGroupsStore((state) => state);
  const isUserInGroup =
    group.user.id === auth?.id ||
    group.users.some((user) => user.id === auth?.id);

  const handleAddUserToGroup = () => {
    addUserToGroup(group.id, auth);
    push("/group/" + group.id);
  };

  return (
    <Card
      sx={{
        width: 320,
        // to make the card resizable
        overflow: "auto",
      }}
      className="relative bg-primary border-primary-rose dark:bg-dark-primary dark:border-dark-primary"
    >
      {auth?.id === group.user.id && (
        <StarIcon className="absolute right-1 top-1 fill-yellow-600" />
      )}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Avatar src={group.user.imageURI} size="lg" />
        <AvatarGroup size="sm" sx={{ "--Avatar-size": "28px" }}>
          {group.users.length > 3 ? (
            <>
              {group.users.slice(0, 3).map((user) => (
                <Avatar src={user.imageURI} key={user.id} />
              ))}
              <Avatar>+{group.users.length - 3}</Avatar>
            </>
          ) : (
            <>
              {group.users.map((user) => (
                <Avatar src={user.imageURI} key={user.id} />
              ))}
            </>
          )}
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
        {isUserInGroup && (
          <Button component={Link} href={"/group/" + group.id} variant="solid">
            Open Group
          </Button>
        )}

        {!isUserInGroup && (
          <Button variant="solid" onClick={handleAddUserToGroup}>
            Join
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default GroupCard;
