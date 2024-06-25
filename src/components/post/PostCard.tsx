import {
  AspectRatio,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardOverflow,
  IconButton,
  Input,
  Link,
  List,
  Typography,
} from "@mui/joy";
import {
  Face,
  Favorite,
  ModeCommentOutlined,
  MoreHoriz,
  SendOutlined,
} from "@mui/icons-material";
import CommentItem from "@/components/comment/CommentItem";
import { twMerge } from "tailwind-merge";

export const PostCard = ({ post }) => {
  const daysAgo = (createdAt) => {
    const createdDate = new Date(createdAt);
    const currentDate = new Date();

    const timeDifference = currentDate - createdDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference;
  };

  return (
    <Card
      sx={{
        minWidth: 280,
      }}
      className="bg-primary border-primary-rose dark:bg-dark-primary dark:border-dark-primary"
    >
      <CardContent
        orientation="horizontal"
        sx={{ alignItems: "center", gap: 1 }}
      >
        <Box
          sx={{
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            },
          }}
        >
          <Avatar size="lg" src={post.user.imageURI} />
        </Box>
        <Typography fontWeight="lg">
          <Link
            className="text-primary-rose dark:text-dark-primary-light-blue no-underline"
            href={"/profile/" + post.user.id}
            underline="none"
          >
            {post.user.firstName} {post.user.lastName}
          </Link>
        </Typography>
        <IconButton
          className="text-primary-rose dark:text-dark-primary-light-blue"
          size="sm"
          sx={{ ml: "auto" }}
        >
          <MoreHoriz />
        </IconButton>
      </CardContent>
      <CardOverflow>
        <AspectRatio>
          <img
            src={post.imageURI}
            alt={post.user.firstName + " " + post.user.lastName}
            loading="lazy"
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent
        orientation="horizontal"
        sx={{ alignItems: "center", mx: -1 }}
      >
        <Box sx={{ width: 0, display: "flex", gap: 0.5 }}>
          <IconButton
            variant="plain"
            className="text-primary-rose dark:text-dark-primary-light-blue"
            size="sm"
          >
            <Favorite
              className={twMerge(
                "stroke-2",
                true &&
                  "stroke-primary-rose dark:stroke-dark-primary-light-blue fill-transparent",
                false && "stroke-red-500 fill-red-500",
              )}
            />
          </IconButton>
          <IconButton
            variant="plain"
            className="text-primary-rose dark:text-dark-primary-light-blue"
            size="sm"
          >
            <ModeCommentOutlined />
          </IconButton>
          <IconButton
            variant="plain"
            className="text-primary-rose dark:text-dark-primary-light-blue"
            size="sm"
          >
            <SendOutlined />
          </IconButton>
        </Box>
      </CardContent>
      <CardContent>
        <div className="flex gap-3">
          <Link
            className="text-primary-rose dark:text-dark-primary-light-blue"
            component="button"
            underline="none"
            fontSize="sm"
            fontWeight="lg"
          >
            {post.likes.length} Likes
          </Link>
          <Link
            className="text-primary-rose dark:text-dark-primary-light-blue"
            component="button"
            underline="none"
            fontSize="sm"
            fontWeight="lg"
          >
            {post.comments.length} comments
          </Link>
        </div>
        <Typography
          fontSize="sm"
          className="text-primary-rose dark:text-dark-primary-light-blue"
        >
          <Link
            component="button"
            color="neutral"
            fontWeight="lg"
            className="text-primary-rose dark:text-dark-primary-light-blue mr-1"
          >
            {post.user.firstName} {post.user.lastName}
          </Link>
          {post.content}
        </Typography>
        <Link
          component="button"
          underline="none"
          fontSize="10px"
          className="text-primary-rose dark:text-dark-primary-light-blue"
          sx={{ my: 0.5 }}
        >
          {daysAgo(post.createdAt)} DAYS AGO
        </Link>
      </CardContent>
      <CardContent orientation="horizontal" sx={{ gap: 1 }}>
        <IconButton
          size="sm"
          variant="plain"
          className="text-primary-rose dark:text-dark-primary-light-blue"
          sx={{ ml: -1 }}
        >
          <Face />
        </IconButton>
        <Input
          placeholder="Add a comment…"
          className="block w-full rounded-md border-0 px-2 py-1.5 text-primary-rose dark:text-dark-primary shadow-sm ring-1 dark:bg-dark-primary-light-blue ring-inset ring-primary-rose dark:ring-dark-primary-light-blue placeholder:text-primary-rose sm:text-sm sm:leading-6"
        />
        <Button variant="solid">Post</Button>
      </CardContent>
      <CardContent>
        <List>
          {post.comments.map((comment) => {
            return <CommentItem key={comment.id} comment={comment} />;
          })}
        </List>
      </CardContent>
    </Card>
  );
};
