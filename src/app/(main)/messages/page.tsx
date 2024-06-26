"use client";
import { FC, useState } from "react";
import { Container, Sheet, Typography } from "@mui/joy";
import ChatsPane from "@/components/message/ChatsPane";
import MessagesPane from "@/components/message/MessagesPane";
import { useAuthStore } from "@/providers/auth-store-provider";
import { useUsersStore } from "@/providers/users-store-provider";
import { v4 as uuidv4 } from "uuid";

const Messages: FC = () => {
  const { user: auth } = useAuthStore((state) => state);
  const { getUserFriends } = useUsersStore((state) => state);

  const users = getUserFriends(auth);

  const chats = [
    ...users.map((friend) => {
      return {
        id: uuidv4(),
        sender: { ...friend },
        messages: [],
      };
    }),
  ];

  const [selectedChat, setSelectedChat] = useState(chats[0]);

  if (chats.length === 0)
    return (
      <Container className="pt-10">
        <Typography fontSize="xl" className="text-primary-rose dark:text-dark-primary-light-blue">
          Sorry but you don't have any friends to massage to...
        </Typography>
      </Container>
    );

  return (
    <Sheet
      sx={{
        flex: 1,
        width: "100%",
        mx: "auto",
        pt: { xs: "var(--Header-height)", sm: 0 },
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "minmax(min-content, min(30%, 400px)) 1fr",
        },
      }}
    >
      <Sheet
        sx={{
          position: { xs: "fixed", sm: "sticky" },
          transform: {
            xs: "translateX(calc(100% * (var(--MessagesPane-slideIn, 0) - 1)))",
            sm: "none",
          },
          transition: "transform 0.4s, width 0.4s",
          zIndex: 100,
          width: "100%",
          top: 64,
        }}
        className="h-content"
      >
        <ChatsPane
          chats={chats}
          selectedChatId={selectedChat.id}
          setSelectedChat={setSelectedChat}
        />
      </Sheet>
      <MessagesPane chat={selectedChat} />
    </Sheet>
  );
};

export default Messages;
