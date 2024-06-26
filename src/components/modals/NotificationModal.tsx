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
import { useNotificationsStore } from "@/providers/notifications-store-provider";
import { useAuthStore } from "@/providers/auth-store-provider";

const NotificationModal: FC = ({ isOpen, onCloseModal }) => {
  const { user } = useAuthStore((state) => state);
  const { getNotificationsForUser, removeNotification } = useNotificationsStore(
    (state) => state,
  );

  const notifications = getNotificationsForUser(user?.id || "");

  return (
    <Drawer open={isOpen} onClose={onCloseModal} anchor="right">
      <ModalClose onClick={onCloseModal} />
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
                <Avatar src={notification.sender.imageURI} />
              </ListItemDecorator>
              <ListItemContent>
                <Typography
                  level="title-sm"
                  className="text-primary-rose dark:text-dark-primary-light-blue"
                >
                  {notification.sender.firstName +
                    " " +
                    notification.sender.lastName}
                </Typography>
                <Typography
                  level="body-sm"
                  noWrap
                  className="text-secondary dark:text-dark-primary-light-blue"
                >
                  {notification.description}
                </Typography>
              </ListItemContent>
              <Button
                variant="plain"
                onClick={() => removeNotification(notification.id)}
              >
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
