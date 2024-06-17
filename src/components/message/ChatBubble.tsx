import { FC } from "react";
import { Sheet, Typography, Stack, Box } from "@mui/joy";
import { twMerge } from "tailwind-merge";

const ChatBubble: FC = (props) => {
  const { content, variant, timestamp, sender } = props;
  const isSent = variant === "sent";

  return (
    <Box className="max-w-1/2 min-w-auto">
      <Stack
        direction="row"
        justifyContent="space-between"
        spacing={2}
        className="mb-1"
      >
        <Typography className="text-xs text-primary-rose dark:text-dark-primary-light-blue">
          {sender === "You" ? sender : sender}
        </Typography>
        <Typography className="text-xs text-primary-rose dark:text-dark-primary-light-blue">
          {timestamp}
        </Typography>
      </Stack>
      <Box className="relative">
        <Sheet
          sx={{}}
          className={twMerge([
            isSent && "bg-primary-rose dark:bg-dark-secondary rounded-l-lg",
            !isSent && "bg-white dark:bg-dark-primary-blue rounded-r-lg",
            "p-3 ",
          ])}
        >
          <Typography
            level="body-sm"
            className={twMerge([
              isSent && "text-white dark:text-dark-primary-light-blue",
              !isSent && "text-primary-rose dark:text-dark-primary-light-blue",
            ])}
          >
            {content}
          </Typography>
        </Sheet>
      </Box>
    </Box>
  );
};

export default ChatBubble;
