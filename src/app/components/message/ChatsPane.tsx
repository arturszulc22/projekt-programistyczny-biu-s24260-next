import { FC } from "react";
import {
  Badge,
  Box,
  IconButton,
  Input,
  Stack,
  Sheet,
  Typography,
  List,
} from "@mui/joy";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ChatListItem from "./ChatListItem";
import { toggleMessagesPane } from "@/app/utils/switchMessagesPane";

const ChatsPane: FC = (props) => {
  const { chats, setSelectedChat, selectedChatId } = props;

  return (
    <Sheet
      sx={{
        borderRight: "1px solid",
        borderColor: "divider",
        height: "calc(100dvh - var(--Header-height))",
        overflowY: "auto",
      }}
      className="h-full bg-white dark:bg-dark-secondary"
    >
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        justifyContent="space-between"
        p={2}
        pb={1.5}
      >
        <Typography
          fontSize={{ xs: "md", md: "lg" }}
          component="h1"
          fontWeight="lg"
          endDecorator={
            <Badge badgeContent={4} size="sm" className="text-md ml-1 mb-2" />
          }
          sx={{ mr: "auto" }}
          className="text-primary-rose dark:text-dark-primary-light-blue"
        >
          Messages
        </Typography>
        <IconButton
          variant="plain"
          aria-label="edit"
          color="neutral"
          size="sm"
          sx={{ display: { xs: "none", sm: "unset" } }}
        >
          <EditNoteRoundedIcon className="fill-primary-rose dark:fill-dark-primary-light-blue" />
        </IconButton>
        <IconButton
          variant="plain"
          aria-label="edit"
          color="neutral"
          size="sm"
          sx={{ display: { sm: "none" } }}
          onClick={() => toggleMessagesPane()}
        >
          <CloseRoundedIcon className="fill-primary-rose dark:fill-dark-primary-light-blue" />
        </IconButton>
      </Stack>
      <Box sx={{ px: 2, pb: 1.5 }}>
        <Input
          size="sm"
          startDecorator={
            <SearchRoundedIcon className="fill-primary-rose dark:fill-dark-primary-blue" />
          }
          placeholder="Search"
          className="flex w-full rounded-md border-0 px-2 py-1.5 text-primary-rose dark:text-dark-primary shadow-sm ring-1 dark:bg-dark-primary-light-blue ring-inset ring-primary-rose dark:ring-dark-primary-light-blue placeholder:text-primary-rose dark:placeholder:text-dark-primary sm:text-sm sm:leading-6"
          aria-label="Search"
        />
      </Box>
      <List
        sx={{
          py: 0,
          "--ListItem-paddingY": "0.75rem",
          "--ListItem-paddingX": "1rem",
        }}
      >
        {chats.map((chat) => (
          <ChatListItem
            key={chat.id}
            {...chat}
            setSelectedChat={setSelectedChat}
            selectedChatId={selectedChatId}
          />
        ))}
      </List>
    </Sheet>
  );
};

export default ChatsPane;
