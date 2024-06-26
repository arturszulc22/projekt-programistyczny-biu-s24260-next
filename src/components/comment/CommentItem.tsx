"use client";
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemContent,
  ListItemDecorator,
  Typography,
} from "@mui/joy";
import { Delete, Favorite } from "@mui/icons-material";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { usePostsStore } from "@/providers/posts-store-provider";

const CommentItem = ({ comment, post, user }) => {
  const {
    isUserPostAuthor,
    removeComment,
    isCommentLikedByUser,
    setUserCommentLike,
    removeUserCommentLike,
  } = usePostsStore((state) => state);

  const isCommentAuthor = comment.user.id === user?.id;
  const isCommentLiked = isCommentLikedByUser(post.id, comment.id, user);
  const isUserAuthor = isUserPostAuthor(post, user);

  const handleLikeComment = () => {
    isCommentLikedByUser(post.id, comment.id, user)
      ? removeUserCommentLike(post.id, comment.id, user)
      : setUserCommentLike(post.id, comment.id, user);
  };

  return (
    <ListItem className="w-full">
      <ListItemDecorator className="self-start">
        <Link href={"/profile/" + comment.user.id}>
          <Avatar size="sm" src={comment.user.imageURI} />
        </Link>
      </ListItemDecorator>
      <ListItemContent className="flex flex-col">
        <Typography className="font-bold text-sm text-primary-rose dark:text-dark-primary-light-blue">
          {comment.user.firstName + " " + comment.user.lastName}
        </Typography>
        <Typography className="text-sm text-primary-rose dark:text-dark-primary-light-blue">
          {comment.content}
        </Typography>
      </ListItemContent>
      ({comment.likes.length})
      <IconButton
        onClick={handleLikeComment}
        variant="plain"
        className="text-primary-rose dark:text-dark-primary-light-blue"
        size="sm"
      >
        <Favorite
          className={twMerge(
            "stroke-2",
            !isCommentLiked &&
              "stroke-primary-rose dark:stroke-dark-primary-light-blue fill-transparent",
            isCommentLiked && "stroke-red-500 fill-red-500",
          )}
        />
      </IconButton>
      {(isUserAuthor || isCommentAuthor) && (
        <IconButton
          variant="plain"
          color="danger"
          size="sm"
          onClick={() => removeComment(post, comment.id)}
        >
          <Delete />
        </IconButton>
      )}
    </ListItem>
  );
};

export default CommentItem;
