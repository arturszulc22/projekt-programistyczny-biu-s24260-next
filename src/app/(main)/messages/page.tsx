"use client";
import { FC, useState } from "react";
import { Sheet } from "@mui/joy";
import ChatsPane from "@/app/components/message/ChatsPane";
import MessagesPane from "@/app/components/message/MessagesPane";

const Messages: FC = () => {
  const chats = [
    {
      id: "1",
      sender: "John Doe",
      messages: [
        {
          id: "1",
          content: "Hi Olivia, I am currently working on the project.",
          timestamp: "Wednesday 9:00am",
          sender: "John Doe",
        },
        {
          id: "2",
          content: "That sounds great, Mabel! Keep up the good work.",
          timestamp: "Wednesday 9:10am",
          sender: "You",
        },
        {
          id: "3",
          timestamp: "Wednesday 11:30am",
          sender: "John Doe",
          content: "I will send the draft by end of the day.",
        },
        {
          id: "4",
          timestamp: "Wednesday 2:00pm",
          sender: "You",
          content: "Sure, I will be waiting for it.",
        },
        {
          id: "5",
          timestamp: "Wednesday 4:30pm",
          sender: "John Doe",
          content: "Just a heads up, I am about to send the draft.",
        },
        {
          id: "6",
          content:
            "Thanks Olivia! Almost there. I'll work on making those changes you suggested and will shoot it over.",
          timestamp: "Thursday 10:16am",
          sender: "John Doe",
        },
        {
          id: "7",
          content:
            "Hey Olivia, I've finished with the requirements doc! I made some notes in the gdoc as well for Phoenix to look over.",
          timestamp: "Thursday 11:40am",
          sender: "John Doe",
        },
        {
          id: "3",
          timestamp: "Thursday 11:40am",
          sender: "John Doe",
          content: "Tech requirements.pdf",
          attachment: {
            fileName: "Tech requirements.pdf",
            type: "pdf",
            size: "1.2 MB",
          },
        },
        {
          id: "8",
          timestamp: "Thursday 11:41am",
          sender: "You",
          content: "Awesome! Thanks. I'll look at this today.",
        },
        {
          id: "9",
          timestamp: "Thursday 11:44am",
          sender: "John Doe",
          content: "No rush though — we still have to wait for Lana's designs.",
        },
        {
          id: "10",
          timestamp: "Today 2:20pm",
          sender: "John Doe",
          content:
            "Hey Olivia, can you please review the latest design when you can?",
        },
        {
          id: "11",
          timestamp: "Just now",
          sender: "You",
          content: "Sure thing, I'll have a look today. They're looking great!",
        },
      ],
    },
    {
      id: "2",
      sender: "Jane Doe",
      messages: [
        {
          id: "1",
          content: "Hi Olivia, I am thinking about taking a vacation.",
          timestamp: "Wednesday 9:00am",
          sender: "Jane Doe",
        },
        {
          id: "2",
          content:
            "That sounds like a great idea, Katherine! Any idea where you want to go?",
          timestamp: "Wednesday 9:05am",
          sender: "You",
        },
        {
          id: "3",
          content: "I am considering a trip to the beach.",
          timestamp: "Wednesday 9:30am",
          sender: "Jane Doe",
        },
        {
          id: "4",
          content: "The beach sounds perfect this time of year!",
          timestamp: "Wednesday 9:35am",
          sender: "You",
        },
        {
          id: "5",
          content: "Yes, I agree. It will be a much-needed break.",
          timestamp: "Wednesday 10:00am",
          sender: "Jane Doe",
        },
        {
          id: "6",
          content: "Make sure to take lots of pictures!",
          timestamp: "Wednesday 10:05am",
          sender: "You",
        },
      ],
    },
    {
      id: "3",
      sender: "Jane Doe",
      messages: [
        {
          id: "1",
          content: "Hey!",
          timestamp: "5 mins ago",
          sender: "Jane Doe",
          unread: true,
        },
      ],
    },
    {
      id: "4",
      sender: "Jane Doe",
      messages: [
        {
          id: "1",
          content:
            "Hey Olivia, I was thinking about doing some home improvement work.",
          timestamp: "Wednesday 9:00am",
          sender: "Jane Doe",
        },
        {
          id: "2",
          content:
            "That sounds interesting! What kind of improvements are you considering?",
          timestamp: "Wednesday 9:05am",
          sender: "You",
        },
        {
          id: "3",
          content:
            "I am planning to repaint the walls and replace the old furniture.",
          timestamp: "Wednesday 9:15am",
          sender: "Jane Doe",
        },
        {
          id: "4",
          content:
            "That will definitely give your house a fresh look. Do you need help with anything?",
          timestamp: "Wednesday 9:20am",
          sender: "You",
        },
        {
          id: "5",
          content:
            "I might need some help with picking the right paint colors. Can we discuss this over the weekend?",
          timestamp: "Wednesday 9:30am",
          sender: "Jane Doe",
        },
      ],
    },

    {
      id: "5",
      sender: "Jane Doe",
      messages: [
        {
          id: "1",
          content: "Sup",
          timestamp: "5 mins ago",
          sender: "Jane Doe",
          unread: true,
        },
      ],
    },
    {
      id: "6",
      sender: "Jane Doe",
      messages: [
        {
          id: "1",
          content: "Heyo",
          timestamp: "5 mins ago",
          sender: "You",
          unread: true,
        },
      ],
    },
    {
      id: "7",
      sender: "Jane Doe",
      messages: [
        {
          id: "1",
          content:
            "Hey Olivia, I've finished with the requirements doc! I made some notes in the gdoc as well for Phoenix to look over.",
          timestamp: "5 mins ago",
          sender: "Jane Doe",
          unread: true,
        },
      ],
    },
  ];

  const [selectedChat, setSelectedChat] = useState(chats[0]);

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
