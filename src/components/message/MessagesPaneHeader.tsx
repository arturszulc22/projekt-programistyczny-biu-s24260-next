import { FC } from "react";
import { Typography, Stack, IconButton, Button, Avatar } from "@mui/joy";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import { toggleMessagesPane } from "@/utils/switchMessagesPane";
import Link from "next/link";
import { User } from "@/interfaces/user";

const MessagesPaneHeader: FC = (props) => {
  const { sender }: User = props;

  return (
    <Stack className="py-2 px-1 md:px-2 border-b flex flex-row justify-between bg-white dark:bg-dark-secondary">
      <Stack
        direction="row"
        spacing={{ xs: 1, md: 2 }}
        className="flex items-center"
      >
        <IconButton
          variant="plain"
          color="neutral"
          size="sm"
          sx={{
            display: { xs: "inline-flex", sm: "none" },
          }}
          onClick={() => toggleMessagesPane()}
        >
          <ArrowBackIosNewRoundedIcon />
        </IconButton>
        <Avatar size="lg" src={sender.imageURI} />
        <div>
          <Typography
            className="font-bold text-lg text-nowrap text-primary-rose dark:text-dark-primary-light-blue"
            component="h2"
          >
            {sender.firstName + " " + sender.lastName}
          </Typography>
          <Typography level="body-sm">{sender.username}</Typography>
        </div>
      </Stack>
      <Stack spacing={1} direction="row" alignItems="center">
        <Button
          variant="solid"
          component={Link}
          href={"/profile/" + sender.id}
          size="sm"
          sx={{
            display: { xs: "none", md: "inline-flex" },
          }}
        >
          View profile
        </Button>
        <IconButton size="sm" variant="plain" color="neutral">
          <MoreVertRoundedIcon className="fill-primary-rose dark:fill-dark-primary-light-blue" />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default MessagesPaneHeader;
