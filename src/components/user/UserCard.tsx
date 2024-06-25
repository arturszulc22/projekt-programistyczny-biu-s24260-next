import { FC } from "react";
import {
  AspectRatio,
  Box,
  Button,
  Card,
  CardContent,
  Link as JoyLink,
  Sheet,
  Typography,
} from "@mui/joy";
import Link from "next/link";

const UserCard: FC = ({
  user,
  isUserFriend,
  isAuthUserSendRequest,
  isUserSendRequest,
  addFriendRequest,
  addFriend,
  removeFriend,
}) => {
  const truncate = (string, length = 80) => {
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
      className="bg-primary border-primary-rose dark:bg-dark-primary dark:border-dark-primary"
    >
      <AspectRatio flex ratio="1" maxHeight={182} sx={{ minWidth: 182 }}>
        <img src={user.imageURI} loading="lazy" alt={user.firstName} />
      </AspectRatio>
      <CardContent>
        <Typography fontSize="xl" fontWeight="lg">
          <JoyLink
            component={Link}
            overlay
            href={"/profile/" + user.id}
            className="text-primary-rose dark:text-dark-primary-light-blue hover:no-underline"
          >
            {user.firstName} {user.lastName}
          </JoyLink>
        </Typography>
        <Typography
          level="body-sm"
          fontWeight="lg"
          className="text-secondary dark:text-dark-primary-light-blue"
        >
          {user.shortDescription && truncate(user.shortDescription)}
        </Typography>
        <Sheet
          sx={{
            bgcolor: "background.level1",
            borderRadius: "sm",
            p: 1.5,
            my: 1.5,
            display: "flex",
            gap: 2,
            "& > div": { flex: 1 },
          }}
          className="bg-primary-rose dark:bg-dark-primary-blue mt-auto"
        >
          <div>
            <Typography
              level="body-xs"
              fontWeight="lg"
              className="text-primary dark:text-dark-primary-light-blue"
            >
              Posts
            </Typography>
            <Typography
              fontWeight="lg"
              className="text-primary dark:text-dark-primary-light-blue"
            >
              34
            </Typography>
          </div>
          <div>
            <Typography
              level="body-xs"
              fontWeight="lg"
              className="text-primary dark:text-dark-primary-light-blue"
            >
              Friends
            </Typography>
            <Typography
              fontWeight="lg"
              className="text-primary dark:text-dark-primary-light-blue"
            >
              {user.friends.length}
            </Typography>
          </div>
        </Sheet>
        <Box sx={{ display: "flex", gap: 1.5, "& > button": { flex: 1 } }}>
          {isUserFriend && (
            <>
              <Button variant="outlined" color="neutral">
                Chat
              </Button>
              <Button
                variant="solid"
                className="bg-primary-rose dark:bg-dark-primary-blue text-primary px-3 py-2 text-sm font-medium rounded-md dark:text-dark-primary-light-blue"
                onClick={removeFriend}
              >
                Unfollow
              </Button>
            </>
          )}

          {!isUserFriend && !isAuthUserSendRequest && !isUserSendRequest && (
            <Button
              variant="solid"
              className="bg-primary-rose dark:bg-dark-primary-blue text-primary px-3 py-2 text-sm font-medium rounded-md dark:text-dark-primary-light-blue"
              onClick={addFriendRequest}
            >
              Follow
            </Button>
          )}

          {!isUserFriend && isAuthUserSendRequest && (
            <Button
              variant="solid"
              className="bg-primary-rose dark:bg-dark-primary-blue text-primary px-3 py-2 text-sm font-medium rounded-md dark:text-dark-primary-light-blue"
              onClick={removeFriend}
            >
              Delete request
            </Button>
          )}

          {!isUserFriend && isUserSendRequest && (
            <>
              <Button
                variant="solid"
                color="success"
                className="px-3 py-2 text-sm font-medium rounded-md"
                onClick={addFriend}
              >
                Add
              </Button>
              <Button
                variant="solid"
                color="danger"
                className="px-3 py-2 text-sm font-medium rounded-md"
                onClick={removeFriend}
              >
                Delete request
              </Button>
            </>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default UserCard;
