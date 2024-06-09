import {
  Avatar,
  IconButton,
  ListItem,
  ListItemContent,
  ListItemDecorator,
  Typography,
} from "@mui/joy";
import { FavoriteBorder } from "@mui/icons-material";
import Link from "next/link";

const CommentItem = ({ comment }) => {
  return (
    <ListItem className="w-full">
      <ListItemDecorator className="self-start">
        <Link href={"/profile/" + comment.author.id}>
          <Avatar size="sm" src={comment.author.imageURI} />
        </Link>
      </ListItemDecorator>
      <ListItemContent className="flex flex-col">
        <Typography className="font-bold text-sm text-primary-rose dark:text-dark-primary-light-blue">
          {comment.author.firstName + " " + comment.author.secondName}
        </Typography>
        <Typography className="text-sm text-primary-rose dark:text-dark-primary-light-blue">
          {comment.content}
        </Typography>
      </ListItemContent>
      <IconButton
        variant="plain"
        className="text-primary-rose dark:text-dark-primary-light-blue"
        size="sm"
      >
        <FavoriteBorder />
      </IconButton>
    </ListItem>
  );
};

export default CommentItem;
