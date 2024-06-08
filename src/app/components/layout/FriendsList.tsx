import { FC } from "react";
import {
  Avatar,
  List,
  ListDivider,
  ListItem,
  ListItemDecorator,
  Typography,
} from "@mui/joy";
import CircleIcon from "@mui/icons-material/Circle";
import Link from "next/link";

const FriendsList: FC = () => {
  return (
    <div className="border-t border-primary-rose dark:border-dark-primary-light-blue pt-3">
      <Typography className="text-sm px-4 mb-3 text-primary-rose dark:text-dark-primary-light-blue font-bold">
        <CircleIcon className="fill-green-400 w-3 h-3 mr-3 ml-1.5"/> Online
      </Typography>
      <List
        sx={{
          minWidth: 240,
          borderRadius: "sm",
        }}
      >
          <Link href="/profile/1">
              <ListItem className="text-primary-rose dark:text-dark-primary-light-blue">
                  <ListItemDecorator className="mr-6">
                      <Avatar size="sm" src="https://images.unsplash.com/photo-1717780084943-305381b5f8f0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                  </ListItemDecorator>
                  Mabel Boyle
              </ListItem>
          </Link>
          <ListDivider inset="startContent" />
      </List>
    </div>
  );
};

export default FriendsList;
