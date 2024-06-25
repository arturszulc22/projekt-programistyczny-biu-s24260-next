"use client";
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
  ModeComment,
  MoreHoriz,
  SendOutlined,
} from "@mui/icons-material";
import CommentItem from "@/components/comment/CommentItem";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { useAuthStore } from "@/providers/auth-store-provider";
import { usePostsStore } from "@/providers/posts-store-provider";

export const PostCard = ({ post }) => {
  const { user } = useAuthStore((state) => state);
  const { isUserLikePost, setUserLike, removeUserLike } =
    usePostsStore((state) => state);
  const [isOpenCommentSection, setIsOpenCommentSection] = useState(false);

  const isUserLike = isUserLikePost(post, user);
  
  

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
          {post.attachedUsers.length > 0 && (
            <Typography
              size="sm"
              className="text-primary-rose dark:text-dark-primary-light-blue ml-2"
            >
              <Typography fontWeight="sm">is with: </Typography>
              {post.attachedUsers.map((user, index) => (
                <Link
                  className="text-primary-rose dark:text-dark-primary-light-blue no-underline ml-2"
                  href={"/profile/" + user.id}
                  underline="none"
                  key={index}
                >
                  {user.firstName} {user.lastName}
                </Link>
              ))}
            </Typography>
          )}
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
            onClick={() =>
              isUserLike ? removeUserLike(post, user) : setUserLike(post, user)
            }
          >
            <Favorite
              className={twMerge(
                "stroke-2",
                !isUserLike &&
                  "stroke-primary-rose dark:stroke-dark-primary-light-blue fill-transparent",
                isUserLike && "stroke-red-500 fill-red-500",
              )}
            />
          </IconButton>
          <IconButton
            variant="plain"
            className="text-primary-rose dark:text-dark-primary-light-blue"
            size="sm"
            onClick={() => setIsOpenCommentSection(!isOpenCommentSection)}
          >
            <ModeComment
              className={twMerge(
                "stroke-2",
                isOpenCommentSection &&
                  "fill-primary-rose dark:fill-dark-primary-light-blue",
                !isOpenCommentSection &&
                  "stroke-primary-rose dark:stroke-dark-primary-light-blue fill-transparent",
              )}
            />
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
          {post.createdAt}
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
        {isOpenCommentSection && (
          <List className="max-h-32 overflow-scroll">
            {isOpenCommentSection &&
              post.comments.map((comment) => (
                <CommentItem key={comment.id} comment={comment} />
              ))}
          </List>
        )}
      </CardContent>
    </Card>
  );
};
