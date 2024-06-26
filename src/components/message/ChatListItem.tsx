import { FC } from "react";
import {
  Typography,
  Stack,
  ListItemButton,
  ListItem,
  ListDivider,
  Box,
} from "@mui/joy";
import CircleIcon from "@mui/icons-material/Circle";
import AvatarWithStatus from "@/components/message/AvatarWithStatus";
import { toggleMessagesPane } from "@/utils/switchMessagesPane";

const ChatListItem: FC = (props) => {
  const { id, sender, messages, selectedChatId, setSelectedChat } = props;
  const selected = selectedChatId === id;

  return (
    <>
      <ListItem color="secondary">
        <ListItemButton
          onClick={() => {
            toggleMessagesPane();
            setSelectedChat({ id, sender, messages });
          }}
          selected={selected}
          color={"secondary"}
          sx={{
            flexDirection: "column",
            alignItems: "initial",
            gap: 1,
          }}
        >
          <Stack direction="row" spacing={1.5}>
            <AvatarWithStatus online={true} src={sender.imageURI} />
            <Box sx={{ flex: 1 }}>
              <Typography
                level="title-sm"
                className="text-primary-rose dark:text-dark-primary-light-blue"
              >
                {sender.firstName + " " + sender.lastName}
              </Typography>
              <Typography
                level="body-sm"
                className="text-primary-rose dark:text-dark-primary-light-blue"
              >
                {sender.username}
              </Typography>
            </Box>
            <Box
              sx={{
                lineHeight: 1.5,
                textAlign: "right",
              }}
            >
              {messages[0] && messages[0].unread && (
                <CircleIcon
                  sx={{ fontSize: 12 }}
                  className="fill-primary-rose dark:fill-dark-primary-blue"
                />
              )}
              <Typography
                level="body-xs"
                display={{ xs: "none", md: "block" }}
                noWrap
                className="text-primary-rose dark:text-dark-primary-light-blue"
              >
                5 mins ago
              </Typography>
            </Box>
          </Stack>
          <Typography
            level="body-sm"
            sx={{
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            className="text-primary-rose dark:text-dark-primary-light-blue"
          >
            {messages[0] ? messages[0].content : ""}
          </Typography>
        </ListItemButton>
      </ListItem>
      <ListDivider sx={{ margin: 0 }} />
    </>
  );
};

export default ChatListItem;
