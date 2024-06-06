import { FC } from "react";
import {
  AspectRatio,
  Box,
  Button,
  Card,
  CardContent,
  Link,
  Sheet,
  Typography,
} from "@mui/joy";

const UserCard: FC = ({ user }) => {
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
      className="bg-primary border-primary-rose dark:bg-dark-primary dark:border-dark-primary"
    >
      <AspectRatio flex ratio="1" maxHeight={182} sx={{ minWidth: 182 }}>
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
          srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
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
          className="text-secondary dark:text-dark-primary-light-blue"
        >
          {user.shortDescription}
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
          className="bg-primary-rose dark:bg-dark-primary-blue"
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
              Followers
            </Typography>
            <Typography
              fontWeight="lg"
              className="text-primary dark:text-dark-primary-light-blue"
            >
              980
            </Typography>
          </div>
          <div>
            <Typography
              level="body-xs"
              fontWeight="lg"
              className="text-primary dark:text-dark-primary-light-blue"
            >
              Following
            </Typography>
            <Typography
              fontWeight="lg"
              className="text-primary dark:text-dark-primary-light-blue"
            >
              12k
            </Typography>
          </div>
        </Sheet>
        <Box sx={{ display: "flex", gap: 1.5, "& > button": { flex: 1 } }}>
          <Button variant="outlined" color="neutral">
            Chat
          </Button>
          <Button variant="solid">Follow</Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default UserCard;
