"use client";
import { FC, useState } from "react";
import {
  Avatar,
  Button,
  DialogTitle,
  Drawer,
  List,
  ListItem,
  ListItemContent,
  ListItemDecorator,
  ModalClose,
  Typography,
} from "@mui/joy";
import DeleteIcon from "@mui/icons-material/Delete";

const NotificationModal: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const notifications = [
    {
      id: 1,
      title: "Brunch this weekend?",
      content: "test message content",
      user: {
        id: 1,
        firstName: "Jan",
        secondName: "Kowalski",
        imageURI:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 2,
      title: "Brunch this weekend?",
      content: "test message content",
      user: {
        id: 1,
        firstName: "Jan",
        secondName: "Kowalski",
        imageURI:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
  ];

  return (
    <Drawer open={isOpen} onClose={() => setIsOpen(false)} anchor="right">
      <ModalClose />
      <DialogTitle className="text-primary-rose dark:text-dark-primary-light-blue">
        Inbox
      </DialogTitle>
      <List
        aria-labelledby="ellipsis-list-demo"
        sx={{ "--ListItemDecorator-size": "56px" }}
      >
        {notifications.map((notification) => {
          return (
            <ListItem key={notification.id} className="my-2">
              <ListItemDecorator>
                <Avatar src={notification.user.imageURI} />
              </ListItemDecorator>
              <ListItemContent>
                <Typography
                  level="title-sm"
                  className="text-primary-rose dark:text-dark-primary-light-blue"
                >
                  {notification.title}
                </Typography>
                <Typography
                  level="body-sm"
                  noWrap
                  className="text-secondary dark:text-dark-primary-light-blue"
                >
                  {notification.content}
                </Typography>
              </ListItemContent>
              <Button variant="plain">
                <DeleteIcon />
              </Button>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

export default NotificationModal;
