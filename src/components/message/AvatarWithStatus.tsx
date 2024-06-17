import { FC } from "react";
import { Badge, Avatar } from "@mui/joy";

const AvatarWithStatus: FC = (props) => {
  const { online = false, ...other } = props;
  return (
    <div>
      <Badge
        color={online ? "success" : "error"}
        variant={online ? "solid" : "soft"}
        size="sm"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeInset="4px 4px"
      >
        <Avatar size="sm" {...other} />
      </Badge>
    </div>
  );
};

export default AvatarWithStatus;
