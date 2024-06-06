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
  Typography,
} from "@mui/joy";
import {
  Face,
  FavoriteBorder,
  ModeCommentOutlined,
  MoreHoriz,
  SendOutlined,
} from "@mui/icons-material";

export const PostCard = ({ post }) => {
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
          <Avatar size="lg" src={post.author.imageURI} />
        </Box>
        <Typography fontWeight="lg">
          <Link
            className="text-primary-rose dark:text-dark-primary-light-blue no-underline"
            href={"/profile/" + post.author.id}
            underline="none"
          >
            {post.author.firstName} {post.author.secondName}
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
            src="https://images.unsplash.com/photo-1717241365608-5565eef72d89?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
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
            <FavoriteBorder />
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
        <Link
          className="text-primary-rose dark:text-dark-primary-light-blue"
          component="button"
          underline="none"
          fontSize="sm"
          fontWeight="lg"
        >
          {"81K"} Likes
        </Link>
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
            {post.author.firstName} {post.author.secondName}
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
          2 DAYS AGO
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
    </Card>
  );
};
