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
  List,
  Typography,
  Link as LinkJoy,
  MenuButton,
  MenuItem,
  Menu,
  ListItemDecorator,
  ListDivider,
  Dropdown,
} from "@mui/joy";
import {
  DeleteForever,
  Edit,
  Face,
  Favorite,
  ModeComment,
  MoreVert,
  SendOutlined,
} from "@mui/icons-material";
import CommentItem from "@/components/comment/CommentItem";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { useAuthStore } from "@/providers/auth-store-provider";
import { usePostsStore } from "@/providers/posts-store-provider";
import Link from "next/link";
import { useYupValidationResolver } from "@/resolvers/yupValidationResolver";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  commentValidationSchema,
  CommentFormDataInterface,
} from "@/validations/comment-validation-schema";
import { compareDesc, parseISO } from "date-fns";
import { v4 as uuidv4 } from "uuid";
import { useNotificationsStore } from "@/providers/notifications-store-provider";

export const PostCard = ({ post }) => {
  const { user } = useAuthStore((state) => state);
  const {
    isUserLikePost,
    setUserLike,
    removeUserLike,
    addComment,
    removePost,
    handleEditPost,
  } = usePostsStore((state) => state);
  const { addNotification } = useNotificationsStore((state) => state);

  const [isOpenCommentSection, setIsOpenCommentSection] = useState(false);
  const [isEditModeEnabled, setIsEditModeEnabled] = useState(false);
  const [editedContent, setEditedContent] = useState("");

  const isUserLike = isUserLikePost(post, user);

  const resolver = useYupValidationResolver(commentValidationSchema);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CommentFormDataInterface>({ resolver });

  if (!user) return null;

  const onSubmit: SubmitHandler<CommentFormDataInterface> = async (data) => {
    try {
      const notification = {
        id: uuidv4(),
        user: post.user,
        sender: user,
        description: "commented your post!",
        createdAt: new Date().toISOString(),
        isRead: false,
      };

      const newComment = {
        ...data,
        user: user,
      };
      await addComment(post, newComment);
      reset();
      addNotification(notification);
    } catch (e: Error) {}
  };

  const handleToggleUserLike = () => {
    isUserLike ? removeUserLike(post, user) : setUserLike(post, user);

    if (!isUserLike) {
      const notification = {
        id: uuidv4(),
        user: post.user,
        sender: user,
        description: "like your post!",
        createdAt: new Date().toISOString(),
        isRead: false,
      };
      addNotification(notification);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    console.log("test");
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleEditPost(post.id, editedContent);
      setIsEditModeEnabled(false);
    }
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
          <LinkJoy
            className="text-primary-rose dark:text-dark-primary-light-blue no-underline"
            href={"/profile/" + post.user.id}
            underline="none"
            component={Link}
          >
            {post.user.firstName} {post.user.lastName}
          </LinkJoy>
          {post.attachedUsers.length > 0 && (
            <Typography
              size="sm"
              className="text-primary-rose dark:text-dark-primary-light-blue ml-2"
            >
              <Typography fontWeight="sm">is with: </Typography>
              {post.attachedUsers.map((user, index) => (
                <LinkJoy
                  className="text-primary-rose dark:text-dark-primary-light-blue no-underline ml-2"
                  href={"/profile/" + user.id}
                  underline="none"
                  key={index}
                  component={Link}
                >
                  {user.firstName} {user.lastName}
                </LinkJoy>
              ))}
            </Typography>
          )}
        </Typography>
        {user.id === post.user.id && (
          <Dropdown>
            <MenuButton
              slots={{ root: IconButton }}
              slotProps={{ root: { variant: "plain", color: "neutral" } }}
              className="ml-auto hover:bg-transparent dark:hover:bg-dark-primary-blue"
            >
              <MoreVert className="fill-primary-rose dark:fill-dark-primary-light-blue" />
            </MenuButton>
            <Menu
              placement="bottom-end"
              className="bg-primary dark:bg-dark-primary"
            >
              <MenuItem
                className="text-primary-rose dark:text-dark-primary-light-blue"
                onClick={() => setIsEditModeEnabled(true)}
              >
                <ListItemDecorator>
                  <Edit />
                </ListItemDecorator>
                Edit post
              </MenuItem>
              <ListDivider />
              <MenuItem
                variant="soft"
                color="danger"
                onClick={() => removePost(post.id)}
              >
                <ListItemDecorator sx={{ color: "inherit" }}>
                  <DeleteForever />
                </ListItemDecorator>
                Delete
              </MenuItem>
            </Menu>
          </Dropdown>
        )}
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
            onClick={() => handleToggleUserLike()}
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
          <Typography
            className="text-primary-rose dark:text-dark-primary-light-blue"
            component="button"
            underline="none"
            fontSize="sm"
            fontWeight="lg"
          >
            {post.likes.length} Likes
          </Typography>
          <Typography
            className="text-primary-rose dark:text-dark-primary-light-blue"
            underline="none"
            fontSize="sm"
            fontWeight="lg"
          >
            {post.comments.length} comments
          </Typography>
        </div>
        {!isEditModeEnabled ? (
          <>
            <Typography
              fontSize="sm"
              className="text-primary-rose dark:text-dark-primary-light-blue"
            >
              <Typography
                color="neutral"
                fontWeight="lg"
                className="text-primary-rose dark:text-dark-primary-light-blue mr-1"
              >
                {post.user.firstName} {post.user.lastName}
              </Typography>
              {post.content}
            </Typography>
            <Typography
              underline="none"
              fontSize="10px"
              className="text-primary-rose dark:text-dark-primary-light-blue"
              sx={{ my: 0.5 }}
            >
              {post.createdAt}
            </Typography>
          </>
        ) : (
          <textarea
            name="content"
            required
            placeholder="What do you think?"
            onKeyDown={handleKeyDown}
            defaultValue={post.content}
            onChange={(e) => setEditedContent(e.target.value)}
            className={twMerge(
              "block w-full rounded-md border-0 px-2 py-1.5 text-primary-rose dark:text-dark-primary shadow-sm ring-1 dark:bg-dark-primary-light-blue ring-inset ring-primary-rose dark:ring-dark-primary-light-blue placeholder:text-primary-rose dark:placeholder:text-dark-primary sm:text-sm sm:leading-6",
              errors.content && "ring-red-600 focus-visible:outline-red-600",
            )}
          />
        )}
      </CardContent>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
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
            {...register("content")}
            placeholder="Add a comment…"
            className={twMerge(
              "block flex w-full rounded-md border-0 px-2 py-1.5 text-primary-rose dark:text-dark-primary shadow-sm ring-1 dark:bg-dark-primary-light-blue ring-inset ring-primary-rose dark:ring-dark-primary-light-blue placeholder:text-primary-rose dark:placeholder:text-dark-primary sm:text-sm sm:leading-6",
              errors.content && "ring-red-600 focus-visible:outline-red-600",
            )}
          />
          <Button variant="solid" type="submit">
            Post
          </Button>
        </CardContent>
      </form>
      <CardContent>
        {isOpenCommentSection && (
          <List className="max-h-64 overflow-y-auto">
            {isOpenCommentSection &&
              post.comments
                .sort((a, b) =>
                  compareDesc(parseISO(a.createdAt), parseISO(b.createdAt)),
                )
                .map((comment) => (
                  <CommentItem
                    key={comment.id}
                    comment={comment}
                    post={post}
                    user={user}
                  />
                ))}
          </List>
        )}
      </CardContent>
    </Card>
  );
};
