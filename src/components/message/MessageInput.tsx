import { FC, useRef } from "react";
import { Stack, Textarea, FormControl, Button, Box } from "@mui/joy";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

const MessageInput: FC = (props) => {
  const { textAreaValue, setTextAreaValue, onSubmit } = props;
  const textAreaRef = useRef(null);
  const handleClick = () => {
    if (textAreaValue.trim() !== "") {
      onSubmit();
      setTextAreaValue("");
    }
  };

  return (
    <Box className="bg-primary dark:bg-dark-primary px-2 py-3">
      <FormControl>
        <Textarea
          placeholder="Type something here…"
          aria-label="Message"
          className="flex w-full rounded-md border-0 px-2 py-1.5 text-primary-rose dark:text-dark-primary shadow-sm ring-1 dark:bg-dark-primary-light-blue ring-inset ring-primary-rose dark:ring-dark-primary-light-blue placeholder:text-primary-rose dark:placeholder:text-dark-primary sm:text-sm sm:leading-6"
          ref={textAreaRef}
          onChange={(e) => {
            setTextAreaValue(e.target.value);
          }}
          value={textAreaValue}
          minRows={3}
          maxRows={10}
          endDecorator={
            <Stack className="flex grow py-1 pr-1 border-t">
              <Button
                className="ml-auto self-center rounded-sm"
                endDecorator={<SendRoundedIcon />}
                onClick={handleClick}
              >
                Send
              </Button>
            </Stack>
          }
          onKeyDown={(event) => {
            if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
              handleClick();
            }
          }}
          sx={{
            "& textarea:first-of-type": {
              minHeight: 72,
            },
          }}
        />
      </FormControl>
    </Box>
  );
};

export default MessageInput;
