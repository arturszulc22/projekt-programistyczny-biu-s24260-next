import { useEffect, useState } from "react";
import { Box, Sheet, Stack } from "@mui/joy";
import AvatarWithStatus from "./AvatarWithStatus";
import ChatBubble from "./ChatBubble";
import MessageInput from "./MessageInput";
import MessagesPaneHeader from "./MessagesPaneHeader";

export default function MessagesPane(props) {
  const { chat } = props;
  const [chatMessages, setChatMessages] = useState(chat.messages);
  const [textAreaValue, setTextAreaValue] = useState("");

  useEffect(() => {
    setChatMessages(chat.messages);
  }, [chat.messages]);

  return (
    <Sheet className="h-content flex flex-col">
      <MessagesPaneHeader sender={chat.sender} />
      <Box className="flex flex-col-reverse flex-1 min-h-0 px-2 py-3 overflow-y-auto bg-primary dark:bg-dark-primary">
        <Stack spacing={2} justifyContent="flex-end">
          {chatMessages.map((message, index: number) => {
            const isYou = message.sender === "You";

            return (
              <Stack
                key={index}
                direction="row"
                spacing={2}
                flexDirection={isYou ? "row-reverse" : "row"}
              >
                {message.sender !== "You" && (
                  <AvatarWithStatus
                    online={message.sender.online}
                    src={message.sender.avatar}
                  />
                )}
                <ChatBubble
                  variant={isYou ? "sent" : "received"}
                  {...message}
                />
              </Stack>
            );
          })}
        </Stack>
      </Box>
      <MessageInput
        textAreaValue={textAreaValue}
        setTextAreaValue={setTextAreaValue}
        onSubmit={() => {
          const newId = chatMessages.length + 1;
          const newIdString = newId.toString();
          setChatMessages([
            ...chatMessages,
            {
              id: newIdString,
              sender: "You",
              content: textAreaValue,
              timestamp: "Just now",
            },
          ]);
        }}
      />
    </Sheet>
  );
}
