import { FC } from "react";
import {
  List,
  ListItem,
  ListItemDecorator,
  Typography,
} from "@mui/joy";
import CircleIcon from "@mui/icons-material/Circle";
import Link from "next/link";
import AvatarWithStatus from "@/components/message/AvatarWithStatus";
import { User } from "@/interfaces/user";

const FriendsList: FC = ({ friends }: { friends: User[] }) => {
  return (
    <div className="border-t border-primary-rose dark:border-dark-primary-light-blue pt-3">
      <Typography className="text-sm px-4 mb-3 text-primary-rose dark:text-dark-primary-light-blue font-bold">
        <CircleIcon className="fill-green-400 w-3 h-3 mr-3 ml-1.5" /> Online
      </Typography>
      <List
        sx={{
          minWidth: 240,
          borderRadius: "sm",
        }}
      >
        {friends.length > 0 && friends.map((user) => {
          return (
            <Link href={"/messages"} key={user.id}>
              <ListItem className="text-primary-rose dark:text-dark-primary-light-blue">
                <ListItemDecorator>
                  <AvatarWithStatus online={true} src={user.imageURI} />
                </ListItemDecorator>
                {user.firstName + " " + user.lastName}
              </ListItem>
            </Link>
          );
        })}
      </List>
    </div>
  );
};

export default FriendsList;
